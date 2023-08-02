import React from 'react'
import NavbarItem from '@/components/NavbarItem'

export default function Navbar() {
  return (
    <div class="flex justify-center bg-amber-100 dark:bg-gray-500 lg:text-lg p-4">
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  )
}
