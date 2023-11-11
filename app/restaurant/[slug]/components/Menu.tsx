import React from 'react'
import { Item } from '@prisma/client'

import MenuCard from './MenuCard'

const Menu = ({ menu }: { menu: Item[] }) => {
  return (
    <main className='mt-5 bg-white'>
      <div>
        <div className='pb-1 mt-4 mb-1'>
          <h1 className='text-4xl font-bold'>Menu</h1>
        </div>
        {menu.length ? (
          <div className='flex flex-wrap justify-between'>
            {menu.map(item => {
              return <MenuCard item={item} key={item.id} />
            })}
          </div>
        ) : (
          <div className='flex flex-wrap justify-between'>
            <p>No items</p>
          </div>
        )}
      </div>
    </main>
  )
}

export default Menu
