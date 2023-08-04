import { json } from '@shopify/remix-oxygen';
import { useLoaderData } from '@remix-run/react';
import {
  flattenConnection,
  AnalyticsPageType,
  Pagination,
  getPaginationVariables,
} from '@shopify/hydrogen';
import invariant from 'tiny-invariant';

import {
  PageHeader,
  Text,
  SortFilter,
  NewSortFilter,
  ProductGrid,
  Container
} from '~/components';
import { PRODUCT_CARD_FRAGMENT } from '~/data/fragments';
import { routeHeaders } from '~/data/cache';
import { seoPayload } from '~/lib/seo.server';
import { getImageLoadingPriority } from '~/lib/const';

import { CurrencyDollarIcon, GlobeAmericasIcon } from '@heroicons/react/24/outline'

export const headers = routeHeaders;

export async function loader({ params, request, context }) {
  const paginationVariables = getPaginationVariables(request, {
    pageBy: 12,
  });
  const { collectionHandle } = params;

  invariant(collectionHandle, 'Missing collectionHandle param');

  const searchParams = new URL(request.url).searchParams;
  const knownFilters = ['productVendor', 'productType'];
  const available = 'available';
  const variantOption = 'variantOption';
  const { sortKey, reverse } = getSortValuesFromParam(searchParams.get('sort'));
  const filters = [];
  const appliedFilters = [];

  for (const [key, value] of searchParams.entries()) {
    if (available === key) {
      filters.push({ available: value === 'true' });
      appliedFilters.push({
        label: value === 'true' ? 'In stock' : 'Out of stock',
        urlParam: {
          key: available,
          value,
        },
      });
    } else if (knownFilters.includes(key)) {
      filters.push({ [key]: value });
      appliedFilters.push({ label: value, urlParam: { key, value } });
    } else if (key.includes(variantOption)) {
      const [name, val] = value.split(':');
      filters.push({ variantOption: { name, value: val } });
      appliedFilters.push({ label: val, urlParam: { key, value } });
    }
  }

  // Builds min and max price filter since we can't stack them separately into
  // the filters array. See price filters limitations:
  // https://shopify.dev/custom-storefronts/products-collections/filter-products#limitations
  if (searchParams.has('minPrice') || searchParams.has('maxPrice')) {
    const price = {};
    if (searchParams.has('minPrice')) {
      price.min = Number(searchParams.get('minPrice')) || 0;
      appliedFilters.push({
        label: `Min: $${price.min}`,
        urlParam: { key: 'minPrice', value: searchParams.get('minPrice') },
      });
    }
    if (searchParams.has('maxPrice')) {
      price.max = Number(searchParams.get('maxPrice')) || 0;
      appliedFilters.push({
        label: `Max: $${price.max}`,
        urlParam: { key: 'maxPrice', value: searchParams.get('maxPrice') },
      });
    }
    filters.push({
      price,
    });
  }

  const { collection, collections } = await context.storefront.query(
    COLLECTION_QUERY,
    {
      variables: {
        ...paginationVariables,
        handle: collectionHandle,
        filters,
        sortKey,
        reverse,
        country: context.storefront.i18n.country,
        language: context.storefront.i18n.language,
      },
    },
  );

  if (!collection) {
    throw new Response('collection', { status: 404 });
  }

  const seo = seoPayload.collection({ collection, url: request.url });

  return json({
    collection,
    appliedFilters,
    collections: flattenConnection(collections),
    analytics: {
      pageType: AnalyticsPageType.collection,
      collectionHandle,
      resourceId: collection.id,
    },
    seo,
  });
}

export default function Collection() {
  const { collection, collections, appliedFilters } = useLoaderData();

  console.log(collection);
  const policies = [
    { name: 'Text & Patch Size', icon: GlobeAmericasIcon, description: 'Customize text and size of patch' },
    { name: 'Font & Background Colors', icon: CurrencyDollarIcon, description: "Customize the font and background color" },
    { name: 'Flags + Special Features', icon: CurrencyDollarIcon, description: "Customize the flag and other features" },
  ]
  
  return (
    <>
      <Container container="collection">
        <PageHeader heading={collection.title} variant="blogPost">
      </PageHeader>
      {collection?.handle == "create-your-patch" && (
        <>
              <h2 as="h2" className="text-2xl text-center font-bold pb-8 whitespace-pre-wrap">
                Step by Step
              </h2>

              <dl className="pb-4 grid grid-cols-1 gap-4 md:grid-cols-3">
                {policies.map((policy) => (
                  <div key={policy.name} className="rounded-lg border-2 border-white p-6 px-4 text-center">
                    <dt>
                      {/* <policy.icon className="mx-auto h-8 w-8 flex-shrink-0 text-white" aria-hidden="true" /> */}
                      <span className="mt-4 text-sm xl:text-2xl font-semibold text-white">{policy.name}</span>
                    </dt>
                    <dd className="mt-1 text-md xl:text-xl text-white font-bold">{policy.description}</dd>
                  </div>
                ))}
              </dl>
              </>
        ) || collection?.description && (
          <>
          </>
          )}
      {/* <NewSortFilter
          filters={collection.products.filters}
          appliedFilters={appliedFilters}
          collections={collections}
        >        </NewSortFilter> */}
      <SortFilter
        filters={collection.products.filters}
        appliedFilters={appliedFilters}
        collections={collections}
      >
        <ProductGrid
          key={collection.id}
          collection={collection}
          url={`/collections/${collection.handle}`}
          data-test="product-grid"
        />
      </SortFilter>
    </Container >
    </>
  );
}

function ctaFilters(){

}

const COLLECTION_QUERY = `#graphql
  query CollectionDetails(
    $handle: String!
    $country: CountryCode
    $language: LanguageCode
    $filters: [ProductFilter!]
    $sortKey: ProductCollectionSortKeys!
    $reverse: Boolean
    $first: Int
    $last: Int
    $startCursor: String
    $endCursor: String
  ) @inContext(country: $country, language: $language) {
    collection(handle: $handle) {
      id
      handle
      title
      description
      seo {
        description
        title
      }
      image {
        id
        url
        width
        height
        altText
      }
      products(
        first: $first,
        last: $last,
        before: $startCursor,
        after: $endCursor,
        filters: $filters,
        sortKey: $sortKey,
        reverse: $reverse
      ) {
        filters {
          id
          label
          type
          values {
            id
            label
            count
            input
          }
        }
        nodes {
          ...ProductCard
        }
        pageInfo {
          hasPreviousPage
          hasNextPage
          hasNextPage
          endCursor
        }
      }
    }
    collections(first: 100) {
      edges {
        node {
          title
          handle
        }
      }
    }
  }
  ${PRODUCT_CARD_FRAGMENT}
`;

function getSortValuesFromParam(sortParam) {
  switch (sortParam) {
    case 'price-high-low':
      return {
        sortKey: 'PRICE',
        reverse: true,
      };
    case 'price-low-high':
      return {
        sortKey: 'PRICE',
        reverse: false,
      };
    case 'best-selling':
      return {
        sortKey: 'BEST_SELLING',
        reverse: false,
      };
    case 'newest':
      return {
        sortKey: 'CREATED',
        reverse: true,
      };
    case 'featured':
      return {
        sortKey: 'MANUAL',
        reverse: false,
      };
    default:
      return {
        sortKey: 'RELEVANCE',
        reverse: false,
      };
  }
}
