import clsx from 'clsx';
import { useRef } from 'react';
import { useScroll } from 'react-use';
import { flattenConnection, CartForm, Image, Money } from '@shopify/hydrogen';

import {
  Button,
  Heading,
  IconRemove,
  Text,
  Link,
  FeaturedProducts,
} from '~/components';
import { getInputStyleClasses } from '~/lib/utils';

export function Cart({ layout, onClose, cart }) {
  const linesCount = Boolean(cart?.lines?.edges?.length || 0);

  return (
    <>
      <CartEmpty hidden={linesCount} onClose={onClose} layout={layout} />
      <CartDetails cart={cart} layout={layout} />
    </>
  );
}

export function CartDetails({ layout, cart }) {
  // @todo: get optimistic cart cost
  const cartHasItems = !!cart && cart.totalQuantity > 0;
  const container = {
    drawer: 'grid grid-cols-1 h-screen-no-nav grid-rows-[1fr_auto]',
    page: 'w-full pb-12 grid md:grid-cols-2 md:items-start gap-8 md:gap-8 lg:gap-12',
  };

  return (
    <div className={container[layout]}>
      <CartLines lines={cart?.lines} layout={layout} />
      {cartHasItems && (
        <CartSummary cost={cart.cost} layout={layout}>
          <CartDiscounts discountCodes={cart.discountCodes} />
          <CartCheckoutActions checkoutUrl={cart.checkoutUrl} />
        </CartSummary>
      )}
    </div>
  );
}

/**
 * Temporary discount UI
 * @param discountCodes the current discount codes applied to the cart
 * @todo rework when a design is ready
 */
function CartDiscounts({ discountCodes }) {
  const codes =
    discountCodes
      ?.filter((discount) => discount.applicable)
      ?.map(({ code }) => code) || [];

  return (
    <>
      {/* Have existing discount, display it with a remove option */}
      <dl className={codes && codes.length !== 0 ? 'grid' : 'hidden'}>
        <div className="flex items-center justify-between font-medium">
          <Text as="dt">Discount(s)</Text>
          <div className="flex items-center justify-between">
            <UpdateDiscountForm>
              <button>
                <IconRemove
                  aria-hidden="true"
                  style={{ height: 18, marginRight: 4 }}
                />
              </button>
            </UpdateDiscountForm>
            <Text as="dd">{codes?.join(', ')}</Text>
          </div>
        </div>
      </dl>

      {/* Show an input to apply a discount */}
      <UpdateDiscountForm discountCodes={codes}>
        <div
          className={clsx(
            'flex',
            'items-center gap-4 justify-between text-copy',
          )}
        >
          <input
            className={getInputStyleClasses()}
            type="text"
            name="discountCode"
            placeholder="Discount code"
          />
          <button className="flex justify-end font-medium whitespace-nowrap">
            Apply Discount
          </button>
        </div>
      </UpdateDiscountForm>
    </>
  );
}

function UpdateDiscountForm({ discountCodes, children }) {
  return (
    <CartForm
      route="/cart"
      action={CartForm.ACTIONS.DiscountCodesUpdate}
      inputs={{
        discountCodes: discountCodes || [],
      }}
    >
      {children}
    </CartForm>
  );
}

function CartLines({ layout = 'drawer', lines: cartLines }) {
  const currentLines = cartLines ? flattenConnection(cartLines) : [];
  const scrollRef = useRef(null);
  const { y } = useScroll(scrollRef);

  const className = clsx([
    y > 0 ? 'border-t' : '',
    layout === 'page'
      ? 'flex-grow md:translate-y-4'
      : 'px-6 pb-6 sm-max:pt-2 overflow-auto transition md:px-12',
  ]);

  return (
    <section
      ref={scrollRef}
      aria-labelledby="cart-contents"
      className={className}
    >
      <ul className="grid gap-6 md:gap-10">
        {currentLines.map((line) => (
          <CartLineItem key={line.id} line={line} />
        ))}
      </ul>
    </section>
  );
}

function CartCheckoutActions({ checkoutUrl }) {
  if (!checkoutUrl) return null;

  return (
    <div className="flex flex-col mt-2">
      <a href={checkoutUrl} target="_self">
        <Button as="span" width="full">
          Continue to Checkout
        </Button>
      </a>
      {/* @todo: <CartShopPayButton cart={cart} /> */}
    </div>
  );
}

function CartSummary({ cost, layout, children = null }) {
  const summary = {
    drawer: 'grid gap-4 p-6 border-t md:px-12',
    page: 'sticky top-nav grid gap-6 p-4 md:px-6 md:translate-y-4 bg-primary/5 rounded w-full',
  };

  return (
    <section aria-labelledby="summary-heading" className={summary[layout]}>
      <h2 id="summary-heading" className="sr-only">
        Order summary
      </h2>
      <dl className="grid">
        <div className="flex items-center justify-between font-medium">
          <Text as="dt">Subtotal</Text>
          <Text as="dd" data-test="subtotal">
            {cost?.subtotalAmount?.amount ? (
              <Money data={cost?.subtotalAmount} />
            ) : (
              '-'
            )}
          </Text>
        </div>
      </dl>
      {children}
    </section>
  );
}

function CartLineItem({ line }) {
  if (!line?.id) return null;

  const { id, quantity, merchandise, attributes } = line;

  if (typeof quantity === 'undefined' || !merchandise?.product) return null;


  const size = attributes.find((attribute) => attribute.key === 'Size');
  const price = attributes.find((attribute) => attribute.key === 'Price');
  const markType = attributes.find((attribute) => attribute.key === 'Mark Type');
  const fontColor = attributes.find((attribute) => attribute.key === 'Select Base Material');
  const proIRFontColor = fontColor?.value?.includes("Pro IR") || false;
  const reflectiveGlowFontColor = fontColor?.value?.includes("Reflective + Glow") || false;
  const length = parseInt(size?.value?.match(/\d+/g)[0]);
  const isAddon = line.merchandise?.product.handle.includes("add-on");
  const glowBorder = attributes.find((attribute) => attribute.key === 'Glow Border');

  var newTitle = '';

  for (var i = 0; i < attributes.length; i++) {
    if (attributes[i].key === 'Size') {
      // console.log(attributes[i].value);
      if (length < 4) {
        newTitle = attributes[i].value + ' Mini ' + merchandise.product.title;
      } else {
        newTitle = attributes[i].value + ' ' + merchandise.product.title;
      }
      break;
    }
  }



  // console.log(line);

  // console.log(line.attributes);

  // console.log(size?.value);
  // console.log(price?.value);
  // console.log(newTitle);
  // console.log(length);
  // console.log(markType?.value);
  // console.log(glowBorder?.value);

  return (
    <>
      {!isAddon ? (
        <li key={id} className="flex gap-4">
          <div className="flex-shrink">
            {merchandise.image && (
              <Image
                width={130}
                height={130}
                data={merchandise.image}
                className="min-w-[110px] min-h-[110px] object-cover object-center w-24 h-24 border rounded md:w-28 md:h-28"
                alt={merchandise.title}
              />
            )}
            <div className="flex items-center gap-4 mt-3">
              <div className="flex justify-start text-copy">
                <CartLineQuantityAdjust line={line} />
              </div>
              <ItemRemoveButton lineIds={[id]} />
            </div>
          </div>
          <div className="flex-grow grid gap-2">
            <div className="flex justify-between flex-grow">
              <div className="grid gap-2">
                <Heading as="h3" size="copy">
                  {merchandise?.product?.handle ? (
                    <Link className="font-bold" to={`/products/${merchandise.product.handle}`} prefetch="intent">
                      {newTitle || merchandise?.product?.title}
                    </Link>
                  ) : (
                    <Text className="font-bold">{merchandise?.product?.title || ''}</Text>
                  )}
                </Heading>
                {markType?.value.includes("HiVis") ? (
                  <>
                    <Text className="font-semibold text-xs sm:text-copy">with HiVis Flag</Text>
                  </>
                ) : markType?.value.includes("Lazer Cut") ? (
                  <>
                    <Text className="font-semibold text-xs sm:text-copy">with Lazer Cut Flag</Text>
                  </>
                ) : (
                  <>
                  </>
                )}
                {proIRFontColor && (
                  <>
                    <Text className="font-semibold text-xs sm:text-copy">Pro IR Font Color</Text>
                  </>
                )}
                {reflectiveGlowFontColor && (
                  <>
                    <Text className="font-semibold text-xs sm:text-copy">Reflective / Glow Font Color</Text>
                  </>
                )}
                {glowBorder?.value === "Yes" && (
                  <>
                    <Text className="font-semibold text-xs sm:text-copy">Glow Border</Text>
                  </>
                )}
                {/* <div className="grid pb-2">
                       {(merchandise?.selectedOptions || []).map((option) => (
                         <Text color="subtle" key={option.name}>
                           {option.name}: {option.value}
                         </Text>
                       ))}
                     </div> */}

                {/* <div className="flex items-center gap-2">
                       <div className="flex justify-start text-copy">
                         <CartLineQuantityAdjust line={line} />
                       </div>
                       <ItemRemoveButton lineIds={[id]} />
                     </div> */}
              </div>
              <div className="text-right grid gap-2">
                <span className="block font-bold text-copy whitespace-pre-wrap">
                  <CartLinePrice line={line} />
                </span>
                {markType?.value.includes("HiVis") && (
                  <>
                    <span className="block font-semibold text-xs sm:text-copy whitespace-pre-wrap">+$4</span>
                  </>
                )}
                {proIRFontColor && (
                  <>
                    <span className="block font-semibold text-xs sm:text-copy whitespace-pre-wrap">+$7</span>
                  </>
                )}
                {reflectiveGlowFontColor && (
                  <>
                    <span className="block font-semibold text-xs sm:text-copy whitespace-pre-wrap">+$7</span>
                  </>
                )}
                {glowBorder?.value === "Yes" && (
                  <>
                    <span className="block font-semibold text-xs sm:text-copy whitespace-pre-wrap">+$10</span>
                  </>
                )}
              </div>
            </div>
            <div className="flex justify-between gap-4 mt-3">
              <div className="flex justify-start text-copy">
                <Heading
                  as="h3"
                  size="copy"
                >
                  <Text className="font-bold">Item Total:</Text>
                </Heading>
              </div>
              <div className="text-right grid gap-2">
                <span className="block font-bold text-copy whitespace-pre-wrap">
                  <Money withoutTrailingZeros data={{ amount: price?.value + ".0", currencyCode: 'USD' }} />
                </span>

              </div>
            </div>
          </div>
        </li>
      ) : (
        <>

        </>
      )}
    </>
  );
}

function ItemRemoveButton({ lineIds }) {
  return (
    <CartForm
      route="/cart"
      action={CartForm.ACTIONS.LinesRemove}
      inputs={{
        lineIds,
      }}
    >
      <button
        className="flex items-center justify-center w-7 h-8 border rounded"
        type="submit"
      >
        <span className="sr-only">Remove</span>
        <IconRemove aria-hidden="true" />
      </button>
    </CartForm>
  );
}

function CartLineQuantityAdjust({ line }) {
  if (!line || typeof line?.quantity === 'undefined') return null;
  const { id: lineId, quantity } = line;
  const prevQuantity = Number(Math.max(0, quantity - 1).toFixed(0));
  const nextQuantity = Number((quantity + 1).toFixed(0));

  return (
    <>
      <label htmlFor={`quantity-${lineId}`} className="sr-only">
        Quantity, {quantity}
      </label>
      <div className="flex items-center border rounded text-sm">
        <UpdateCartButton lines={[{ id: lineId, quantity: prevQuantity }]}>
          <button
            name="decrease-quantity"
            aria-label="Decrease quantity"
            className="w-7 h-8 transition text-primary/50 hover:text-primary disabled:text-primary/10"
            value={prevQuantity}
            disabled={quantity <= 1}
          >
            <span>&#8722;</span>
          </button>
        </UpdateCartButton>

        <div className="text-center" data-test="item-quantity">
          {quantity}
        </div>

        <UpdateCartButton lines={[{ id: lineId, quantity: nextQuantity }]}>
          <button
            className="w-7 h-8 transition text-primary/50 hover:text-primary"
            name="increase-quantity"
            value={nextQuantity}
            aria-label="Increase quantity"
          >
            <span>&#43;</span>
          </button>
        </UpdateCartButton>
      </div>
    </>
  );
}

function UpdateCartButton({ children, lines }) {
  return (
    <CartForm
      route="/cart"
      action={CartForm.ACTIONS.LinesUpdate}
      inputs={{
        lines,
      }}
    >
      {children}
    </CartForm>
  );
}

function CartLinePrice({ line, priceType = 'regular', ...passthroughProps }) {
  if (!line?.cost?.amountPerQuantity || !line?.cost?.totalAmount) return null;

  const moneyV2 =
    priceType === 'regular'
      ? line.cost.totalAmount
      : line.cost.compareAtAmountPerQuantity;

  if (moneyV2 == null) {
    return null;
  }

  return <Money withoutTrailingZeros {...passthroughProps} data={moneyV2} />;
}

export function CartEmpty({ hidden = false, layout = 'drawer', onClose }) {
  const scrollRef = useRef(null);
  const { y } = useScroll(scrollRef);

  const container = {
    drawer: clsx([
      'content-start gap-4 px-6 pb-8 transition overflow-y-scroll md:gap-12 md:px-12 h-screen-no-nav md:pb-12',
      y > 0 ? 'border-t' : '',
    ]),
    page: clsx([
      hidden ? '' : 'grid',
      `pb-12 w-full md:items-start gap-4 md:gap-8 lg:gap-12`,
    ]),
  };

  return (
    <div ref={scrollRef} className={container[layout]} hidden={hidden}>
      <section className="grid gap-6">
        <Text format>
          Looks like you haven&rsquo;t added anything yet, let&rsquo;s get you
          started!
        </Text>
        <div>
          <Button onClick={onClose}>Continue shopping</Button>
        </div>
      </section>
      <section className="grid gap-8 pt-16">
        <FeaturedProducts
          count={4}
          heading="Shop Best Sellers"
          layout={layout}
          onClose={onClose}
          sortKey="BEST_SELLING"
        />
      </section>
    </div>
  );
}
