/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { useState } from 'react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Combobox } from '@headlessui/react'

import { BarsArrowUpIcon, UsersIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export function AdvancedSelect({ title, value, img, onChange, options, ...props }) {
    const [query, setQuery] = useState('')
    // const [selectedOption, setSelectedOption] = useState(value)

    function queryChange(event) {
       // console.log(event);
        setQuery(event.target.value);
    }

    function handleValue(option) {
      //  console.log(option);
        return option
    }
   // console.log(value);

    const filteredOptions =
        query === ''
            ? options
            : options.filter((option) => {
                //console.log(option);
                return option.name.toLowerCase().includes(query.toLowerCase())
            })

    //console.log(filteredOptions)

    // console.log(title)
    // console.log(value)
    // console.log(onChange)
    // console.log(options)

    return (
        <Combobox as="div" value={value} onChange={onChange}>
            <Combobox.Label className="block text-sm font-medium">{title}</Combobox.Label>
            <div className="relative mt-2">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
                    <img src={img} alt="" className="border border-contrast h-6 w-6 flex-shrink-0 rounded-full" />
                </div>
                <Combobox.Input
                    className="bg-transparent pl-10 mt-1 block w-full rounded-md border border-contrast py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    onChange={queryChange}
                    displayValue={handleValue}
                />
                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                    <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </Combobox.Button>

                {filteredOptions.length > 0 && (
                    <Combobox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto bg-white border border-contrast rounded-md py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {filteredOptions.map((option, index) => (
                            <Combobox.Option
                                key={index}
                                value={option}
                                className={({ active }) =>
                                    classNames(
                                        'relative cursor-default select-none py-2 pl-3 pr-9',
                                        active ? 'bg-indigo-600' : 'text-gray-900'
                                    )
                                }
                            >
                                {({ active, selected }) => (
                                    <>
                                        <div className="flex items-center">
                                            <img src={option.img} alt="" className="border border-contrast h-6 w-6 flex-shrink-0 rounded-full" />
                                            <span className={classNames('ml-3 truncate', selected && 'font-semibold')}>{option.name}</span>
                                        </div>

                                        {selected && (
                                            <span
                                                className={classNames(
                                                    'absolute inset-y-0 right-0 flex items-center pr-4',
                                                    active ? '' : 'text-indigo-600'
                                                )}
                                            >
                                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                            </span>
                                        )}
                                    </>
                                )}
                            </Combobox.Option>
                        ))}
                    </Combobox.Options>
                )}
            </div>
        </Combobox>
    )
}
