import React from 'react'
import { PRICE, PrismaClient } from '@prisma/client'
import { useSearchParams } from 'next/navigation'

import Header from './components/Header'
import SideBar from './components/SideBar'
import RestaurantCard from './components/RestaurantCard'

interface SearchParams {
  city?: string
  cuisine?: string
  price?: PRICE
}

const prisma = new PrismaClient()

const fetchRestaurantByLocation = async (searchParams: SearchParams) => {
  const where: any = {}

  if (searchParams.city) {
    const location = {
      name: {
        equals: searchParams.city.toLowerCase()
      }
    }
    where.location = location
  }

  if (searchParams.cuisine) {
    const cuisine = {
      name: {
        equals: searchParams.cuisine.toLowerCase()
      }
    }
    where.cuisine = cuisine
  }

  if (searchParams.price) {
    const price = {
      equals: searchParams.price
    }
    where.price = price
  }

  const select = {
    id: true,
    name: true,
    main_image: true,
    price: true,
    cuisine: true,
    location: true,
    slug: true,
    reviews: true
  }

  // if (!city) return prisma.restaurant.findMany({ select })

  return prisma.restaurant.findMany({
    where,
    select
  })
}

const fetchLocations = async () => {
  return prisma.location.findMany()
}

const fetchCuisines = async () => {
  return prisma.cuisine.findMany()
}

const SearchPage = async ({ searchParams }: { searchParams: SearchParams }) => {
  const restaurants = await fetchRestaurantByLocation(searchParams)
  const locations = await fetchLocations()
  const cuisines = await fetchCuisines()
  return (
    <>
      <Header />
      <div className='flex items-start justify-between w-2/3 py-4 m-auto'>
        {/* SEARCH SIDE BAR */}
        <SideBar
          locations={locations}
          cuisines={cuisines}
          searchParams={searchParams}
        />
        {/* SEARCH SIDE BAR */}
        <div className='w-5/6'>
          {restaurants.length ? (
            <>
              {restaurants.map(restaurant => {
                return (
                  <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                )
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
