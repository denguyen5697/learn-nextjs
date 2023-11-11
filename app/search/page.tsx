import React from 'react'
import { PrismaClient } from '@prisma/client'
import { useSearchParams } from 'next/navigation'

import Header from './components/Header'
import SideBar from './components/SideBar'
import RestaurantCard from './components/RestaurantCard'

const prisma = new PrismaClient()

const fetchRestaurantByLocation = async (city: string | undefined) => {
  const select = {
    id: true,
    name: true,
    main_image: true,
    price: true,
    cuisine: true,
    location: true,
    slug: true
  }

  if (!city) return prisma.restaurant.findMany({ select })

  return prisma.restaurant.findMany({
    where: {
      location: {
        name: {
          equals: city.toLowerCase()
        }
      }
    },
    select
  })
}

const SearchPage = async ({
  searchParams
}: {
  searchParams: { city: string }
}) => {
  const restaurants = await fetchRestaurantByLocation(searchParams.city)
  console.log('restaurants :', restaurants)
  return (
    <>
      <Header />
      <div className='flex items-start justify-between w-2/3 py-4 m-auto'>
        {/* SEARCH SIDE BAR */}
        <SideBar />
        {/* SEARCH SIDE BAR */}
        <div className='w-5/6'>
          {restaurants.length ? (
            <>
              {restaurants.map(restaurant => {
                return <RestaurantCard key={restaurant.id} restaurant={restaurant} />
              })}
            </>
          ) : (
            <p>Sorry, no restaurants found</p>
          )}
        </div>
      </div>
    </>
  )
}

export default SearchPage
