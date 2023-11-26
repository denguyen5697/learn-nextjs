import React from 'react'
import { Item, PrismaClient } from '@prisma/client'

import Header from '../components/Header'
import RestaurantNavBar from '../components/RestaurantNavBar'
import Menu from '../components/Menu'

const prisma = new PrismaClient()

const fetchRestaurantMenu = async (slug: string): Promise<Item[]> => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug
    },
    select: {
      items: true
    }
  })

  if (!restaurant) {
    throw new Error('cant find restaurant')
  }

  return restaurant.items
}
const RestaurentMenuPage = async ({ params }: { params: { slug: string } }) => {
  const menu = await fetchRestaurantMenu(params.slug)

  return (
    <>
      <div className='bg-white w-[100%] rounded p-3 shadow'>
        {/* RESAURANT NAVBAR */}
        <RestaurantNavBar slug={params.slug} />
        {/* RESAURANT NAVBAR */} {/* MENU */}
        <Menu menu={menu} />
        {/* MENU */}
      </div>
      {/* DESCRIPTION PORTION */}
    </>
  )
}

export default RestaurentMenuPage
