import React from 'react';
import dynamic from 'next/dynamic'

import HandleSubmitButton from '../components/HandleSubmitButton';

const Cart = dynamic(() => import('../components/cart/cart'), {ssr: false})

const Page: React.FC = () => {
  return (
    <section className="flex flex-col relative left-80">
      <Cart />
      <HandleSubmitButton />
    </section>
  );
};

export default Page;
