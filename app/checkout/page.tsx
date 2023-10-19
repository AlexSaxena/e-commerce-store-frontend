import React from 'react';
import Cart from '../components/cart/cart';
import HandleSubmitButton from '../components/HandleSubmitButton';

const Page: React.FC = () => {
  return (
    <section className="flex flex-col relative left-80">
        <Cart />
        <HandleSubmitButton />
    </section>
  );
};

export default Page;
