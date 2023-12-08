import { useState, useEffect } from "react"
import {getAllCategories} from '../api';

import { CategoryList } from "../components/CategoryList";
import {Loading} from '../components/Loading/';
import { Search } from "../components/Search";
import { Modal } from "../components/Modal";
export function HomePage() {

  const [categories, setCategories] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState([false]);

  useEffect(()=>{

    getAllCategories().then(data=>{
      console.log(data.categories);
      setCategories(data.categories);
      setLoading(false);
    })
  }, []);

  const search = (value)=>{
    let arr = categories.filter(el=> 
        el.strCategory.toLowerCase().includes(value.trim().toLowerCase()) || 
        el.strCategoryDescription.toLowerCase().includes(value.trim().toLowerCase()));
    setFilteredCategory(arr);
  }

  return (
    <div className=" mx-auto container">
      {loading && <Loading />}
      {<Search search={search} />}
      <CategoryList categories={filteredCategory.length >0 ? filteredCategory : categories} setActive={setActive}/>
      <Modal active={active} setActive={setActive}/>
    </div>
  )
}
