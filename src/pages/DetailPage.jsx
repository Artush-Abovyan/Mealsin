import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {getMealById} from '../api';

export function DetailPage() {

  const [meal, setMeal] = useState({});
  const {id} = useParams();
  const navigate = useNavigate();


  useEffect(()=>{
    getMealById(id).then(data=>{
      console.log(data.meals[0]);
      setMeal(data.meals[0])
    })
  }, [])

  return (
    <div className=" mx-auto container">
       <button onClick={()=> navigate(-1)} className=" bg-red-400 text-white px-4 py-2">GO BACK</button>
        <img src={meal.strMealThumb} alt={meal.strMeal} />
        <div>Area: {meal.strArea}</div>
        <div>Category: {meal.strCategory}</div>
        <div>Meal: {meal.strMeal}</div>
    </div>
  )
}
