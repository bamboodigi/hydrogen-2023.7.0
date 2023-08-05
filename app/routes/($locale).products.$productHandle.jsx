import { useRef, Suspense } from 'react';
import { Disclosure, Listbox } from '@headlessui/react';
import { defer, redirect } from '@shopify/remix-oxygen';
import { useLoaderData, Await } from '@remix-run/react';
import {
  AnalyticsPageType,
  Money,
  ShopPayButton,
  VariantSelector,
  getSelectedProductOptions,
} from '@shopify/hydrogen';
import invariant from 'tiny-invariant';
import clsx from 'clsx';
import {
  Heading,
  IconCaret,
  IconCheck,
  IconClose,
  ProductGallery,
  ProductSwimlane,
  Container,
  Skeleton,
  Text,
  Link,
  AddToCartButton,
  Button,
  PartialStarIcon,
  PatchBuilder,
} from '~/components';
import { StarIcon } from '@heroicons/react/20/solid'
import { getExcerpt } from '~/lib/utils';
import { seoPayload } from '~/lib/seo.server';
import { routeHeaders } from '~/data/cache';
import { MEDIA_FRAGMENT, PRODUCT_CARD_FRAGMENT } from '~/data/fragments';

import {
  JudgemeMedals,
  JudgemeCarousel,
  JudgemeReviewsTab,
  JudgemePreviewBadge,
  JudgemeReviewWidget,
  JudgemeVerifiedBadge,
  JudgemeAllReviewsCount,
  JudgemeAllReviewsRating,
} from "@judgeme/shopify-hydrogen";

import config from '~/data/config.js';

export const headers = routeHeaders;

const configProduct = config.webpage.product;

const stars_enabled = configProduct.stars;

export async function loader({ params, request, context }) {
  const { productHandle } = params;
  invariant(productHandle, 'Missing productHandle param, check route filename');

  const selectedOptions = getSelectedProductOptions(request);

  const { shop, product } = await context.storefront.query(PRODUCT_QUERY, {
    variables: {
      handle: productHandle,
      selectedOptions,
      country: context.storefront.i18n.country,
      language: context.storefront.i18n.language,
    },
  });

  const addon = await context.storefront.query(PRODUCT_QUERY, {
    variables: {
      handle: 'add-on-pro-ir-font-color',
      selectedOptions,
      country: context.storefront.i18n.country,
      language: context.storefront.i18n.language,
    },
  });

  // console.log(addon.product);
  // console.log(addon.product.variants);
  // console.log(addon.product.variants.nodes[0]);


  // console.log(product);

  // In order to show which variants are available in the UI, we need to query
  // all of them. But there might be a *lot*, so instead separate the variants
  // into it's own separate query that is deferred. So there's a brief moment
  // where variant options might show as available when they're not, but after
  // this deferred query resolves, the UI will update.
  const variants = context.storefront.query(VARIANTS_QUERY, {
    variables: {
      handle: productHandle,
      country: context.storefront.i18n.country,
      language: context.storefront.i18n.language,
    },
  });

  if (!product?.id) {
    throw new Response('product', { status: 404 });
  }

  if (!product.selectedVariant) {
    return redirectToFirstVariant({ product, request });
  }

  const recommended = getRecommendedProducts(context.storefront, product.id);
  const firstVariant = product.variants.nodes[0];
  const selectedVariant = product.selectedVariant ?? firstVariant;

  const productAnalytics = {
    productGid: product.id,
    variantGid: selectedVariant.id,
    name: product.title,
    variantName: selectedVariant.title,
    brand: product.vendor,
    price: selectedVariant.price.amount,
  };

  const seo = seoPayload.product({
    product,
    selectedVariant,
    url: request.url,
  });

  return defer({
    variants,
    product,
    shop,
    storeDomain: shop.primaryDomain.url,
    recommended,
    analytics: {
      pageType: AnalyticsPageType.product,
      resourceId: product.id,
      products: [productAnalytics],
      totalValue: parseFloat(selectedVariant.price.amount),
    },
    seo,
  });
}

function redirectToFirstVariant({ product, request }) {
  const searchParams = new URLSearchParams(new URL(request.url).search);
  const firstVariant = product.variants.nodes[0];
  for (const option of firstVariant.selectedOptions) {
    searchParams.set(option.name, option.value);
  }

  throw redirect(`/products/${product.handle}?${searchParams.toString()}`, 302);
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const demo = false;

const bgColors = ["#d100d1", "#8f00ff", "#ff006d", "#01befe", "#ffdd00", "#000", "#fff", "#ff7d00"];
const bgColor = "bg-[" + bgColors[3] + "]";


export default function Product() {
  const { product, shop, recommended, variants } = useLoaderData();
  const { media, title, vendor, descriptionHtml } = product;
  const { shippingPolicy, refundPolicy } = shop;

  // console.log(product);

  let numRatings = product.ratingCount?.value || 0;
  let rating = product.rating?.value || 0;

  if (numRatings) { numRatings = parseInt(numRatings) }

  const newTitle = title.replace(/ - Sticker$/, '').replace(/ - Limited Edition Patch \+ Sticker$/, '');

  return (
    <>
      {
        product.tags.includes('custom_patch') ? (
          <>
            <Container no_max padding="y" className={classNames(
              demo ? bgColor : bgColor, "px-0 md:px-8 lg:px-0")}>
              <div className="md:px-0 md:p-20 xl:px-28 xl:p-28 max-w-screen-2xl mx-auto grid 
        items-start md:gap-6 lg:gap-0 md:grid-cols-2"
              >
                <PatchBuilder product={product} config={configProduct} />
                </div>
            </Container>
          </>
        ) : (
          <>
            <Container no_max padding="y" className={classNames(
              demo ? bgColor : "bg-white", "px-0 md:px-8 lg:px-0 md:bg-white md:border-b-2 md:border-constrast")}>
              <div className="md:px-0 md:p-20 xl:px-28 xl:p-28 max-w-screen-2xl mx-auto grid 
        items-start md:gap-6 lg:gap-0 md:grid-cols-2 md:flex md:items-center md:justify-center"
              >
                <ProductGallery
                  media={media.nodes}
                  className="w-full justify-center lg:pr-16 md:w-1/2"
                  demo={demo}
                />
                <div className="md:w-1/2 sticky 
          md:pr-4 xl:pr-16 hiddenScroll 
          md:overflow-y-scroll bg-white md:bg-transparent 
          text-contrast border-2 border-t-2 border-l-2 border-r-2 border-black md:border-none rounded-t-2xl">
                  <section id="product-info" className="flex flex-col w-full max-w-[33rem] gap-6 p-7 lg:pb-0
            md:mx-auto md:px-0
            lg:">
                    <div className="grid gap-2">
                      <Heading as="h1" className="text-3xl leading-[2rem] pr-5 sm:pr-0 whitespace-normal">
                        {newTitle}
                      </Heading>
                      {product.rating && stars_enabled && (
                        <>
                          <Stars key={product.title} rating={rating} reviewCount={numRatings} />
                        </>
                      )}
                      {/* {vendor && (
                  <Text className={'opacity-50 font-medium'}>{vendor}</Text>
                )} */}
                    </div>
                    {/* <div className="grid gap-4 py-4">
                {descriptionHtml && (
                  <ProductDetail
                    title="Product Details"
                    content={descriptionHtml}
                  />
                )}
                {shippingPolicy?.body && (
                  <ProductDetail
                    title="Shipping"
                    content={getExcerpt(shippingPolicy.body)}
                    learnMore={`/policies/${shippingPolicy.handle}`}
                  />
                )}
                {refundPolicy?.body && (
                  <ProductDetail
                    title="Returns"
                    content={getExcerpt(refundPolicy.body)}
                    learnMore={`/policies/${refundPolicy.handle}`}
                  />
                )}
              </div> */}
                    <div
                      className="text-md md:text-lg lg:text-2xl leading-[1.45rem] 
                lg:leading-[1.55rem] tracking-[-.015rem] lg:tracking-[-.015rem] 
                text-contrast font-[400] prose dark:prose-invert"
                      dangerouslySetInnerHTML={{ __html: descriptionHtml }}
                    />
                    <Suspense fallback={<ProductForm variants={[]} />}>
                      <Await
                        errorElement="There was a problem loading related products"
                        resolve={variants}
                      >
                        {(resp) => (
                          <ProductForm
                            variants={resp.product?.variants.nodes || []}
                          />
                        )}
                      </Await>
                    </Suspense>
                  </section>
                </div>
              </div>
            </Container>
          </>
        )
      }
      <Container no_max padding="y" className="max-w-screen-2xl xl:py-16 mx-auto px-0 md:px-8 lg:px-0 py-4">
        <Suspense fallback={<Skeleton className="h-32" />}>
          <Await
            errorElement="There was a problem loading related products"
            resolve={recommended}
          >
            {(products) => (
              <ProductSwimlane center title={configProduct.relatedProductsText} products={products} />
            )}
          </Await>
        </Suspense>
        {/* <JudgemeReviewWidget id={product.id} /> */}
      </Container>
    </>
  );
}

export function ProductForm({ variants }) {
  const { product, analytics, storeDomain } = useLoaderData();

  const closeRef = useRef(null);

  /**
   * Likewise, we're defaulting to the first variant for purposes
   * of add to cart if there is none returned from the loader.
   * A developer can opt out of this, too.
   */
  const selectedVariant = product.selectedVariant;
  const isOutOfStock = !selectedVariant?.availableForSale;

  const isOnSale =
    selectedVariant?.price?.amount &&
    selectedVariant?.compareAtPrice?.amount &&
    selectedVariant?.price?.amount < selectedVariant?.compareAtPrice?.amount;

  const productAnalytics = {
    ...analytics.products[0],
    quantity: 1,
  };

  return (
    <div className="grid gap-10">
      <div className="grid gap-4">
        <VariantSelector
          handle={product.handle}
          options={product.options}
          variants={variants}
        >
          {({ option }) => {
            return (
              <div
                key={option.name}
                className="flex flex-col flex-wrap mb-4 gap-y-2 last:mb-0"
              >
                <Heading as="legend" size="lead" className="min-w-[4rem]">
                  {option.name}
                </Heading>
                <div className="flex flex-wrap items-baseline gap-4">
                  {option.values.length > 7 ? (
                    <div className="relative w-full">
                      <Listbox>
                        {({ open }) => (
                          <>
                            <Listbox.Button
                              ref={closeRef}
                              className={clsx(
                                'flex items-center justify-between w-full py-3 px-4 border border-primary',
                                open
                                  ? 'rounded-b md:rounded-t md:rounded-b-none'
                                  : 'rounded',
                              )}
                            >
                              <span>{option.value}</span>
                              <IconCaret direction={open ? 'up' : 'down'} />
                            </Listbox.Button>
                            <Listbox.Options
                              className={clsx(
                                'border-primary bg-contrast absolute bottom-12 z-30 grid h-48 w-full overflow-y-scroll rounded-t border px-2 py-2 transition-[max-height] duration-150 sm:bottom-auto md:rounded-b md:rounded-t-none md:border-t-0 md:border-b',
                                open ? 'max-h-48' : 'max-h-0',
                              )}
                            >
                              {option.values
                                .filter((value) => value.isAvailable)
                                .map(({ value, to, isActive }) => (
                                  <Listbox.Option
                                    key={`option-${option.name}-${value}`}
                                    value={value}
                                  >
                                    {({ active }) => (
                                      <Link
                                        to={to}
                                        className={clsx(
                                          'text-primary w-full p-2 transition rounded flex justify-start items-center text-left cursor-pointer',
                                          active && 'bg-primary/10',
                                        )}
                                        onClick={() => {
                                          if (!closeRef?.current) return;
                                          closeRef.current.click();
                                        }}
                                      >
                                        {value}
                                        {isActive && (
                                          <span className="ml-2">
                                            <IconCheck />
                                          </span>
                                        )}
                                      </Link>
                                    )}
                                  </Listbox.Option>
                                ))}
                            </Listbox.Options>
                          </>
                        )}
                      </Listbox>
                    </div>
                  ) : (
                    option.values.map(({ value, isAvailable, isActive, to }) => (
                      <Link
                        key={option.name + value}
                        to={to}
                        preventScrollReset
                        prefetch="intent"
                        replace
                        className={clsx(
                          'leading-none py-1 border-b-[1.5px] cursor-pointer transition-all duration-200',
                          isActive ? 'border-primary/50' : 'border-primary/0',
                          isAvailable ? 'opacity-100' : 'opacity-50',
                        )}
                      >
                        {value}
                      </Link>
                    ))
                  )}
                </div>
              </div>
            );
          }}
        </VariantSelector>
        {selectedVariant && (
          <div className="grid items-stretch gap-4">
            {isOutOfStock ? (
              <Button variant="secondary" disabled>
                <Text>Sold out</Text>
              </Button>
            ) : (
              <AddToCartButton
                lines={[
                  {
                    merchandiseId: selectedVariant.id,
                    quantity: 1,
                  },
                ]}
                width="30rem"
                variant="dark"
                className="py-4 xl:py-4 rounded-full w-full sm:w-[20rem] xl:w-[25rem]"
                data-test="add-to-cart"
                analytics={{
                  products: [productAnalytics],
                  totalValue: parseFloat(productAnalytics.price),
                }}
              >
                <Text
                  as="span"
                  size="none"
                  className="flex items-center justify-between gap-2 px-4 text-2xl xl:text-3xl"
                >
                  <span>{configProduct.addToCartText}</span> {' '}
                  <Money
                    withoutTrailingZeros
                    data={selectedVariant?.price}
                    as="span"
                  />
                  {isOnSale && (
                    <Money
                      withoutTrailingZeros
                      data={selectedVariant?.compareAtPrice}
                      as="span"
                      className="opacity-50 strike"
                    />
                  )}
                </Text>
              </AddToCartButton>
            )}
            {/* {!isOutOfStock && (
              <ShopPayButton
                width="100%"
                variantIds={[selectedVariant?.id]}
                storeDomain={storeDomain}
              />
            )} */}
          </div>
        )}
      </div>
    </div>
  );
}

function ProductDetail({ title, content, learnMore }) {
  return (
    <Disclosure key={title} as="div" className="grid w-full gap-2">
      {({ open }) => (
        <>
          <Disclosure.Button className="text-left">
            <div className="flex justify-between">
              <Text size="lead" as="h4">
                {title}
              </Text>
              <IconClose
                className={clsx(
                  'transition-transform transform-gpu duration-200',
                  !open && 'rotate-[45deg]',
                )}
              />
            </div>
          </Disclosure.Button>

          <Disclosure.Panel className={'pb-4 pt-2 grid gap-2'}>
            <div
              className="prose dark:prose-invert"
              dangerouslySetInnerHTML={{ __html: content }}
            />
            {learnMore && (
              <div className="">
                <Link
                  className="pb-px border-b border-primary/30 text-primary/50"
                  to={learnMore}
                >
                  Learn more
                </Link>
              </div>
            )}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

function Stars({ rating, reviewCount }) {
  if (rating) {
    rating = JSON.parse(rating).value;
    rating = parseFloat(rating);
  }
  const remainder = (rating % parseInt(rating)).toFixed(2);

  rating = parseInt(rating);
  return (
    <div className="flex items-center gap-2">
      <p className="sr-only">{rating} out of 5 stars</p>
      <div className="flex items-center relative">
        {[0, 1, 2, 3, 4].map((currentRating) => (
          <StarIcon
            key={currentRating}
            className={classNames(
              rating > currentRating ? 'text-black' : 'text-black star-outline',
              'h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0'
            )}
            aria-hidden="true"
          />
        ))}
        {remainder && (
          <PartialStarIcon
            percent={remainder}
            className="absolute right-0 text-black h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0"
            aria-hidden="true"
          />
        )}
      </div>
      <p className="text-sm sm:text-lg text-black font-bold">({reviewCount})</p>
    </div>
  );
}

const PRODUCT_VARIANT_FRAGMENT = `#graphql
  fragment ProductVariantFragment on ProductVariant {
    id
    availableForSale
    selectedOptions {
      name
      value
    }
    image {
      id
      url
      altText
      width
      height
    }
    price {
      amount
      currencyCode
    }
    compareAtPrice {
      amount
      currencyCode
    }
    sku
    title
    unitPrice {
      amount
      currencyCode
    }
    product {
      title
      handle
    }
  }
`;

const PRODUCT_QUERY = `#graphql
  query Product(
    $country: CountryCode
    $language: LanguageCode
    $handle: String!
    $selectedOptions: [SelectedOptionInput!]!
  ) @inContext(country: $country, language: $language) {
    product(handle: $handle) {
      id
      title
      vendor
      handle
      descriptionHtml
      description
      tags
      rating: metafield(namespace: "reviews", key: "rating") {
        value
      }
      ratingCount: metafield(namespace: "reviews", key: "rating_count") {
        value
      }
      options {
        name
        values
      }
      selectedVariant: variantBySelectedOptions(selectedOptions: $selectedOptions) {
        ...ProductVariantFragment
      }
      media(first: 7) {
        nodes {
          ...Media
        }
      }
      variants(first: 1) {
        nodes {
          ...ProductVariantFragment
        }
      }
      seo {
        description
        title
      }
    }
    shop {
      name
      primaryDomain {
        url
      }
      shippingPolicy {
        body
        handle
      }
      refundPolicy {
        body
        handle
      }
    }
  }
  ${MEDIA_FRAGMENT}
  ${PRODUCT_VARIANT_FRAGMENT}
`;

const VARIANTS_QUERY = `#graphql
  query variants(
    $country: CountryCode
    $language: LanguageCode
    $handle: String!
  ) @inContext(country: $country, language: $language) {
    product(handle: $handle) {
      variants(first: 250) {
        nodes {
          ...ProductVariantFragment
        }
      }
    }
  }
  ${PRODUCT_VARIANT_FRAGMENT}
`;

const RECOMMENDED_PRODUCTS_QUERY = `#graphql
  query productRecommendations(
    $productId: ID!
    $count: Int
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    recommended: productRecommendations(productId: $productId) {
      ...ProductCard
    }
    additional: products(first: $count, sortKey: BEST_SELLING) {
      nodes {
        ...ProductCard
      }
    }
  }
  ${PRODUCT_CARD_FRAGMENT}
`;

async function getRecommendedProducts(storefront, productId) {
  const products = await storefront.query(RECOMMENDED_PRODUCTS_QUERY, {
    variables: { productId, count: 12 },
  });

  invariant(products, 'No data returned from Shopify API');

  const mergedProducts = (products.recommended ?? [])
    .concat(products.additional.nodes)
    .filter(
      (value, index, array) =>
        array.findIndex((value2) => value2.id === value.id) === index,
    );

  const originalProduct = mergedProducts.findIndex(
    (item) => item.id === productId,
  );

  mergedProducts.splice(originalProduct, 1);

  return { nodes: mergedProducts };
}
