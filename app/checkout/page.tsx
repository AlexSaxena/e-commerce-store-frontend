let storeId ="7ea880c8-fc45-4cb4-b8a2-2e2945e22c01";
import React from 'react';
import Cart from '../components/cart/cart';

import { Product } from '@prisma/client';

interface ProductProps {
  product: Product;
}


export default function page() {
  const handleSubmit = async ( product: ProductProps) => {
    try {
      const response = await fetch(`/api/${storeId}/orders/addorder`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error('Something went wrong with data retrieval!');
      }
    } catch (error) {
      console.error(error);
    }
  
    return (
      <div className="flex flex-col relative left-80">
        <div>
          <form onClick={() => handleSubmit(product)}>
            <Cart />
            <button type="submit" className="border border-purple-600">
              Beställ
            </button>
          </form>
        </div>
      </div>
    );
  };
}
