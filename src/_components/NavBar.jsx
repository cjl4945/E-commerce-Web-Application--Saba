import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Caveat } from 'next/font/google'

const cav = Caveat({subsets: ['latin'], weight: '400'})

const NavBar = () => {
  return (
    <div className=" text-center flex flex-col">
      <div className={`${cav.className} underline text-3xl items-center text-center`}>Shop Now</div>
      
      <div id="container" className=" flex flex-col mt-5 px-36 md:flex-row md:gap-32 justify-between max-w-4xl mx-auto p-4">
      <div className="mb-4 sm:mb-0 sm:flex items-center" id="farms">
        <Link href="/products/saba-farms">
          <div className="flex items-center">
            <Image 
              src="/../../assets/leaf.png" 
              width={100}
              height={100} 
              alt="saba farms" 
            />
            <span className='font-rubik ml-2 sm:ml-4'>Saba Farms</span>
          </div>
        </Link>
      </div>
      <div className="sm:flex items-center" id="treats">
        <Link href="/products/saba-treats">
          <div className="flex items-center">
            <Image 
              src="/../../assets/treat.png"
              width={100}
              height={100}  
              alt="saba treat" 
            />
            <span className='font-rubik ml-2 sm:ml-4'>Saba Treats</span>
          </div>
        </Link>
      </div>
    </div>
      </div>
  )
}

export default NavBar