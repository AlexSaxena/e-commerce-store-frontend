'use client';
import { Product } from '@prisma/client';
let storeId = '7ea880c8-fc45-4cb4-b8a2-2e2945e22c01';

interface HandleSubmitButtonProps {
  product: Product;
}

import React from 'react';

interface HandleSubmitButtonProps {
  product: Product;
}

const HandleSubmitButton: React.FC<HandleSubmitButtonProps> = ({ product }) => {
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      const response = await fetch(`http://localhost:3000/api/${storeId}/orders/addorder`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });
      if (response.status === 200) {
        console.log('Beställning gick ok!');
        const data = await response.json();
        console.log('data:', data)
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
