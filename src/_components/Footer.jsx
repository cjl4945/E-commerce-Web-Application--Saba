import React from 'react'
import { FaYoutubeSquare, FaInstagram, FaCar, FaWalking} from 'react-icons/fa'


function Footer() {
  return (
    <div className="flex flex-col mt-72 text-center bg-pink-400 text-2xl font-mono py-3 justify-center items-center">
      <h4 className="underline ">Hours</h4>
      <p className='flex items-center'> <FaCar className='mr-2'/> Free Delivery:</p>
      <p> Order BEFORE 7:30pm or for Delivery by 9:30pm</p>
      <p className='flex items-center'> <FaWalking className='mr-2' /> Curbside Pickup:12:00pm - 10:00pm</p>
      <p> ASAP Delivery($20): 12:00pm - 9:00pm (Philly Only)</p>
      
      
      {/* contact section */}
      <div className="pt-4">

        <h1>Contact:</h1>

        <p className='flex justify-center items-center pb-5'>
          <a href="https://www.instagram.com/" className="flex items-center">
            <FaInstagram className="mr-2" />  {/* Add margin-right for spacing */}
            @Saba
          </a>
        </p>

        <p className='flex justify-center items-center'>
          <a href="https://www.youtube.com/" className="flex items-center">
            <FaYoutubeSquare className="mr-2" />  {/* Add margin-right for spacing */}
            @Saba
          </a>
        </p>
        
        </div>


      </div>
  )
}

export default Footer