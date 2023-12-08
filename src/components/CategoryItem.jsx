import { Link } from "react-router-dom"

export function CategoryItem({item,setActive}) {
  return (
    <div className='shadow p-4'>
      <img src={item.strCategoryThumb} alt={item.strCategory} className=' w-full' />
      <div className=' text-xl font-bold text-red-300'>{item.strCategory}</div>
      <div className="mb-4">{
        item.strCategoryDescription.length > 200 ? item.strCategoryDescription.slice(0, 200) + '......' : item.strCategoryDescription
      }</div>
      <Link 
        className=' bg-red-200 px-4 py-2 text-white'
        to={'/category/' + item.strCategory}
      >Detail</Link>
      <button onClick={()=>setActive([true, item.strCategoryDescription])}>Click</button>
    </div>
    
  )
}
