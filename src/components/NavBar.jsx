"use client"
import React from 'react'
import NavItem from './NavItem'

function NavBar() {
  return (
    <div className=' flex dark:bg-gray-600 bg-amber-100 p-4 lg:text-lg justify-center gap-6'>
      <NavItem title="Trending" param="fetchTrending" />
      <NavItem title="Top Rated" param="fetchTopRated"
       />
    </div>
  )
}

export default NavBar