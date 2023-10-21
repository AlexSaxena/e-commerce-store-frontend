'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../../public/assets/logos/logo-hakim-01.png';
import { useCartStore } from './store/cartStore';
import { ShoppingCart } from 'lucide-react';


export default function Navbar() {

  const cart = useCartStore((state) => state.cart);

  return (
    <nav className="flex flex-row justify-between bg-slate-200">
      <div className="flex w-full justify-between items-center pl-4 pt-4 pb-4">
        <Link href="/">
          <Image
            src={logo}
            width={208}
            height={208}
            alt="Hakims logo"
            className=""
          />
        </Link>
        <div className="mr-16 pt-4 static">
          <Link href="/checkout" className='flex items-center'>
          <p className='text-2xl'>Kundvagn</p> 
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
          </Link>
          <span className='bg-red-700 text-white text-xs px-1 rounded-full relative bottom-10 left-32'>
            {cart.length}
          </span>
        </div>
      </div>
    </nav>
  );
}
