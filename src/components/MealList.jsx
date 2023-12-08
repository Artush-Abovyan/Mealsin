import React from 'react'
import { MealItem } from './MealItem'

export function MealList({meals}) {
  return (
    <div className=' grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
      {
        meals.map(el=> <MealItem key={el.idMeal} {...el} /> )
      }
    </div>
  )
}
