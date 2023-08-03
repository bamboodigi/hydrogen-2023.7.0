import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx';
import { MediaFile } from '@shopify/hydrogen';
import { Heading, Text, Link, Container } from '~/components';


export function HeroTiles({
  config
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
    { config.enabled && (
          <div className="bg-contrast">
          <div className="relative isolate">
            <svg
              className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,black,transparent)] opacity-20 sm:opacity-30"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                  width={200}
                  height={200}
                  x="50%"
                  y={-1}
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M.5 200V.5H200" fill="none" />
                </pattern>
              </defs>
              <svg x="50%" y={-1} className="overflow-visible fill-contrast">
                <path
                  d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                  strokeWidth={0}
                />
              </svg>
              <rect width="100%" height="100%" strokeWidth={0} fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" />
            </svg>
            <div
              className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
              aria-hidden="true"
            >
              <div
                className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                style={{
                  clipPath:
                    'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
                }}
              />
            </div>
            <div className="overflow-hidden">
              <Container className="py-10 sm:py-24">
                <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:justify-between lg:items-center">
                  <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                    {config.heading && (
                      <Heading as="h1" size="none" className="font-bold text-4xl tracking-tight text-white sm:text-6xl">
                        {config.heading}
                      </Heading>
                    )}
                    {config.description && (
                      <Heading as="h3" size="none" className="font-bold text-2xl sm:text-subheading relative mt-6 leading-8 text-white sm:max-w-md lg:max-w-none">
                        {config.description}
                      </Heading>
                    )}
                    {config.cta.enabled && (
                      <div className="mt-10 flex items-center gap-x-6">
                        <Link
                          prefetch="intent"
                          to={config.cta.link}
                          className="transition rounded-md bg-transparent border border-white px-3.5 py-2.5 text-2xl sm:text-md font-bold text-white shadow-sm hover:bg-white hover:text-contrast focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          {config.cta.text}
                        </Link>
                      </div>
                    )}
    
                  </div>
                  <div className="mt-14 xl:mr-20 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                    <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                      <div className="relative">
                        <img
                          src={config.images[0].src}
                          alt={config.images[0].alt}
                          className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                      </div>
                    </div>
                    <div className="mr-auto w-45 sm:w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                      <div className="relative">
                        <img
                          src={config.images[1].src}
                          alt={config.images[1].alt}
                          className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                      </div>
                      <div className="relative">
                        <img
                          src={config.images[2].src}
                          alt={config.images[2].alt}
                          className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                      </div>
                    </div>
                    <div className="w-45 sm:w-44 flex-none space-y-8 -mt-20 sm:mt-0 sm:pt-0">
                      <div className="relative">
                        <img
                          src={config.images[3].src}
                          alt={config.images[3].alt}
                          className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                      </div>
                      <div className="relative">
                        <img
                          src={config.images[4].src}
                          alt={config.images[4].alt}
                          className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                      </div>
                    </div>
                  </div>
                </div>
              </Container>
            </div>
          </div>
        </div>
    )}
    </>
  )
}