import React from 'react'
import MenuItems from './MenuItems'

function Menu({items}) {
  return (
      <div className='section-center'>
          {items.map((menuItem) => {
              return <MenuItems Keys={menuItem.Id} {...menuItem}/>
          })}
    </div>
  )
}

export default Menu