import Link from 'next/link';
import React from 'react';
import Cart from '../components/cart/cart';

export default function page() {
  return (
    <div className="flex flex-col relative left-80">
      <div>
        <Cart />
        <button className="border border-purple-600">Beställ</button>
      </div>
    </div>
  );
}
