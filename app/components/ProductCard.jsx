import clsx from 'clsx';
import { flattenConnection, Image, Money, useMoney } from '@shopify/hydrogen';
import { Text, Link, AddToCartButton, Heading, PartialStarIcon } from '~/components';
import { StarIcon } from '@heroicons/react/20/solid'
import { isDiscounted, isNewArrival } from '~/lib/utils';
import { getProductPlaceholder } from '~/lib/placeholders';

// This component is responsible for cards that appear outside the product page
// Includes featured products, collection pages, and search results

import chicken from '../../public/chicken-demo.png';

console.log(chicken)

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function ProductCard({
  product,
  label,
  className,
  loading,
  onClick,
  quickAdd,
}) {
  let cardLabel;


  // This will show a demo of a product image with a transparent background and filling the background with css
  const transparentDemo = true;
  const bgColor = 'bg-[transprent]';

  let numRatings = product.ratingCount?.value || 0;
  let rating = product.rating?.value || 0;

  if (numRatings) { numRatings = parseInt(numRatings) }

  const cardProduct = product?.variants ? product : getProductPlaceholder();
  if (!cardProduct?.variants?.nodes?.length) return null;

  const firstVariant = flattenConnection(cardProduct.variants)[0];

  if (!firstVariant) return null;
  const { image, price, compareAtPrice } = firstVariant;

  const isPatchBuilder = product.tags.includes("custom_patch");
  //console.log(isPatchBuilder);

  if (label) {
    cardLabel = label;
  } else if (isDiscounted(price, compareAtPrice)) {
    cardLabel = 'Sale';
  } else if (isNewArrival(product.publishedAt)) {
    cardLabel = 'New';
  }

  const productAnalytics = {
    productGid: product.id,
    variantGid: firstVariant.id,
    name: product.title,
    variantName: firstVariant.title,
    brand: product.vendor,
    price: firstVariant.price.amount,
    quantity: 1,
  };

  //console.log(product)

  function isAddOn() {

    // identifies add-on products to hide from any collection pages
    if (product.tags.includes("add-on")) {
      return true;
    }
    return false;
  }

  function isSticker() {

    // product.title contains "- limited edition patch + sticker" at the end of the title
    // (product.title)
    if (product.title.toLowerCase().includes("- limited edition patch + sticker") || product.title.toLowerCase().includes(" - sticker")) {
      return true;
    }
    return false;
  }

  function isLimited() {

    // product.title contains " - sticker" at the end of the title

    if (product.title.toLowerCase().includes("- limited edition patch + sticker")) {
      return true;
    }
    return false;
  }

  const newTitle = product.title.replace(/ - Sticker$/, '').replace(/ - Limited Edition Patch \+ Sticker$/, '');

  // console.log(newTitle.length)

  return (
    <>
      {!isAddOn() && (
        <div className="relative flex flex-col justify-between gap-4 border-2 rounded-xl md:rounded-2xl p-2 md:p-6">
          <Link
            onClick={onClick}
            to={`/products/${product.handle}`}
            prefetch="intent"
            className="flex flex-col gap-4 md:gap-8 justify-between"
          >
            <div className="flex flex-col gap-2 justify-between">
              {
                newTitle.length > 40 ? (
                  <Heading
                    className="text-sm leading-lg md:text-xl lg:text-3xl font-bold w-full overflow-hidden whitespace-wrap"
                    as="h3"
                    size="none"
                  >
                    {newTitle}
                  </Heading>
                ) : (
                  <Heading
                    className="text-md leading-lg md:text-xl lg:text-3xl font-bold w-full overflow-hidden whitespace-wrap"
                    as="h3"
                    size="none"
                  >
                    {newTitle}
                  </Heading>
                )
              }
              {product.rating && (
                <>
                  <Stars key={product.title} rating={rating} reviewCount={numRatings} />
                </>
              )}
            </div>
          </Link>
          <div className="flex flex-col gap-4 md:gap-8 justify-between">
            <Link
              onClick={onClick}
              to={`/products/${product.handle}`}
              prefetch="intent"
              className="flex flex-col gap-4 md:gap-8 justify-between"
            >
              <div className={clsx('grid gap-4', className)}>
                <div className={clsx('card-image aspect-[1/1]', bgColor)}>
                  {image && (
                    transparentDemo ? (<>
                      <img alt="Macho Chicken Randy Savage - Sticker Sticker PatchPanel"
                        decoding="async" height="100" loading="eager"
                        sizes="(min-width: 64em) 25vw, (min-width: 48em) 30vw, 45vw"
                        src={chicken}
                        width="100" className="object-cover w-full fadeIn" style={{ width: '100%', aspectRatio: '1 / 1'}}></img>
                      {/* < Image
                        className="object-cover w-full fadeIn"
                        sizes="(min-width: 64em) 25vw, (min-width: 48em) 30vw, 45vw"
                        aspectRatio="1/1"
                        data={image}
                        alt={image.altText || `Picture of ${product.title}`}
                        loading={loading}
                      /> */}
                    </>) : (<>
                      < Image
                        className="object-cover w-full fadeIn"
                        sizes="(min-width: 64em) 25vw, (min-width: 48em) 30vw, 45vw"
                        aspectRatio="1/1"
                        data={image}
                        alt={image.altText || `Picture of ${product.title}`}
                        loading={loading}
                      />
                    </>)
                  )}
                  <Text
                    as="label"
                    size="fine"
                    className="absolute top-0 right-0 m-4 text-right text-notice"
                  >
                    {cardLabel}
                  </Text>
                </div>
                {
                  isSticker() && (
                    <>
                      <StickerBadge />
                    </>
                  )
                }
                {
                  isLimited() && (
                    <>
                      <LimitedEditionBadge />
                    </>
                  )
                }
              </div>
            </Link>
            {quickAdd && (
              <AddToCartButton
                lines={[
                  {
                    quantity: 1,
                    merchandiseId: firstVariant.id,
                  },
                ]}
                variant="secondary"
                className="flex justify-between font-bold"
                analytics={{
                  products: [productAnalytics],
                  totalValue: parseFloat(productAnalytics.price),
                }}
              >
                <Text as="span" className="text-sm md:text-xl font-bold flex items-center justify-center gap-2">
                  Add to Bag
                </Text>
                <div className="flex gap-4">
                  <Text className="flex gap-2">
                    {isPatchBuilder && (
                      <>
                        <span className="text-sm font-semibold">
                          Starting at
                        </span>
                      </>
                    )
                    }
                    <Money
                      withoutTrailingZeros
                      data={price}
                      className="text-sm md:text-xl font-bold" />
                    {isDiscounted(price, compareAtPrice) && (
                      <CompareAtPrice
                        className={'text-sm md:text-xl opacity-50 font-bold'}
                        data={compareAtPrice}
                      />
                    )}
                  </Text>
                </div>
              </AddToCartButton>
            )}
          </div>
        </div>

      )}
    </>
  );
}

function StickerBadge({ children }) {
  return (
    <span className="transform rotate-[22deg] rounded-full shadow absolute z-10 -top-2 -right-4 inline-flex items-center tracking-[-.02rem] px-2 py-4 text-xs md:text-copy md:py-5 font-medium bg-gradient-to-r from-yellow-100 to-yellow-400 text-contrast">
      Sticker
    </span>
  )
}

function LimitedEditionBadge({ children }) {
  return (
    <span className="transform rotate-[22deg] rounded-full border-2 text-white shadow absolute z-10 -top-2 -right-2 inline-flex items-center tracking-[-.02rem] px-2 py-4 text-[.07rem] md:text-md font-medium bg-gradient-to-r from-black to-gray-900">
      Limited
    </span>
  )
}


function CompareAtPrice({ data, className }) {
  const { currencyNarrowSymbol, withoutTrailingZerosAndCurrency } =
    useMoney(data);

  const styles = clsx('strike', className);

  return (
    <span className={styles}>
      {currencyNarrowSymbol}
      {withoutTrailingZerosAndCurrency}
    </span>
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
              rating > currentRating ? 'text-white' : 'text-black star-outline',
              'h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0'
            )}
            aria-hidden="true"
          />
        ))}
        {remainder && (
          <PartialStarIcon
            percent={remainder}
            className="absolute right-0 text-white h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0"
            aria-hidden="true"
          />
        )}
      </div>
      <p className="text-sm sm:text-lg text-white font-bold">({reviewCount})</p>
    </div>
  );
}
//     {!isAddOn() && (
//       <div className="flex flex-col gap-2">
//         <Link
//           onClick={onClick}
//           to={`/products/${product.handle}`}
//           prefetch="intent"
//         >
//           <div className={clsx('grid gap-4', className)}>
//             <div className="card-image aspect-[1/1] bg-primary/5">
//               {image && (
//                 <Image
//                   className="object-cover w-full fadeIn"
//                   sizes="(min-width: 64em) 25vw, (min-width: 48em) 30vw, 45vw"
//                   aspectRatio="1/1"
//                   data={image}
//                   alt={image.altText || `Picture of ${product.title}`}
//                   loading={loading}
//                 />
//               )}
//               <Text
//                 as="label"
//                 size="fine"
//                 className="absolute top-0 right-0 m-4 text-right text-notice"
//               >
//                 {cardLabel}
//               </Text>
//             </div>
//             <div className="grid gap-1">
//               <Heading
//                 className="text-2xl font-bold w-full overflow-hidden whitespace-wrap"
//                 as="h3"
//                 size="none"
//               >
//                 {product.title}
//               </Heading>
//               {/* <Stars rating="4" reviewCount="100" /> */}
//               <div className="flex gap-4">
//                 <Text className="flex gap-2">
//                   {isPatchBuilder && (
//                     <>
//                       <span className="text-xl font-semibold">
//                         Starting at
//                       </span>
//                     </>
//                   )
//                   }
//                   <Money withoutTrailingZeros data={price} className="text-xl font-bold" />
//                   {isDiscounted(price, compareAtPrice) && (
//                     <CompareAtPrice
//                       className={'text-xl opacity-50 font-bold'}
//                       data={compareAtPrice}
//                     />
//                   )}
//                 </Text>
//               </div>
//             </div>
//           </div>
//         </Link>
//         {quickAdd && (
//           <AddToCartButton
//             lines={[
//               {
//                 quantity: 1,
//                 merchandiseId: firstVariant.id,
//               },
//             ]}
//             variant="secondary"
//             className="mt-2"
//             analytics={{
//               products: [productAnalytics],
//               totalValue: parseFloat(productAnalytics.price),
//             }}
//           >
//             <Text as="span" className="flex items-center justify-center gap-2">
//               Add to Bag
//             </Text>
//           </AddToCartButton>
//         )}
//       </div>

//     )}
//   </>
// );