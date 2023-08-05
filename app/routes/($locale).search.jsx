import { defer } from '@shopify/remix-oxygen';
import { Await, Form, useLoaderData } from '@remix-run/react';
import { Suspense } from 'react';
import { Pagination, getPaginationVariables } from '@shopify/hydrogen';

import {
  FeaturedCollections,
  Grid,
  Heading,
  Input,
  PageHeader,
  ProductCard,
  ProductSwimlane,
  Section,
  Text,
  Container,
} from '~/components';
import {
  MagnifyingGlassIcon, 
} from '@heroicons/react/24/outline'

import { PAGINATION_SIZE } from '~/lib/const';
import { PRODUCT_CARD_FRAGMENT } from '~/data/fragments';
import { getImageLoadingPriority } from '~/lib/const';
import { seoPayload } from '~/lib/seo.server';

import config from '~/data/config.js';

import { getFeaturedData } from './($locale).featured-products';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export async function loader({ request, context: { storefront } }) {
  const searchParams = new URL(request.url).searchParams;
  const searchTerm = searchParams.get('q');
  const variables = getPaginationVariables(request, { pageBy: 8 });

  const { products } = await storefront.query(SEARCH_QUERY, {
    variables: {
      searchTerm,
      ...variables,
      country: storefront.i18n.country,
      language: storefront.i18n.language,
    },
  });

  const shouldGetRecommendations = !searchTerm || products?.nodes?.length === 0;

  const seo = seoPayload.collection({
    url: request.url,
    collection: {
      id: 'search',
      title: 'Search',
      handle: 'search',
      descriptionHtml: 'Search results',
      description: 'Search results',
      seo: {
        title: 'Search',
        description: `Showing ${products.nodes.length} search results for "${searchTerm}"`,
      },
      metafields: [],
      products,
      updatedAt: new Date().toISOString(),
    },
  });

  return defer({
    seo,
    searchTerm,
    products,
    noResultRecommendations: shouldGetRecommendations
      ? getNoResultRecommendations(storefront)
      : Promise.resolve(null),
  });
}

export default function Search() {
  const { searchTerm, products, noResultRecommendations } = useLoaderData();
  const noResults = products?.nodes?.length === 0;
  const title = searchTerm ? `Search results for "${searchTerm}"` : 'Search';

  return (
    <>
      <Container container="collection">
        <PageHeader padding="y" heading={title}>
          <SearchBar
            className="w-full flex mr-2 rounded-md shadow-sm border-white ring-1 ring-inset ring-white focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500"
            searchClassName="bg-contrast block w-full rounded-md border-0 py-4 pl-10 text-white ring-1 ring-inset ring-gray-300 placeholder:text-gray-200 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg font-bold sm:leading-6"
            searchTerm={searchTerm}
          />
        </PageHeader>
        {!searchTerm || noResults ? (
          <NoResults
            noResults={noResults}
            recommendations={noResultRecommendations}
          />
        ) : (
          <Pagination connection={products}>
            {({ nodes, isLoading, NextLink, PreviousLink }) => {
              const itemsMarkup = nodes.map((product, i) => (
                !product.tags.includes("custom_patch") ? (
                  <ProductCard
                  key={product.id}
                  product={product}
                  loading={getImageLoadingPriority(i)}
                  quickAdd={true}
                />
                ): (
                <ProductCard
                  key={product.id}
                  product={product}
                  loading={getImageLoadingPriority(i)}
                />
                )
              ));

              return (
                <>
                  <Grid data-test="product-grid" items={3} layout="products" className="grid-flow-row grid gap-3 gap-y-3 md:gap-4 lg:gap-6 xl:gap-6 grid-cols-2 md:grid-cols-3 false">{itemsMarkup}</Grid>
                  <div className="flex items-center justify-center mt-6">
                    <PreviousLink className="inline-block rounded font-medium text-center py-3 px-6 border border-primary/10 bg-contrast text-primary w-full">
                      {isLoading ? 'Loading...' : 'Previous'}
                    </PreviousLink>
                  </div>
                  <div className="flex items-center justify-center mt-6">
                    <NextLink className="inline-block border-2 border-primar font-bold text-center py-4 rounded-full bg-contrast text-primary w-full">
                      {isLoading ? 'Loading...' : 'Next'}
                    </NextLink>
                  </div>
                </>
              );
            }}
          </Pagination>
        )}
      </Container>
    </>
  );
}

function SearchBar({ className, searchClassName, iconClassName, searchTerm }) {

  return (
    <>
      <Form
        method="get"
        className={classNames(
          className ? className : '', ''
        )}>
        <div className={classNames(
          iconClassName ? iconClassName : '', 'pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'
        )}>
          <MagnifyingGlassIcon className="h-5 w-5 text-white" aria-hidden="true" />
        </div>
        <input
          defaultValue={searchTerm}
          type="search"
          name="q"
          variant="search"
          placeholder="Search"
          className={classNames(
            searchClassName ? searchClassName : '', ''
          )}
        />
      </Form>
    </>
  );
}


function NoResults({ noResults, recommendations }) {
  return (
    <>
      {noResults && (
        <Section padding="x">
          <Text className="opacity-50">
            No results, try a different search.
          </Text>
        </Section>
      )}
      <Suspense>
        <Await
          errorElement="There was a problem loading related products"
          resolve={recommendations}
        >
          {(result) => {
            if (!result) return null;
            const { featuredCollections, featuredProducts } = result;

            return (
              <>
                {/* <FeaturedCollections
                  title="Trending Collections"
                  collections={featuredCollections}
                /> */}
                <ProductSwimlane
                  title={config.webpage.product.relatedProductsText}
                  products={featuredProducts}
                />
              </>
            );
          }}
        </Await>
      </Suspense>
    </>
  );
}

export function getNoResultRecommendations(storefront) {
  return getFeaturedData(storefront, { pageBy: PAGINATION_SIZE });
}

const SEARCH_QUERY = `#graphql
  query PaginatedProductsSearch(
    $country: CountryCode
    $endCursor: String
    $first: Int
    $language: LanguageCode
    $last: Int
    $searchTerm: String
    $startCursor: String
  ) @inContext(country: $country, language: $language) {
    products(
      first: $first,
      last: $last,
      before: $startCursor,
      after: $endCursor,
      sortKey: RELEVANCE,
      query: $searchTerm
    ) {
      nodes {
        ...ProductCard
      }
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
    }
  }

  ${PRODUCT_CARD_FRAGMENT}
`;
