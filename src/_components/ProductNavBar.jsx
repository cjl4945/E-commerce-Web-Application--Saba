import React from 'react'
import Link from 'next/link'
import { Climate_Crisis } from 'next/font/google'

const navLinks = [
  {name: "Saba Farms", href: "/products/saba-farms"},
  {name: "Saba Treats", href: "/products/saba-treats"},
]

const climate = Climate_Crisis({subsets: ['latin'], weight: '400'})

const ProductNavBar = () => {
  return (
    <div className='flex gap-7'>
    {navLinks.map((link) => (
      <Link className='bg-violet-400 px-2 py-2 rounded-md ml-4' href={link.href} key={link.href}>{link.name}</Link>
    ))}
    
    </div>
  )
}

export default ProductNavBar