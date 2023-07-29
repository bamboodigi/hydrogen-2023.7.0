import { useFetcher, useLocation, useMatches } from '@remix-run/react';
import { Heading, Button, IconCheck } from '~/components';
import { useCallback, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { CartAction } from '~/lib/type';
import { DEFAULT_LOCALE } from '~/lib/utils';
import clsx from 'clsx';

import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function CountrySelector(props) {
  const { screen } = props;
  const htmlFor = screen + "-currency";
  const [root] = useMatches();
  const fetcher = useFetcher();
  const closeRef = useRef(null);
  const selectedLocale = root.data?.selectedLocale ?? DEFAULT_LOCALE;
  const { pathname, search } = useLocation();
  const pathWithoutLocale = `${pathname.replace(
    selectedLocale.pathPrefix,
    '',
  )}${search}`;



  const countries = fetcher.data ?? {};

  const filteredCountries = Object.entries(countries).reduce((acc, [key, value]) => {
    if (value.country === "US" || value.country === "CA") {
      acc[key] = value;
    }
    return acc;
  }, {});

  // console.log(filteredCountries);

  const defaultLocale = filteredCountries?.['default'];
  const defaultLocalePrefix = defaultLocale
    ? `${defaultLocale?.language}-${defaultLocale?.country}`
    : '';

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const observerRef = useRef(null);
  useEffect(() => {
    ref(observerRef.current);
  }, [ref, observerRef]);

  // Get available countries list when in view
  useEffect(() => {
    if (!inView || fetcher.data || fetcher.state === 'loading') return;
    fetcher.load('/api/countries');
  }, [inView, fetcher]);

  const closeDropdown = useCallback(() => {
    closeRef.current?.removeAttribute('open');
  }, []);

  return (
    <section
      ref={observerRef}
      className={classNames(
        screen === "mobile" ? 'inline-block' : 'flex',
      )}
      onMouseLeave={closeDropdown}
    >
      <label htmlFor={htmlFor} className="sr-only">
        Currency
      </label>
      <div className="">
        <details
          className={classNames(
            screen === "mobile" ? '' : 'bg-contrast',
            'group relative -ml-2 rounded-md border-transparent'
          )}
          ref={closeRef}
          name="currency"
        >
          <summary id={htmlFor} className={classNames(
            screen === "mobile" ? 'border-transparent bg-transparent bg-none text-xl focus:border-transparent focus:outline-none' : 'border border-white bg-contrast bg-none text-sm group-hover:text-white',
            'flex items-center rounded-md py-0.5 pl-2 pr-5 font-bold text-white focus:ring-0'
          )}>
            {selectedLocale.currency}

              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
                <ChevronDownIcon className="h-5 w-5 text-white" aria-hidden="true" />
              </div>

          </summary>
          <div className="border border-white rounded-md absolute top-0 bg-contrast">
            {filteredCountries &&
              Object.keys(filteredCountries).map((countryPath) => {
                const countryLocale = filteredCountries[countryPath];
                const isSelected =
                  countryLocale.language === selectedLocale.language &&
                  countryLocale.country === selectedLocale.country;

                const countryUrlPath = getCountryUrlPath({
                  countryLocale,
                  defaultLocalePrefix,
                  pathWithoutLocale,
                });

                return (
                  <Country
                    key={countryPath}
                    closeDropdown={closeDropdown}
                    countryUrlPath={countryUrlPath}
                    isSelected={isSelected}
                    countryLocale={countryLocale}
                  />
                );
              })}
          </div>
        </details>
      </div>
    </section>
  );
}


function Country({ closeDropdown, countryLocale, countryUrlPath, isSelected}) {

  return (
    <ChangeLocaleForm
      key={countryLocale.country}
      redirectTo={countryUrlPath}
      buyerIdentity={{
        countryCode: countryLocale.country,
      }}
    >
      <Button
        className={classNames(
          screen === 'mobile' ? 'text-xl' : 'rounded-md text-sm',
          'flex items-center py-0.5 pl-2 pr-5 font-bold text-white bg-contrast'
        )}
        type="submit"
        variant="primary"
        onClick={closeDropdown}
      >
        {countryLocale.currency}
        {/* {isSelected ? (
          <span className="ml-2">
            <IconCheck />
          </span>
        ) : null} */}
      </Button>
    </ChangeLocaleForm>
  );
}

function ChangeLocaleForm({ children, buyerIdentity, redirectTo }) {
  const fetcher = useFetcher();

  return (
    <fetcher.Form action="/cart" method="post">
      <input
        type="hidden"
        name="cartAction"
        value={CartAction.UPDATE_BUYER_IDENTITY}
      />
      <input
        type="hidden"
        name="buyerIdentity"
        value={JSON.stringify(buyerIdentity)}
      />
      <input type="hidden" name="redirectTo" value={redirectTo} />
      {children}
    </fetcher.Form>
  );
}

function getCountryUrlPath({
  countryLocale,
  defaultLocalePrefix,
  pathWithoutLocale,
}) {
  let countryPrefixPath = '';
  const countryLocalePrefix = `${countryLocale.language}-${countryLocale.country}`;

  if (countryLocalePrefix !== defaultLocalePrefix) {
    countryPrefixPath = `/${countryLocalePrefix.toLowerCase()}`;
  }
  return `${countryPrefixPath}${pathWithoutLocale}`;
}


// import {useFetcher, useLocation, useMatches} from '@remix-run/react';
// import {Heading, Button, IconCheck} from '~/components';
// import {useCallback, useEffect, useRef} from 'react';
// import {useInView} from 'react-intersection-observer';
// import {CartAction} from '~/lib/type';
// import {DEFAULT_LOCALE} from '~/lib/utils';
// import clsx from 'clsx';

// export function CountrySelector() {
//   const [root] = useMatches();
//   const fetcher = useFetcher();
//   const closeRef = useRef(null);
//   const selectedLocale = root.data?.selectedLocale ?? DEFAULT_LOCALE;
//   const {pathname, search} = useLocation();
//   const pathWithoutLocale = `${pathname.replace(
//     selectedLocale.pathPrefix,
//     '',
//   )}${search}`;

//   const countries = fetcher.data ?? {};
//   const defaultLocale = countries?.['default'];
//   const defaultLocalePrefix = defaultLocale
//     ? `${defaultLocale?.language}-${defaultLocale?.country}`
//     : '';

//   const {ref, inView} = useInView({
//     threshold: 0,
//     triggerOnce: true,
//   });

//   const observerRef = useRef(null);
//   useEffect(() => {
//     ref(observerRef.current);
//   }, [ref, observerRef]);

//   // Get available countries list when in view
//   useEffect(() => {
//     if (!inView || fetcher.data || fetcher.state === 'loading') return;
//     fetcher.load('/api/countries');
//   }, [inView, fetcher]);

//   const closeDropdown = useCallback(() => {
//     closeRef.current?.removeAttribute('open');
//   }, []);

//   return (
//     <section
//       ref={observerRef}
//       className="grid w-full gap-4"
//       onMouseLeave={closeDropdown}
//     >
//       <Heading size="lead" className="cursor-default" as="h3">
//         Country
//       </Heading>
//       <div className="relative">
//         <details
//           className="absolute w-full border rounded border-contrast/30 dark:border-white open:round-b-none overflow-clip"
//           ref={closeRef}
//         >
//           <summary className="flex items-center justify-between w-full px-4 py-3 cursor-pointer">
//             {selectedLocale.label}
//           </summary>
//           <div className="w-full overflow-auto border-t border-contrast/30 dark:border-white bg-contrast/30 max-h-36">
//             {countries &&
//               Object.keys(countries).map((countryPath) => {
//                 const countryLocale = countries[countryPath];
//                 const isSelected =
//                   countryLocale.language === selectedLocale.language &&
//                   countryLocale.country === selectedLocale.country;

//                 const countryUrlPath = getCountryUrlPath({
//                   countryLocale,
//                   defaultLocalePrefix,
//                   pathWithoutLocale,
//                 });

//                 return (
//                   <Country
//                     key={countryPath}
//                     closeDropdown={closeDropdown}
//                     countryUrlPath={countryUrlPath}
//                     isSelected={isSelected}
//                     countryLocale={countryLocale}
//                   />
//                 );
//               })}
//           </div>
//         </details>
//       </div>
//     </section>
//   );
// }

// function Country({closeDropdown, countryLocale, countryUrlPath, isSelected}) {
//   return (
//     <ChangeLocaleForm
//       key={countryLocale.country}
//       redirectTo={countryUrlPath}
//       buyerIdentity={{
//         countryCode: countryLocale.country,
//       }}
//     >
//       <Button
//         className={clsx([
//           'text-contrast dark:text-primary',
//           'bg-primary dark:bg-contrast w-full p-2 transition rounded flex justify-start',
//           'items-center text-left cursor-pointer py-2 px-4',
//         ])}
//         type="submit"
//         variant="primary"
//         onClick={closeDropdown}
//       >
//         {countryLocale.label}
//         {isSelected ? (
//           <span className="ml-2">
//             <IconCheck />
//           </span>
//         ) : null}
//       </Button>
//     </ChangeLocaleForm>
//   );
// }

// function ChangeLocaleForm({children, buyerIdentity, redirectTo}) {
//   const fetcher = useFetcher();

//   return (
//     <fetcher.Form action="/cart" method="post">
//       <input
//         type="hidden"
//         name="cartAction"
//         value={CartAction.UPDATE_BUYER_IDENTITY}
//       />
//       <input
//         type="hidden"
//         name="buyerIdentity"
//         value={JSON.stringify(buyerIdentity)}
//       />
//       <input type="hidden" name="redirectTo" value={redirectTo} />
//       {children}
//     </fetcher.Form>
//   );
// }

// function getCountryUrlPath({
//   countryLocale,
//   defaultLocalePrefix,
//   pathWithoutLocale,
// }) {
//   let countryPrefixPath = '';
//   const countryLocalePrefix = `${countryLocale.language}-${countryLocale.country}`;

//   if (countryLocalePrefix !== defaultLocalePrefix) {
//     countryPrefixPath = `/${countryLocalePrefix.toLowerCase()}`;
//   }
//   return `${countryPrefixPath}${pathWithoutLocale}`;
// }
