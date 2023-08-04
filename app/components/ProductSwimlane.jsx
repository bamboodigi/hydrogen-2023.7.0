import { ProductCard, Section, Link } from '~/components';
import { getImageLoadingPriority } from '~/lib/const';

const mockProducts = {
  nodes: new Array(12).fill(''),
};

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export function ProductSwimlane({
  title = 'Featured Products',
  products = mockProducts,
  collectionHandle,
  count = 12,
  center = false,
  ...props
}) {

  const nodes = products.nodes || products;
  return (
    <>
      <div className={classNames(
        center ? "justify-center xl:justify-start xl:ml-6" : "justify-start",
        "flex items-center py-8 pb-6"
      )}
      >
        <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white">{title}</h2>
        {collectionHandle && (
          <Link
            prefetch="intent"
            to={`/collections/${collectionHandle}`}
            className="hidden text-sm font-semibold text-white hover:text-white sm:block">
            See everything
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        )
        }
      </div>
      <div className="swimlane pt-2 hiddenScroll md:pb-8 md:scroll-px-8 lg:scroll-px-12 md:px-8 lg:px-12">
        {nodes.map((product, i) => (
          !product.tags.includes("custom_patch") ? (
            <ProductCard
              key={product.id}
              product={product}
              loading={getImageLoadingPriority(i)}
              quickAdd={true}
              className="snap-start w-40 md:w-[18rem] lg:w-[21rem] xl:w-[23rem]"
            />
          ) : (
            <ProductCard
              key={product.id}
              product={product}
              loading={getImageLoadingPriority(i)}
              className="snap-start w-40 md:w-[18rem] lg:w-[21rem] xl:w-[23rem]"
            />
          )
        ))}
      </div>
    </>
  );
}
