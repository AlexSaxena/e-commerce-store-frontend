'use client';
import { Product } from '@prisma/client';
import { useCartStore } from './store/cartStore';
import React from 'react';

let storeId = '4d1875a7-1a5a-42d1-a9c1-ffa1b78bba20'; //Temporary Store ID

interface HandleSubmitButtonProps {
  product: Product;
}

const HandleSubmitButton: React.FC<HandleSubmitButtonProps> = ({ product }) => {
  const cart = useCartStore((state) => state.cart);
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('Cart -> ', cart);
    try {
      const response = await fetch(
        `http://localhost:3000/api/${storeId}/orders/addorder`, // CHECK LOCALHOST NR
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(cart),
        },
      );

      if (response.status === 200) {
        console.log('Beställning gick ok!');
        const data = await response.json();
        console.log('data:', data);
        return data;
      } else {
        throw new Error('Something went wrong with data retrieval!');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button
      type="submit"
      className="border border-purple-600"
      onClick={handleSubmit}
    >
      Beställ
    </button>
  );
};

export default HandleSubmitButton;
