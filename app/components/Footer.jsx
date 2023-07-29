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

import {
  Container,
  Link,
  Heading
} from '~/components';
import { useParams, Form, Await, useMatches } from '@remix-run/react';
import { Suspense, useEffect, useMemo, Fragment, useState } from 'react';
import { useIsHydrated } from '~/hooks/useIsHydrated';



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export function Footer({config}) {
  const navigation = config.navigation;

  return (
    <footer className="bg-contrast border-t-2 mt-16" aria-labelledby="footer-heading">
       {config.enabled && (
      <Container className="pb-8 pt-4 sm:pt-24 lg:pt-32">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* <img
            className="h-7"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
            alt="Company name"
          /> */}
           {/* <Heading
                        className="text-white font-bold text-2xl"
                       as="h4"
                      >{title}</Heading> */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-md font-semibold leading-6 text-white">Information</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.information.map((item) => (
                    <li key={item.name}>
                      <Link prefetch="intent" to={item.href} className="text-md leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-md font-semibold leading-6 text-white">Support</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <Link prefetch="intent" to={item.href} className="text-md leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-md font-semibold leading-6 text-white">Programs</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.programs.map((item) => (
                    <li key={item.name}>
                      <Link prefetch="intent" to={item.href} className="text-md leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-md font-semibold leading-6 text-white">Policies & Procedures</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.policies.map((item) => (
                    <li key={item.name}>
                      <Link prefetch="intent" to={item.href} className="text-md leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {config.newsletter.enabled && (
          <div id="footer-newsletter" className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24 lg:flex lg:items-center lg:justify-between">
            <div>
              <h3 className="text-md font-semibold leading-6 text-white">{ config.newsletter.heading }</h3>
              <p className="mt-2 text-md leading-6 text-gray-300">
                { config.newsletter.description }
              </p>
            </div>
            <form className="mt-6 sm:flex sm:max-w-md lg:mt-0">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                className="w-full min-w-0 appearance-none rounded-md border-0 bg-white/5 px-3 py-1.5 text-base text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:w-56 sm:text-md sm:leading-6"
                placeholder={config.newsletter.form.placeholder}
              />
              <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-md bg-indigo-500 px-3 py-2 text-md font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  { config.newsletter.form.button }
                </button>
              </div>
            </form>
          </div>
        )}
        <div className="mt-8 border-t border-white/10 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            {navigation.social.map((item) => (
              <Link key={item.name} href={item.href} className="text-gray-500 hover:text-gray-400">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </Link>
            ))}
          </div>
          <p className="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
            { config.copyright }
          </p>
        </div>
      </Container>
      )}
    </footer>
  )
}
