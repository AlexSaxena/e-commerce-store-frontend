import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className='bg-black'>
        <p className='text-xl '>Navbar</p>
        
        <h1>Hakims Livs</h1>
        <div>
            <Link href="/om-hakim-livs">Om Hakims Livs</Link>
                <input 
                className='searchbar bg-white'
                type="text" 
                placeholder='search'
                />
            <Link href="/checkout">Varukorg</Link>
        </div> 
    </nav>
  )
}
