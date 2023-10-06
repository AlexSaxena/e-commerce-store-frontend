import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Snow from '../../public/assets/images/Hakim_Headshot_Profile.png'

export default function page() {
  return (
    <div className='flex justify-center flex-col w-full h-full'>
        {/* <h1>Om Hakim livs</h1> */}
       <div className=''>
        <h1 className='text-center text-4xl font-semibold text mt-12'>Om Hakim</h1>
          <Image 
          src={Snow}
          width={500}
          height={0}
          alt='Hakim'
          className="mt-12 mb-4 hover:scale-110 transition duration-500 cursor-pointer m-auto bg-black rounded-full shadow-2xl"
          />
          <p className='text-center text-3xl font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
       </div>
    </div>
  )
}
