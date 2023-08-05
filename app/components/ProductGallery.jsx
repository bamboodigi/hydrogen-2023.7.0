import {Image} from '@shopify/hydrogen';

import chicken from '../../public/chicken-demo.png';

/**
 * A client component that defines a media gallery for hosting images, 3D models, and videos of products
 */
export function ProductGallery({media, className, demo = false}) {
  if (!media.length) {
    return null;
  }

  return (
    <div
      className={`swimlane md:grid-flow-row md:p-0 md:overflow-x-auto md:grid-cols-2 lg:max-h-[500px] ${className}`}
    >
      {media.map((med, i) => {
        // const isFirst = i === 0;
        // const isFourth = i === 3;
        // const isFullWidth = i % 3 === 0;
        const isFullWidth = true;

        const image =
          med.__typename === 'MediaImage'
            ? {...med.image, altText: med.alt || 'Product image'}
            : null;

        const style = [
          isFullWidth ? 'md:col-span-2' : 'md:col-span-1',
          // isFirst || isFourth ? '' : 'md:aspect-[4/5]',
          'pt-8 md:pt-0 justify-end aspect-square snap-center card-image w-mobileGallery md:w-full',
        ].join(' ');

        //bg-white dark:bg-contrast/10 

        return (
          <div className={style} key={med.id || image?.id}>
            {image && (
              demo ? (<>
                 <img alt="Macho Chicken Randy Savage - Sticker Sticker PatchPanel"
                        decoding="async" height="100" loading="eager"
                        sizes="(min-width: 64em) 25vw, (min-width: 48em) 30vw, 45vw"
                        src={chicken}
                        width="100" className="object-cover w-full lg:w-auto lg:max-h-[500px] fadeIn" style={{ aspectRatio: '1 / 1'}}></img>
              </>) : (<>
                <Image
                loading={i === 0 ? 'eager' : 'lazy'}
                data={image}
                aspectRatio={'1/1'}
                sizes={ '(min-width: 48em) 500px'
                }
                className="object-cover w-full h-full aspect-square fadeIn"
              />
              </>)
            )}
          </div>
        );
      })}
    </div>
  );
}