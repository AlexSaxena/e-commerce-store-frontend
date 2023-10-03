import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className='bg-black p-12'>
        <div className='grid grid-cols-2'>
          <h1 className='text-5xl text-center col-span-1 col-start-1'>Hakims Livs</h1>
            <div className='border border-red-200 col-span-1 grid grid-cols-2 items-center col-start-3'>
                {/* <Link href="/om-hakim-livs">Om Hakims Livs</Link> */}
                    <input 
                    className='searchbar bg-white rounded-full h-8 border-none w-96 text-center'
                    type="text" 
                    placeholder='search'
                    />
                <Link href="/checkout" className='text-center'>Varukorg</Link>
            </div> 
        </div>
    </nav>
  )
}
