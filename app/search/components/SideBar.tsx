import { Cuisine, Location, PRICE } from '@prisma/client'
import Link from 'next/link'
import React from 'react'

const prices = [
  {
    price: PRICE.CHEAP,
    label: '$',
    className: 'w-full p-2 text-center font-light border rounded-l text-reg'
  },
  {
    price: PRICE.REGULAR,
    label: '$$',
    className:
      'w-full p-2 font-light text-center  border-t border-b border-r text-reg'
  },
  {
    price: PRICE.EXPENSIVE,
    label: '$$$',
    className:
      'w-full p-2 font-light border-t text-center border-b border-r rounded-r text-reg'
  }
]

const SideBar = ({
  locations,
  cuisines,
  searchParams
}: {
  locations: Location[]
  cuisines: Cuisine[]
  searchParams: { city?: string; cuisine?: string; price?: PRICE }
}) => {
  return (
    <div className='w-1/5 text-black'>
      <div className='pb-4 border-b'>
        <h1 className='mb-2'>Region</h1>
        {locations.map(location => {
          return (
            <Link
              href={{
                pathname: '/search',
                query: {
                  ...searchParams,
                  city: location.name
                }
              }}
              key={location.id}
              className='block font-light capitalize text-reg'
            >
              {location.name}
            </Link>
          )
        })}
      </div>
      <div className='pb-4 mt-3 border-b'>
        <h1 className='mb-2'>Cuisine</h1>
        {cuisines.map(cuisine => {
          return (
            <Link
              href={{
                pathname: '/search',
                query: {
                  ...searchParams,
                  cuisine: cuisine.name
                }
              }}
              key={cuisine.id}
              className='block font-light capitalize text-reg'
            >
              {cuisine.name}
            </Link>
          )
        })}
      </div>
      <div className='pb-4 mt-3'>
        <h1 className='mb-2'>Price</h1>
        <div className='flex'>
          {prices.map(({ price, label, className }) => {
            return (
              <Link
                key={label}
                href={{
                  pathname: '/search',
                  query: {
                    ...searchParams,
                    price
                  }
                }}
                className={className}
              >
                {label}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default SideBar
