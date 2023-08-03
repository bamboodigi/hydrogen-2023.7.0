import clsx from 'clsx';
import { Container } from  '../components';

import { missingClass, formatText } from '~/lib/utils';


export function Stats({config}) {
  const stats = config;
  return (
    <div className="py-4 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-left sm:text-center">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">{stats.heading}</h2>
            <p className="mt-1 font-bold text-lg leading-8 text-gray-300">
               {stats.description}
            </p>
          </div> 
          <dl className="mt-8 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.facts.map((fact, index) => (
              <div key={index} className="flex flex-col bg-white/5 p-8">
                <dt className="text-lg font-bold leading-6 text-gray-300 mt-1">{fact.variable}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">{fact.stat}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
