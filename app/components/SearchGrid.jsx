import {Button, Grid, ProductCard, Link} from '~/components';
import {getImageLoadingPriority} from '~/lib/const';
import {useFetcher} from '@remix-run/react';
import {useEffect, useState} from 'react';

export function SearchGrid({url, searchProducts, ...props}) {
  const [initialProducts, setInitialProducts] = useState(
    searchProducts || [],
  );

  console.log(searchProducts)

  const [nextPage, setNextPage] = useState(
    searchProducts?.pageInfo?.hasNextPage,
  );
  const [endCursor, setEndCursor] = useState(
    searchProducts?.pageInfo?.endCursor,
  );
  const [products, setProducts] = useState(initialProducts);

  // props have changes, reset component state
  const productProps = products || [];
  if (initialProducts !== productProps) {
    setInitialProducts(productProps);
    setProducts(productProps);
  }
 
  const fetcher = useFetcher();

  function fetchMoreProducts() {
    fetcher.load(`${url}?index&cursor=${endCursor}`);
  }

  useEffect(() => {
    if (!fetcher.data) return;

    setProducts((prev) => [...prev, ...searchProducts.nodes]);
    setNextPage(searchProducts.pageInfo.hasNextPage);
    setEndCursor(searchProducts.pageInfo.endCursor);
  }, [fetcher.data]);

  const haveProducts = initialProducts.length > 0;

  if (!haveProducts) {
    return (
      <>
        <p>No products found on this collection</p>
        <Link to="/products">
          <p className="underline">Browse catalog</p>
        </Link>
      </>
    );
  }

  return (
    <>
      <Grid items={3} layout="products" {...props}>
        {searchProducts.map((product, i) => (
          console.log(product),
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
        ))}
      </Grid>

      {nextPage && (
        <div className="flex items-center justify-center mt-6">
          <Button
            disabled={fetcher.state !== 'idle'}
            variant="secondary"
            onClick={fetchMoreProducts}
            width="full"
            prefetch="intent"
          >
            {fetcher.state !== 'idle' ? 'Loading...' : 'Load more products'}
          </Button>
        </div>
      )}
    </>
  );
}
