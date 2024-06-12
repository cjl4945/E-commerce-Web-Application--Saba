import React from 'react'
import axios from 'axios'
import ListProducts from '@/_components/products/ListProducts'

const getProducts = async () => {
  const { data } = await axios.get(`${process.env.API_URL}/api/saba`)
  return data
}

const page = async () => {
  const productsData = await getProducts()
  return (
    <ListProducts data={productsData} />
    
  )
}

export default page