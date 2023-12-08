import { useNavigate } from "react-router-dom";

export function MealItem({idMeal, strMeal, strMealThumb}) {

  const navigate = useNavigate();

  return (
    <div className='shadow cursor-pointer' onClick={()=> navigate('/meal/' + idMeal)}>
      <img src={strMealThumb} alt={strMeal} className=' w-full' />
      <div className='text-center'>{strMeal}</div>
    </div>
  )
}
