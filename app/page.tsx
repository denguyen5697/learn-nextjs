import { PrismaClient, Cuisine, Location, PRICE } from '@prisma/client'

import Header from './components/Header'
import RestaurantCard from './components/RestaurantCard'

export interface RestaurantCardType {
  id: number
  name: string
  main_image: string
  cuisine: Cuisine
  location: Location
  price: PRICE
  slug: string
}
const prisma = new PrismaClient()

const fetchRestaurants = async (): Promise<RestaurantCardType[]> => {
  const restaurants = await prisma.restaurant.findMany({
    select: {
      id: true,
      name: true,
      main_image: true,
      cuisine: true,
      location: true,
      price: true,
      slug: true
    }
  })

  return restaurants
}
export default async function Home() {
  const restaurants = await fetchRestaurants()

  return (
    <main>
      {/* HEADER */}
      <Header />
      {/* HEADER */} {/* CARDS */}
      <div className='flex flex-wrap justify-center py-3 mt-10 text-black px-36'>
        {restaurants.map(restaurant => (
          <RestaurantCard restaurant={restaurant} key={restaurant.id}/>
        ))}
      </div>
      {/* CARDS */}
    </main>
  )
}
