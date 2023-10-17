import React from 'react';
import Cart from '../components/cart/cart';
import HandleSubmitButton from '../components/HandleSubmitButton';

const Page: React.FC = () => {
  return (
    <div className="flex flex-col relative left-80">
      <div>
        <Cart />
        <HandleSubmitButton />
      </div>
    </div>
  );
};

export default Page;
