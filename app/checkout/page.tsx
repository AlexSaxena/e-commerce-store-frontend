import React from 'react';
import dynamic from 'next/dynamic'

import Modal from '../components/formmodal';

const Cart = dynamic(() => import('../components/cart/cart'), {ssr: false})

const Page: React.FC = () => {
  return (
    <section className="flex flex-col relative left-80">
      <Cart />  
      <Modal />
    </section>
  );
};

export default Page;
