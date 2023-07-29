import { useMemo, useState } from 'react';

import { Heading, IconFilters, IconCaret, IconXMark, Text, Link, Toggle } from '~/components';
import {
  useLocation,
  useSearchParams,
  useNavigate,
} from '@remix-run/react';
import { useDebounce } from 'react-use';


import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, FunnelIcon } from '@heroicons/react/20/solid'

const filters = {
  availability: [
    { value: 'in-stock', label: 'In Stock', checked: false },
    { value: 'out-of-stock', label: 'Out of Stock', checked: false },
  ],
  price: [
    { value: '0', label: '$0 - $25', checked: false },
    { value: '25', label: '$25 - $50', checked: false },
    { value: '50', label: '$50 - $75', checked: false },
    { value: '75', label: '$75+', checked: false },
  ],
  color: [
    { value: 'white', label: 'White', checked: false },
    { value: 'beige', label: 'Beige', checked: false },
    { value: 'blue', label: 'Blue', checked: true },
    { value: 'brown', label: 'Brown', checked: false },
    { value: 'green', label: 'Green', checked: false },
    { value: 'purple', label: 'Purple', checked: false },
  ],
  size: [
    { value: 'xs', label: 'XS', checked: false },
    { value: 's', label: 'S', checked: true },
    { value: 'm', label: 'M', checked: false },
    { value: 'l', label: 'L', checked: false },
    { value: 'xl', label: 'XL', checked: false },
    { value: '2xl', label: '2XL', checked: false },
  ],
  category: [
    { value: 'all-new-arrivals', label: 'All New Arrivals', checked: false },
    { value: 'tees', label: 'Tees', checked: false },
    { value: 'objects', label: 'Objects', checked: false },
    { value: 'sweatshirts', label: 'Sweatshirts', checked: false },
    { value: 'pants-and-shorts', label: 'Pants & Shorts', checked: false },
  ],
}
const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function NewSortFilter({
  filter,
  appliedFilters = [],
  children,
  collections = [],
}) {
  const [isOpen, setIsOpen] = useState(false);
  // const activeFilters = [{ value: 'objects', label: 'Objects' }]
  // console.log(activeFilters.length)
  const activeFilters = appliedFilters.map((activeFilter) => {
    activeFilter.value = activeFilter.label.toLowerCase();
    // console.log(activeFilter);
    return activeFilter;
  });
  // console.log(appliedFilters)
  const [params] = useSearchParams();
  const location = useLocation();


  return (
    <>
      <div className="bg-contrast -ml-4 sm:ml-0 w-full-8 sm:w-full">
        {/* Filters */}
        <Disclosure
          as="section"
          aria-labelledby="filter-heading"
          className="grid items-center border-b border-t border-white"
        >
          <h2 id="filter-heading" className="sr-only">
            Filters
          </h2>
          <div className="relative col-start-1 row-start-1 py-4">
            <div className="mx-auto flex items-center space-x-6 px-4 sm:px-6 lg:px-6 divide-x divide-white text-sm">
              <div>
                <Disclosure.Button className="group flex items-center font-bold text-white">
                  <FunnelIcon
                    className="mr-2 h-5 w-5 flex-none text-white group-hover:text-white"
                    aria-hidden="true"
                  />{activeFilters.length > 1 ? activeFilters.length + ' Filters' : 'Filters'}
                </Disclosure.Button>
              </div>
              {appliedFilters.length > 0 ? (
                <AppliedFilters filters={appliedFilters} />
              ) : null}
            </div>
          </div>
          <Disclosure.Panel className="border-t border-white py-10">
            <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-4 px-4 text-sm sm:px-6 md:gap-x-6 lg:px-8">
              <div className="grid auto-rows-min grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-6">
                <fieldset>
                  <legend className="block font-bold">Availability</legend>
                  <div className="space-y-6 pt-6 sm:space-y-4 sm:pt-4">
                    {filters.availability.map((option, optionIdx) => (
                      <div key={option.value} className="flex items-center text-base sm:text-sm">
                        {/* <Toggle id={`availability-${optionIdx}`}
                          name="availability[]"
                          defaultValue={option.checked} /> */}
                        <label htmlFor={`price-${optionIdx}`} className="ml-3 min-w-0 flex-1 text-white">
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </fieldset>
                <fieldset>
                  <legend className="block font-bold">Price</legend>
                  <div className="space-y-6 pt-6 sm:space-y-4 sm:pt-4">
                    {filters.price.map((option, optionIdx) => (
                      <div key={option.value} className="flex items-center text-base sm:text-sm">
                        <input
                          id={`price-${optionIdx}`}
                          name="price[]"
                          defaultValue={option.value}
                          type="checkbox"
                          className="h-4 w-4 flex-shrink-0 rounded border-white text-indigo-600 focus:ring-indigo-500"
                          defaultChecked={option.checked}
                        />
                        <label htmlFor={`price-${optionIdx}`} className="ml-3 min-w-0 flex-1 text-white">
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </fieldset>
                {/* <fieldset>
                  <legend className="block font-bold">Color</legend>
                  <div className="space-y-6 pt-6 sm:space-y-4 sm:pt-4">
                    {filters.color.map((option, optionIdx) => (
                      <div key={option.value} className="flex items-center text-base sm:text-sm">
                        <input
                          id={`color-${optionIdx}`}
                          name="color[]"
                          defaultValue={option.value}
                          type="checkbox"
                          className="h-4 w-4 flex-shrink-0 rounded border-white text-indigo-600 focus:ring-indigo-500"
                          defaultChecked={option.checked}
                        />
                        <label htmlFor={`color-${optionIdx}`} className="ml-3 min-w-0 flex-1 text-white">
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </fieldset> */}
              </div>
              <div className="grid auto-rows-min grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-6">
                <fieldset>
                  <legend className="block font-bold">Size</legend>
                  <div className="space-y-6 pt-6 sm:space-y-4 sm:pt-4">
                    {filters.size.map((option, optionIdx) => (
                      <div key={option.value} className="flex items-center text-base sm:text-sm">
                        <input
                          id={`size-${optionIdx}`}
                          name="size[]"
                          defaultValue={option.value}
                          type="checkbox"
                          className="h-4 w-4 flex-shrink-0 rounded border-white text-indigo-600 focus:ring-indigo-500"
                          defaultChecked={option.checked}
                        />
                        <label htmlFor={`size-${optionIdx}`} className="ml-3 min-w-0 flex-1 text-white">
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </fieldset>
                <fieldset>
                  <legend className="block font-bold">Category</legend>
                  <div className="space-y-6 pt-6 sm:space-y-4 sm:pt-4">
                    {filters.category.map((option, optionIdx) => (
                      <div key={option.value} className="flex items-center text-base sm:text-sm">
                        <input
                          id={`category-${optionIdx}`}
                          name="category[]"
                          defaultValue={option.value}
                          type="checkbox"
                          className="h-4 w-4 flex-shrink-0 rounded border-white text-indigo-600 focus:ring-indigo-500"
                          defaultChecked={option.checked}
                        />
                        <label htmlFor={`category-${optionIdx}`} className="ml-3 min-w-0 flex-1 text-white">
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </fieldset>
              </div>
            </div>
          </Disclosure.Panel>
          <SortMenu />
        </Disclosure>
        <div className="flex-1 p-4 lg:p-8">{children}</div>
      </div>
    </>
  )
}

export function FiltersDrawer({
  filters = [],
  appliedFilters = [],
  collections = [],
}) {
  const [params] = useSearchParams();
  const location = useLocation();

  const filterMarkup = (filter, option) => {
    switch (filter.type) {
      case 'PRICE_RANGE':
        const min =
          params.has('minPrice') && !isNaN(Number(params.get('minPrice')))
            ? Number(params.get('minPrice'))
            : undefined;

        const max =
          params.has('maxPrice') && !isNaN(Number(params.get('maxPrice')))
            ? Number(params.get('maxPrice'))
            : undefined;

        return <PriceRangeFilter min={min} max={max} />;

      default:
        const to = getFilterLink(filter, option.input, params, location);
        return (
          <Link
            className="focus:underline hover:underline"
            prefetch="intent"
            to={to}
          >
            {option.label}
          </Link>
        );
    }
  };

  const collectionsMarkup = collections.map((collection) => {
    return (
      <li key={collection.handle} className="pb-4">
        <Link
          to={`/collections/${collection.handle}`}
          className="focus:underline hover:underline"
          key={collection.handle}
          prefetch="intent"
        >
          {collection.title}
        </Link>
      </li>
    );
  });

  return (
    <>
      <nav className="py-8">
        {appliedFilters.length > 0 ? (
          <div className="pb-8">
            <AppliedFilters filters={appliedFilters} />
          </div>
        ) : null}

        <Heading as="h4" size="lead" className="pb-4">
          Filter By
        </Heading>
        <div className="divide-y">
          {filters.map(
            (filter) =>
              filter.values.length > 1 && (
                <Disclosure as="div" key={filter.id} className="w-full">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex justify-between w-full py-4">
                        <Text size="lead">{filter.label}</Text>
                        <IconCaret direction={open ? 'up' : 'down'} />
                      </Disclosure.Button>
                      <Disclosure.Panel key={filter.id}>
                        <ul key={filter.id} className="py-2">
                          {filter.values?.map((option) => {
                            return (
                              <li key={option.id} className="pb-4">
                                {filterMarkup(filter, option)}
                              </li>
                            );
                          })}
                        </ul>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ),
          )}
        </div>
      </nav>
    </>
  );
}

function AppliedFilters({ filters = [] }) {
  const [params] = useSearchParams();
  const location = useLocation();
  return (
    <>
      <div className="-m-1 pl-6 flex flex-wrap items-center">
        {filters.map((activeFilter) => (
          <Link
            prefetch="intent"
            to={getAppliedFilterLink(activeFilter, params, location)}
            className="m-1 inline-flex items-center rounded-full border border-white py-1.5 pl-3 pr-2 text-sm font-bold text-white"
            key={`${activeFilter.label}-${activeFilter.urlParam}`}
          >
            <span>{activeFilter.label}</span>
            <button
              type="button"
              className="ml-1 inline-flex h-4 w-4 flex-shrink-0 rounded-full p-1 text-gray-200 hover:bg-white hover:text-gray-500"
            >
              <span className="sr-only">Remove filter for {activeFilter.label}</span>
              <svg className="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
                <path strokeLinecap="round" strokeWidth="1.5" d="M1 1l6 6m0-6L1 7" />
              </svg>
            </button>
          </Link>
        ))}
        {/* <div className="pl-6">
                <Link
                   to={getAppliedFilterLink('', params, location)} 
                   className="text-white">
                  Clear all
                </Link>
              </div> */}
      </div>
    </>
  );
}

function getAppliedFilterLink(filter, params, location) {
  const paramsClone = new URLSearchParams(params);
  if (filter.urlParam.key === 'variantOption') {
    const variantOptions = paramsClone.getAll('variantOption');
    const filteredVariantOptions = variantOptions.filter(
      (options) => !options.includes(filter.urlParam.value),
    );
    paramsClone.delete(filter.urlParam.key);
    for (const filteredVariantOption of filteredVariantOptions) {
      paramsClone.append(filter.urlParam.key, filteredVariantOption);
    }
  } else {
    paramsClone.delete(filter.urlParam.key);
  }
  return `${location.pathname}?${paramsClone.toString()}`;
}

function getSortLink(sort, params, location) {
  params.set('sort', sort);
  return `${location.pathname}?${params.toString()}`;
}

function getFilterLink(filter, rawInput, params, location) {
  const paramsClone = new URLSearchParams(params);
  const newParams = filterInputToParams(filter.type, rawInput, paramsClone);
  return `${location.pathname}?${newParams.toString()}`;
}

const PRICE_RANGE_FILTER_DEBOUNCE = 500;

function PriceRangeFilter({ max, min }) {
  const location = useLocation();
  const params = useMemo(
    () => new URLSearchParams(location.search),
    [location.search],
  );
  const navigate = useNavigate();

  const [minPrice, setMinPrice] = useState(min ? String(min) : '');
  const [maxPrice, setMaxPrice] = useState(max ? String(max) : '');

  useDebounce(
    () => {
      if (
        (minPrice === '' || minPrice === String(min)) &&
        (maxPrice === '' || maxPrice === String(max))
      )
        return;

      const price = {};
      if (minPrice !== '') price.min = minPrice;
      if (maxPrice !== '') price.max = maxPrice;

      const newParams = filterInputToParams('PRICE_RANGE', { price }, params);
      navigate(`${location.pathname}?${newParams.toString()}`);
    },
    PRICE_RANGE_FILTER_DEBOUNCE,
    [minPrice, maxPrice],
  );

  const onChangeMax = (event) => {
    const newMaxPrice = event.target.value;
    setMaxPrice(newMaxPrice);
  };

  const onChangeMin = (event) => {
    const newMinPrice = event.target.value;
    setMinPrice(newMinPrice);
  };

  return (
    <div className="flex flex-col">
      <label className="mb-4">
        <span>from</span>
        <input
          name="maxPrice"
          className="text-black"
          type="text"
          defaultValue={min}
          placeholder={'$'}
          onChange={onChangeMin}
        />
      </label>
      <label>
        <span>to</span>
        <input
          name="minPrice"
          className="text-black"
          type="number"
          defaultValue={max}
          placeholder={'$'}
          onChange={onChangeMax}
        />
      </label>
    </div>
  );
}

function filterInputToParams(type, rawInput, params) {
  const input = typeof rawInput === 'string' ? JSON.parse(rawInput) : rawInput;
  switch (type) {
    case 'PRICE_RANGE':
      if (input.price.min) params.set('minPrice', input.price.min);
      if (input.price.max) params.set('maxPrice', input.price.max);
      break;
    case 'LIST':
      Object.entries(input).forEach(([key, value]) => {
        if (typeof value === 'string') {
          params.set(key, value);
        } else if (typeof value === 'boolean') {
          params.set(key, value.toString());
        } else {
          const { name, value: val } = value;
          const allVariants = params.getAll(`variantOption`);
          const newVariant = `${name}:${val}`;
          if (!allVariants.includes(newVariant)) {
            params.append('variantOption', newVariant);
          }
        }
      });
      break;
  }

  return params;
}



export default function SortMenu() {
  const items = [
    { name: 'Featured', key: 'featured', href: "#", current: false, },
    {
      name: 'Price: Low - High',
      key: 'price-low-high',
      href: '#',
      current: false,
    },
    {
      name: 'Price: High - Low',
      key: 'price-high-low',
      href: '#',
      current: false,
    },
    {
      name: 'Best Selling',
      key: 'best-selling',
      href: '#',
      current: false,
    },
    {
      name: 'Newest',
      key: 'newest',
      href: '#',
      current: true,
    },
  ];
  const [params] = useSearchParams();
  const location = useLocation();
  const activeItem = items.find((item) => item.key === params.get('sort'));

  // console.log(activeItem)

  // console.log(params)

  return (
    <>
      <div className="col-start-1 row-start-1 py-4">
        <div className="mx-auto flex justify-end px-4 sm:px-6 lg:px-8">
          <Menu as="div" className="relative z-40 inline-block">
            <div className="flex">
              <Menu.Button className="group inline-flex justify-center text-sm font-bold text-white hover:text-white">
                Sort
                <ChevronDownIcon
                  className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-white group-hover:text-white"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                as="nav"
                className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-contrast shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  {/* {items.map((option) => (
                    <Menu.Item key={option.name}>
                      {({ active }) => (
                        <Link
                          to={getSortLink(option.key, params, location)}
                          className={classNames(
                            option.current ? 'font-bold text-white' : 'text-white',
                            active ? 'bg-contrast' : '',
                            'block px-4 py-2 text-sm',
                          )}
                        >
                          {option.name}
                        </Link>
                      )}
                    </Menu.Item>
                  ))} */}
                  {items.map((item) => (
                    <Menu.Item key={item.name}>
                      {() => (
                        <Link
                          className={`block text-sm pb-2 px-3 
                  ${activeItem?.key === item.key ? 'font-bold' : 'font-normal'}
                    `}
                          to={getSortLink(item.key, params, location)}
                          prefetch="intent"
                        >
                          {item.name}
                        </Link>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </>
  );
}


// function log(text) {
//   console.log("This is log: " + text);
// }