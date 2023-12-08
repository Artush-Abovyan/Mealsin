import {useState, useEffect} from 'react';
import { useParams, useNavigate } from "react-router-dom";
import {getFilteredCategory} from '../api';
import { MealList } from '../components/MealList';

export function CategoryPage() {

  const {name} = useParams();
  const navigate = useNavigate();
  const [meals, setMeals] = useState([]);

  useEffect(()=>{
    getFilteredCategory(name).then(data=>{
      console.log(data.meals);
      setMeals(data.meals);
    })
  }, []);

  return (
    <div className=' mx-auto container'>
       <button onClick={()=> navigate(-1)} className=" bg-red-400 text-white px-4 py-2">GO BACK</button>
      <MealList meals={meals} />
    </div>
  )
}
