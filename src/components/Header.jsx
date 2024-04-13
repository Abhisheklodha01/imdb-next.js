"use clinet"
import {AiFillHome} from 'react-icons/ai'
import {BsFillInfoCircleFill} from 'react-icons/bs'
import MenuItme from "./MenuItme"
import Link from 'next/link'

function Header() {
  return (
    <nav className='bg-gray-700 py-4 flex justify-between items-center p-3'>
        <div className='flex gap-4 ml-10'>
          <MenuItme
          title ="Home"
          address = "/"
          Icon = {AiFillHome}
          />
          <MenuItme
          title ="About"
          address = "/about"
          Icon = {BsFillInfoCircleFill}
          />
        </div>
        <Link 
        href={"/"}
        className='flex gap-1 items-center'>
          <span className='text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg'>IMDb</span>
          <span className='text-xl hidden sm:inline'>Clone</span>
        </Link>
    </nav>
  )
}

export default Header