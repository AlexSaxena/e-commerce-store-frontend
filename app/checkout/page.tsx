"use client";
import Link from 'next/link'
import React from 'react'
import { useCart } from '../context/CartContext'

export default function page() {
  const {cartState} = useCart();
  return (
    <div>
        <h1>Checkout page</h1>
        <Link href="/">Hem</Link>
        {cartState.cart.map((product) => (
          <div key={product.id}>
            <img src={product.imageUrl} alt="image" className='w-12 h-12'/>
            <p>{product.name}</p>
          </div>
        ))}
        <button className='border border-purple-600'>Beställ</button>
    </div>
  )
}
