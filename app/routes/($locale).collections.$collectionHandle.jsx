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
import { PRODUCT_CARD_FRAGMENT} from '~/data/fragments';
import { routeHeaders } from '~/data/cache';
import { seoPayload } from '~/lib/seo.server';
import { getImageLoadingPriority } from '~/lib/const';

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

  return (
    <>
      <Container container="collection">
        <PageHeader heading={collection.title} variant="blogPost">
          {collection?.handle == "create-your-patch" && (
            <div className="w-full">
              <Text format width="wide" as="h2" className="pb-8 font-bold sm:text-lg lg:text-2xl">
                Discover our customizable patch collection, offering a plethora of personalization options including flags, icons, symbols, text, and colors.
              </Text>
              <Text format width="wide" as="h2" className="font-bold sm:text-lg lg:text-2xl">
                In under 30 seconds, design a unique patch that embodies your courage and dedication.
              </Text>
            </div>
          ) || collection?.description && (
            <div className="flex items-baseline justify-between w-full">
              <div>
                <Text format width="wide" as="h2" className="inline-block font-bold">
                  {collection.description}
                </Text>
              </div>
            </div>
          )}
        </PageHeader>
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
      </Container>
    </>
  );
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
