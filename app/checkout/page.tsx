import Link from 'next/link'
import React from 'react'
import Cart from '../components/cart/cart'

export default function page() {
  return (
    <div>
        <h1>Checkout page</h1>
        <Link href="/">Hem</Link>
        <Cart />
        <button className='border border-purple-600'>Beställ</button>
    </div>
  )
}
