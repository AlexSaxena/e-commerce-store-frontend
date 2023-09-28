import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav>
        <h1>Hakims Livs</h1>
        <div>
            <Link href="/om-hakim-livs">Om Hakims Livs</Link>
                <input 
                className='searchbar'
                type="text" 
                style={{
                    border: 'solid 1px red'
                }}
                placeholder='search'
                />
            <Link href="/checkout">Varukorg</Link>
        </div> 
    </nav>
  )
}
