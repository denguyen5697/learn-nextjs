import React from 'react'

import Header from './components/Header'
import RestaurantNavBar from './components/RestaurantNavBar'
import Title from './components/Title'
import Rating from './components/Rating'
import Description from './components/Description'
import Image from './components/Image'
import Reviews from './components/Reviews'
import ReservationCard from './components/ReservationCard'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

interface Restaurant {
  id: number
  name: string
  images: string[]
  description: string
  slug: string
}
const fetchRestaurantBySlug = async (slug: string): Promise<Restaurant> => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug
    },
    select: {
      id: true,
      name: true,
      images: true,
      description: true,
      slug: true
    }
  })

  if (!restaurant) {
    throw new Error()
  }

  return restaurant
}

const RestaurantDetailPage = async ({
  params
}: {
  params: { slug: string }
}) => {
  const restaurant = await fetchRestaurantBySlug(params.slug)

  return (
    <>
      <div className='bg-white w-[70%] rounded p-3 shadow'>
        {/* RESAURANT NAVBAR */}
        <RestaurantNavBar slug={params.slug} />
        {/* RESAURANT NAVBAR */} {/* TITLE */}
        <Title name={restaurant.name} />
        {/* TITLE */} {/* RATING */}
        <Rating />
        {/* RATING */} {/* DESCRIPTION */}
        <Description description={restaurant.description} />
        {/* DESCRIPTION */} {/* IMAGES */}
        <Image images={restaurant.images} />
        {/* IMAGES */} {/* REVIEWS */}
        <Reviews />
        {/* REVIEWS */}
      </div>
      <div className='w-[27%] relative text-reg'>
        <ReservationCard />
      </div>
      {/* DESCRIPTION PORTION */} {/* RESERVATION CARD PORTION */}{' '}
      {/* RESERVATION
    CARD PORTION */}
    </>
  )
}

export default RestaurantDetailPage