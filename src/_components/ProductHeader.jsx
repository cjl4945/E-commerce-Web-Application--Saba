'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaHome } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { HiMiniShoppingCart } from 'react-icons/hi2'





const ProductHeader = () => {
  const { loading, cartItems } = useSelector((state) => state.cart)

  return (
    <header className='relative pb-8'>
      <div className='relative'>
        
        <Link href="/">
          <div className="absolute bottom-2 left-1/2 text-black"><FaHome size={32}/></div>
        </Link>
        
        <Image
         src={'/../../assets/header.png'}
         width={0}
         height={0}
         sizes="100vw"
         style={{ width: '100%', height: 'auto' }} // optional
         alt='header'
         />
         
         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className= 'font-rubik text-2xl md:text-4xl'>SABASMITHSTONEANS</h1>
        </div>
        <div className="absolute bottom-0 text-white right-10 ml-4 mb-4 flex items-center">
          <span className='cart-badge'>
          {loading ? '' : cartItems.reduce((a, c) => a + c.qty, 0)}
          </span>
          <Link href="/cart"><HiMiniShoppingCart size={56} /></Link>
        </div>
      </div>
      
    </header>
  )
}

export default ProductHeader