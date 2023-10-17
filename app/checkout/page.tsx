import React from 'react';
import Cart from '../components/cart/cart';
import HandleSubmitButton from '../components/HandleSubmitButton';

import { Product } from '@prisma/client';

interface PageProps {
  product: Product;
}

export default function page({ product }: PageProps) {
  return (
    <div className="flex flex-col relative left-80 text-white">
      <div>
        <Cart />
        <HandleSubmitButton product={product} />
      </div>
    </div>
  );
}
