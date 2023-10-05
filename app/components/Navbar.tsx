import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../../public/assets/logos/logo-hakim-01.png'

export default function Navbar() {
  return (
    <nav className='flex flex-row justify-between bg-slate-200'>
        <div className='flex w-full justify-between items-center'>

          <Link href="/">
            <Image 
              src={logo}
              width={208}
              height={208}
              alt="Hakims logo"
              className='' 
            />
          </Link>

          <input 
            className='flex h-8'
            type="text" 
            placeholder='search'
          />
          <div className='flex flex-row gap-8 mr-4'>
            <Link href="/contact">Kontakt</Link>

            <Link href="/om-hakim-livs">Hakims Livs</Link>

            <Link href="/checkout">Varukorg</Link>
          </div>
        </div> 
    </nav>
  )
}
