import React from 'react'
import { CategoryItem } from './CategoryItem'

export function CategoryList({categories, setActive}) {

  return (
    <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
      {
        categories.map(el=> <CategoryItem key={el.idCategory} item={el} setActive={setActive}/>)
      }
    </div>
  )
}
