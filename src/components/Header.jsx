import { NavLink as Link } from "react-router-dom"

export function Header() {
  return (
    <>

      <nav className=" fixed w-full bg-red-300 text-white p-4 text-2xl flex justify-center items-center">
        <Link className='mr-4' to='/'>Home</Link>
        <Link className='mr-4' to='/about'>About</Link>
        <Link className='mr-4' to='/contact'>Contact</Link>
      </nav>

      <div className="h-[10vh]"></div>
    </>
  )
}
