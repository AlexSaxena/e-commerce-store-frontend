import React from 'react';
import Cart from '../components/cart/cart';
import HandleSubmitButton from '../components/HandleSubmitButton';

import { Product } from '@prisma/client';

interface PageProps {
  product: Product;
}

const Page: React.FC<PageProps> = ({ product }) => {
  return (
    <div className="flex flex-col relative left-80">
      <div>
        <Cart />
        <HandleSubmitButton product={product} />
      </div>
    </div>
  );
};

export default Page;
