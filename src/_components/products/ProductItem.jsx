'use client'
import React from "react";
import Image from "next/image";
import AddToCart from "../AddToCart";



const ProductItem = ({ product }) => {


    
    
    


  return (
    


<div className="flex justify-center items-center mb-5 min-w-12">
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
    <a href="#" className="flex justify-center items-center">
        <Image  src={product.image}
        width={100}
        height={100} 
        alt="" />
    </a>
    <div className="p-5 flex-1">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.description.substring(0,150)}</p>
        <div className="flex flex-col justify-center items-center">
        {/* <button 
        className="px-4 py-2 flex justify-center items-center text-black bg-blue-600 border border-transparent rounded-md hover:bg-blue-700">
            Add to Cart   ${product.price}   
        </button> */}
        <p>${product.price}</p>
        <AddToCart showQty={false} product={product} increasePerClick={true} redirect={false} />
        </div>
    </div>
</div>
</div>
 );
};

export default ProductItem;