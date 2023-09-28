import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav style={{
      border: 'solid 1px red'
    }}>
        <h1>Navbar</h1>
        
        <h2>Hakims Livs</h2>
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
