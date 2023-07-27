/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/

import { useIsHomePath } from '~/lib/utils';
import {
  IconBag,
  CountrySelector,
  Link,
  Container,
  Button,
  Heading
} from '~/components';
import { useParams, Form, Await, useMatches, useLocation, useLoaderData } from '@remix-run/react';
import { Suspense, useEffect, useMemo, Fragment, useState, useRef } from 'react';
import { useIsHydrated } from '~/hooks/useIsHydrated';
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  XMarkIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  NewspaperIcon,
  ShieldCheckIcon,
  UsersIcon,
  TruckIcon,
  CameraIcon,
  ChatBubbleLeftIcon,
  ArrowPathIcon,
  CalculatorIcon,
  CalendarDaysIcon,
  BuildingOffice2Icon,
  FilmIcon,
  GiftIcon,
} from '@heroicons/react/24/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function isProductBuilder(location) {
  const pathname = location.pathname;
  const isPatchBuilder = pathname.includes('/products/id-panel') || pathname.includes('/products/name-tape')
    || pathname.includes('/products/medical-patch') || pathname.includes('products/custom-printed-patch')
    || pathname.includes('/products/jacket-panel') || pathname.includes('/products/division-jacket-panel');
  if (isPatchBuilder) {
    return true;
  }
  return false;
}
export function Navigation({ isHome, title, openCart, config, handle }) {
  const navigation = config.navigation;
  const [open, setOpen] = useState(false)

  const shopRef = useRef(null);
  const learnRef = useRef(null);

  const location = useLocation();
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      //   console.log(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleShopNavLinkClick = () => {
    shopRef.current?.click();
  };

  const handleLearnNavLinkClick = () => {
    learnRef.current?.click();
  };

  const openLink = () => {
    setOpen(true);
  };

  return (
    <>
    <div className="z-50">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-50 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-50 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-contrast pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-white"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-900">
                    <Tab.List className="-mb-px flex space-x-8 px-4">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-white',
                              'flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-bold'
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel key={category.name} className="space-y-8 px-4 pb-8 pt-10">
                        {category.featured && (
                          <div className="space-y-4">
                            {category.featured.map((item, itemIdx) => (
                              <div
                                key={itemIdx}
                                className="group aspect-h-1 aspect-w-1 relative overflow-hidden rounded-md "
                              >
                                <img
                                  src={item.imageSrc}
                                  alt={item.imageAlt}
                                  className="object-cover object-center group-hover:opacity-75"
                                />
                                <div className="flex flex-col justify-end">
                                  <div  onClick={() => setOpen(false)} className="bg-contrast bg-opacity-60 p-4 text-base sm:text-sm">
                                    <Link prefetch="intent" to={item.href} className="font-bold text-white">
                                      <span className="absolute inset-0" aria-hidden="true" />
                                      {item.name}
                                    </Link>
                                    <p aria-hidden="true" className="mt-0.5 text-white sm:mt-1">
                                      {item.description}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                        {category.type === 'featured' ? (

                          category.sections.map((column, columnIdx) => (
                            <div key={columnIdx} className="space-y-8">
                              {column.map((section) => (
                                <div key={section.name}>
                                  <p
                                    id={`${category.id}-${section.id}-heading-mobile`}
                                    className="font-bold text-white text-xl"
                                  >
                                    {section.name}
                                  </p>
                                  <ul
                                    role="list"
                                    aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                                    className="mt-6 flex flex-col space-y-6"
                                  >
                                    {section.items.map((item) => (
                                      <li onClick={() => setOpen(false)} key={item.name} className="flow-root">
                                        <Link prefetch="intent" to={item.href} className="-m-2 flex items-center  p-1 pl-2 -z-10pl-2 ext-white font-semibold text-lg">
                                          {item.name}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          ))

                        ) : category.type === 'learn' ? (

                          category.sections.map((column, columnIdx) => (
                            <div key={columnIdx} className="space-y-8">
                              {column.map((section) => (
                                <div key={section.name}>
                                  <p
                                    id={`${category.id}-${section.id}-heading-mobile`}
                                    className="font-bold text-white text-xl"
                                  >
                                    {section.name}
                                  </p>
                                  <ul
                                    role="list"
                                    aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                                    className="mt-6 flex flex-col space-y-6"
                                  >
                                    {section.items.map((item) => (
                                      <li onClick={() => setOpen(false)} key={item.name} className="flow-root">
                                        <Link prefetch="intent" to={item.href} className="-m-2 flex items-center gap-x-4 p-1 pl-2 -z-10pl-2 ext-white font-semibold text-lg">
                                          <item.icon className="h-6 w-6 flex-none text-white" aria-hidden="true" />
                                          {item.name}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          ))

                        ) : (
                          <div></div>
                        )}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                <div className="space-y-6 border-t border-white px-4 py-4">
                  {navigation.pages.map((page) => (
                    <div onClick={() => setOpen(false)} key={page.name} className="flow-root">
                      <Link prefetch="intent" to={page.href} className="-m-2 block p-2 font-bold text-xl text-white">
                        {page.name} 
                      </Link>
                    </div>
                  ))}
                </div>
                <div className="space-y-6 border-t border-white px-4 py-4">
                  <CountrySelector screen="mobile" />
                  {/* Currency selector */}
                  {/* <form>
                    <div className="inline-block">
                      <label htmlFor="mobile-currency" className="sr-only">
                        Currency
                      </label>
                      <div className="group relative -ml-2 rounded-md border-transparent focus-within:ring-2 focus-within:ring-white">
                        <select
                          id="mobile-currency"
                          name="currency"
                          className="flex items-center rounded-md border-transparent bg-transparent bg-none py-0.5 pl-2 pr-5 text-xl font-bold text-white focus:border-transparent focus:outline-none focus:ring-0 group-hover:text-white"
                        >
                          {currencies.map((currency) => (
                            <option key={currency}>{currency}</option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
                          <ChevronDownIcon className="h-5 w-5 text-white" aria-hidden="true" />
                        </div>
                      </div>
                    </div>
                  </form> */}
                </div>
                <div onClick={() => setOpen(false)} className="space-y-6 border-t border-white px-4 py-4">
                  {/* Account Login */}
                  <AccountLink linkClassName="text-xl py-0.5 flex font-bold" />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="fixed w-full">
        <nav aria-label="Top">
            {/* Top navigation */}
            {!isProductBuilder(location) && (
            <div className={`overflow-y-scroll transition${
        scrollPosition >= 100 ? ' bg-contrast' : ' bg-transparent'
      }`}>
              <Container className="flex h-10 items-center justify-between">
                <div className="hidden lg:block lg:flex-1">
                  <CountrySelector screen="desktop" />
                </div>
                {/* Currency selector */}
                {/* <form className="hidden lg:block lg:flex-1">
                <div className="flex">
                  <label htmlFor="desktop-currency" className="sr-only">
                    Currency
                  </label>
                  <div className="group relative -ml-2 rounded-md border-transparent bg-contrast">
                    <select
                      id="desktop-currency"
                      name="currency"
                      className="flex items-center rounded-md border-white bg-contrast bg-none py-0.5 pl-2 pr-5 text-sm font-bold text-white focus:ring-0 group-hover:text-white"
                    >
                      {currencies.map((currency) => (
                        <option key={currency}>{currency}</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
                      <ChevronDownIcon className="h-5 w-5 text-white" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </form> */}

                <p className="flex-1 text-center text-sm font-bold text-white lg:flex-none">
                  Free Tracked Shipping on Orders Over $50
                </p>

                <AccountLink className="hidden lg:flex lg:flex-1" linkClassName="text-sm font-bold" />
              </Container>
            </div>
            )}
            <div className={`overflow-y-scroll transition${
        scrollPosition >= 100 ? ' bg-contrast' : ' bg-transparent'
      }`}>
              <Container>
                {/* <div className="border-b border-gray-900"> */}
                <div>
                  <div className="flex h-14 items-center justify-between">
                    <div className="flex flex-1 items-center lg:hidden">
                      <button
                        type="button"
                        className="-ml-2 rounded-md bg-contrast p-2 text-white"
                        onClick={openLink}
                      >
                        <span className="sr-only">Open menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                    {/* Flyout menus */}
                    <Popover.Group className="hidden z-50 lg:block lg:flex-1 lg:self-stretch">
                      <div className="flex h-full space-x-8">
                        {navigation.categories.map((category) => (
                          <Popover key={category.name} className="flex">
                            {({ open }) => (
                              <>
                                <div className="relative flex">
                                  {category.name === "Shop" ? (
                                    <Popover.Button
                                    ref={shopRef}
                                      className={classNames(
                                        open ? 'text-indigo-600' : 'text-white hover:text-white',
                                        'relative z-10 flex items-center justify-center text-sm font-bold transition-colors duration-200 ease-out'
                                      )}
                                    >
                                      {category.name}
                                      <span
                                        className={classNames(
                                          open ? 'bg-indigo-600' : '',
                                          'absolute inset-x-0 bottom-0 h-0.5 transition-colors duration-200 ease-out sm:mt-5 sm:translate-y-px sm:transform'
                                        )}
                                        aria-hidden="true"
                                      />
                                    </Popover.Button>
                                  ) : (
                                    <Popover.Button
                                    ref={learnRef}
                                      className={classNames(
                                        open ? 'text-indigo-600' : 'text-white hover:text-white',
                                        'relative z-10 flex items-center justify-center text-sm font-bold transition-colors duration-200 ease-out'
                                      )}
                                    >
                                      {category.name}
                                      <span
                                        className={classNames(
                                          open ? 'bg-indigo-600' : '',
                                          'absolute inset-x-0 bottom-0 h-0.5 transition-colors duration-200 ease-out sm:mt-5 sm:translate-y-px sm:transform'
                                        )}
                                        aria-hidden="true"
                                      />
                                    </Popover.Button>
                                  )}
                                  {/* <Popover.Button
                                  className={classNames(
                                    open ? 'text-indigo-600' : 'text-white hover:text-white',
                                    'relative z-10 flex items-center justify-center text-sm font-bold transition-colors duration-200 ease-out'
                                  )}
                                >
                                  {category.name}
                                  <span
                                    className={classNames(
                                      open ? 'bg-indigo-600' : '',
                                      'absolute inset-x-0 bottom-0 h-0.5 transition-colors duration-200 ease-out sm:mt-5 sm:translate-y-px sm:transform'
                                    )}
                                    aria-hidden="true"
                                  />
                                </Popover.Button> */}
                                </div>

                                <Transition
                                  as={Fragment}
                                  enter="transition ease-out duration-200"
                                  enterFrom="opacity-0"
                                  enterTo="opacity-100"
                                  leave="transition ease-in duration-150"
                                  leaveFrom="opacity-100"
                                  leaveTo="opacity-0"
                                >
                                  {category.type === 'featured' ? (
                                    <Popover.Panel className="absolute inset-x-0 top-full">
                                      {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                      <div className="absolute inset-0 top-1/2 bg-contrast shadow" aria-hidden="true" />

                                      <div className="relative bg-contrast">
                                        <div className="mx-auto max-w-screen-2xxl px-8">
                                            <div className={classNames(
                                              category.featured ? 'grid-cols-2' : ' ',
                                              'grid gap-x-8 gap-y-10 py-8'
                                            )}>
                                              {category.featured && (
                                                <div onClick={handleShopNavLinkClick} className="grid grid-cols-2 grid-rows-1 gap-8 text-sm">
                                                  {category.featured.map((item, itemIdx) => (
                                                    <Link prefetch="intent" to={item.href}
                                                      
                                                      key={item.name}
                                                      className={classNames(
                                                        itemIdx === 0 ? 'aspect-w-2 col-span-2' : '',
                                                        'card-image group aspect-w-1 aspect-h-1 relative overflow-hidden rounded-md '
                                                      )}>
                                                      <img
                                                        src={item.imageSrc}
                                                        alt={item.imageAlt}
                                                        className="object-cover object-center group-hover:opacity-75"
                                                      />
                                                      <div className="flex flex-col justify-end">
                                                        <div className="bg-contrast bg-opacity-60 p-4 text-sm">
                                                          <p className="font-bold text-white">
                                                            <span className="absolute inset-0" aria-hidden="true" />
                                                            {item.name}
                                                          </p>
                                                          <p aria-hidden="true" className="mt-0.5 text-white sm:mt-1">
                                                            {item.description}
                                                          </p>
                                                        </div>
                                                      </div>
                                                    </Link>
                                                  ))}
                                                </div>
                                              )}
                                              <div className={classNames(
                                                category.featured ? ' ' : ' ',
                                                'grid grid-cols-3 gap-x-8 gap-y-10 text-md text-white'
                                              )}>
                                                {category.sections.map((column, columnIdx) => (
                                                  <div key={columnIdx} className="space-y-8">
                                                    {column.map((section) => (
                                                      <div key={section.name}>
                                                        <p
                                                          id={`${category.id}-${section.id}-heading`}
                                                          className="font-bold text-white"
                                                        >
                                                          {section.name}
                                                        </p>
                                                        <ul
                                                          role="list"
                                                          aria-labelledby={`${category.id}-${section.id}-heading`}
                                                          className="mt-4 space-y-4"
                                                        >
                                                          {section.items.map((item) => (
                                                            <li onClick={handleShopNavLinkClick} key={item.name} className="flex">
                                                              <Link prefetch="intent" to={item.href} className="hover:text-white">
                                                                {item.name}
                                                              </Link>
                                                            </li>
                                                          ))}
                                                        </ul>
                                                      </div>
                                                    ))}
                                                  </div>
                                                ))}
                                              </div>
                                            </div>
                                        </div>
                                      </div>
                                    </Popover.Panel>
                                  ) : category.type === 'learn' ? (
                                    <Popover.Panel className="absolute inset-x-0 top-full">
                                      {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                      <div className="absolute inset-0 top-1/2 bg-contrast shadow" aria-hidden="true" />

                                      <div className="relative bg-contrast">
                                        <div className="mx-auto max-w-screen-2xxl px-8">
                                            <div className={classNames(
                                              category.featured ? 'grid-cols-2' : ' ',
                                              'grid gap-x-8 gap-y-10 py-8'
                                            )}>
                                              {category.featured && (
                                                <div onClick={handleLearnNavLinkClick} className="grid grid-cols-2 grid-rows-1 gap-8 text-sm">
                                                  {category.featured.map((item, itemIdx) => (
                                                    <Link
                                                      onClick={() => console.log("click")}
                                                      to={item.href}
                                                      key={item.name}
                                                      className={classNames(
                                                        itemIdx === 0 ? 'aspect-w-2 col-span-2' : '',
                                                        'card-image group aspect-w-1 aspect-h-1 relative overflow-hidden rounded-md '
                                                      )}>
                                                      <img
                                                        src={item.imageSrc}
                                                        alt={item.imageAlt}
                                                        className="object-cover object-center group-hover:opacity-75"
                                                      />
                                                      <div className="flex flex-col justify-end">
                                                        <div className="bg-contrast bg-opacity-60 p-4 text-sm">
                                                          <p className="font-bold text-white">
                                                            <span className="absolute inset-0" aria-hidden="true" />
                                                            {item.name}
                                                          </p>
                                                          <p aria-hidden="true" className="mt-0.5 text-white sm:mt-1">
                                                            {item.description}
                                                          </p>
                                                        </div>
                                                      </div>
                                                    </Link>
                                                  ))}
                                                </div>
                                              )}
                                              <div className={classNames(
                                                category.featured ? ' ' : ' ',
                                                'grid grid-cols-3 gap-x-8 gap-y-10 text-md text-white'
                                              )}>
                                                {category.sections.map((column, columnIdx) => (
                                                  <div key={columnIdx} className="space-y-8">
                                                    {column.map((section) => (
                                                      <div key={section.name}>
                                                        <p
                                                          id={`${category.id}-${section.id}-heading`}
                                                          className="font-bold text-white"
                                                        >
                                                          {section.name}
                                                        </p>
                                                        <ul
                                                          role="list"
                                                          aria-labelledby={`${category.id}-${section.id}-heading`}
                                                          className="mt-4 space-y-4"
                                                        >
                                                          {section.items.map((item) => (
                                                            <li onClick={handleLearnNavLinkClick} key={item.name} className="flex">
                                                              <Link prefetch="intent" to={item.href} className="flex gap-x-4 items-center hover:text-white">
                                                                <item.icon className="h-6 w-6 flex-none text-white" aria-hidden="true" />
                                                                {item.name}
                                                              </Link>
                                                            </li>
                                                          ))}
                                                        </ul>
                                                      </div>
                                                    ))}
                                                  </div>
                                                ))}
                                              </div>
                                            </div>
                                        </div>
                                      </div>
                                    </Popover.Panel>
                                  ) : (
                                    <div></div>
                                  )}
                                </Transition>
                              </>
                            )}
                          </Popover>
                        ))}

                        {navigation.pages.map((page) => (
                          <Link
                            key={page.name}
                            to={page.href}
                            className="flex items-center text-sm font-bold text-white hover:text-white"
                          >
                            {page.name}
                          </Link>
                        ))}
                      </div>
                    </Popover.Group>

                    {/* Logo */}
                    <Link prefetch="intent" to="/" className="flex">
                      <span className="sr-only">{ title }</span>
                      <Heading
                        className="text-white font-bold text-2xl"
                       as="h1"
                      >{title}</Heading>
                      {/* <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt=""
                      /> */}
                    </Link>

                    <div className="flex flex-1 items-center justify-end">
                      {/* Search */}
                      <Search
                        className="hidden md:flex mr-2 shadow-sm rounded-md bg-white/5 ring-1 ring-inset ring-white/10 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500"
                        searchClassName="bg-contrast block w-full rounded-md border-0 py-1.5 pl-10 text-white ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                       <Link to="/search" className="ml-2 p-2 text-white hover:text-white sm:hidden">
                        <span className="sr-only">Search</span>
                        <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                      </Link>

                      {/* Cart */}
                      <CartCount isHome={isHome} openCart={openCart} />
                    </div>
                  </div>
                </div>
              </Container>
            </div>

            {/* changed md:hidden to hide bar on mobile */}
            <Search
              className="hidden border-t border-white"
              searchClassName="bg-contrast border-none block w-full py-2 pl-14 text-white placeholder:text-gray-400 sm:text-sm sm:leading-6"
              iconClassName="ml-1 pl-4"
            />
        </nav>
      </header>
    </div>
    </>
  )
}

function Search({ className, searchClassName, iconClassName }) {

  const params = useParams();
  return (
    <Form
      method="get"
      action={params.lang ? `/${params.lang}/search` : '/search'}
      className={classNames(
        className ? className : '', 'relative'
      )}>
      <div className={classNames(
        iconClassName ? iconClassName : '', 'pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'
      )}>
        <MagnifyingGlassIcon className="h-5 w-5 text-white" aria-hidden="true" />
      </div>
      <input
        type="search"
        name="q"
        id="search"
        className={classNames(
          searchClassName ? searchClassName : '', ''
        )}
        placeholder="Search"
      />
    </Form>
  );
}
// add AccountLink, CartCount, Badge functions from layout.jsx

function AccountLink({ className, linkClassName }) {
  const [root] = useMatches();
  const isLoggedIn = root.data?.isLoggedIn;
  return isLoggedIn ? (
    <div className={classNames(
      className ? className : '', 'lg:items-center lg:justify-end lg:space-x-6'
    )}>
      <Link prefetch="intent" to="/account" className={classNames(
        linkClassName ? linkClassName : '', 'text-white hover:text-white'
      )}>
        Account
      </Link>
    </div>
  ) : (
    <div className={classNames(
      className ? className : '', 'lg:items-center lg:justify-end lg:space-x-6'
    )}>
      <Link prefetch="intent" to="/account/register" className={classNames(
        linkClassName ? linkClassName : '', 'text-white hover:text-white'
      )}>
        Create an account
      </Link>
      <span className="h-6 w-px bg-gray-600" aria-hidden="true" />
      <Link prefetch="intent" to="/account/login" className={classNames(
        linkClassName ? linkClassName : '', 'text-white hover:text-white'
      )}>
        Sign in
      </Link>
    </div>
  );
}

function CartCount({ isHome, openCart }) {
  const [root] = useMatches();

  return (
    <Suspense fallback={<Badge count={0} dark={isHome} openCart={openCart} />}>
      <Await resolve={root.data?.cart}>
        {(cart) => (
          <Badge
            dark={isHome}
            openCart={openCart}
            count={cart?.totalQuantity || 0}
          />
        )}
      </Await>
    </Suspense>
  );
}

function Badge({ openCart, dark, count }) {


  const isHydrated = useIsHydrated();

  const BadgeCounter = useMemo(
    () => (
      <>
        <IconBag />
        <div
          className={`${dark
            ? 'text-primary bg-contrast dark:text-contrast dark:bg-primary'
            : 'text-contrast bg-primary'
            } absolute bottom-1 right-1 text-[0.625rem] font-bold subpixel-antialiased h-3 min-w-[0.75rem] flex items-center justify-center leading-none text-center rounded-full w-auto px-[0.125rem] pb-px`}
        >
          <span>{count || 0}</span>
        </div>
      </>
    ),
    [count, dark],
  );

  return isHydrated ? (
    <button
      onClick={openCart}
      className="relative flex items-center justify-center w-8 h-8 focus:ring-primary/5"
    >
      {BadgeCounter}
    </button>
  ) : (
    <Link
      to="/cart"
      className="relative flex items-center justify-center w-8 h-8 focus:ring-primary/5"
    >
      {BadgeCounter}
    </Link>
  );
}
