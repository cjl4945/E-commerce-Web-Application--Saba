'use client'

import Navbar from '../_components/NavBar'
import Header from '@/_components/Header'
import Footer from '@/_components/Footer'
import { hideLoading } from '@/redux/slices/cartSlice'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

export default function Home() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(hideLoading())
  }, [dispatch])
  return (
    <>

    {/* <div className='un underline'>Hello World!</div> */}
    <Header />
    <Navbar />
    <Footer />
    {/* <CartSidebar /> */}
    </>
  )
}
