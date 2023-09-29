import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer
    className='bg-black'>
        <h1>Footer</h1>
        <Link href="/kundservice">Kundservice</Link>
    </footer>
  )
}
