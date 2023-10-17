'use client';
import { Product } from '@prisma/client';
import { useCartStore } from './store/cartStore';
import React from 'react';

// let storeId = '4d1875a7-1a5a-42d1-a9c1-ffa1b78bba20'; //Temporary Store ID

let emilstore = '1b9f737b-8ed7-4b20-b3e7-d45dcd91eebe'

interface HandleSubmitButtonProps {
  product: Product;
}

const HandleSubmitButton: React.FC<HandleSubmitButtonProps> = ({ product }) => {
  const cart = useCartStore((state) => state.cart);
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('Cart -> ', cart);

    const myOrder: object[] = [];

    cart.forEach((item) => {
      item.orderItems.forEach((orderItem) => {
        console.log(orderItem);
        myOrder.push(orderItem);
      });
    });

    console.table(myOrder);

    const data = {
      storeId: emilstore,
      orderItems: [
        {
          productId: '0223cee8-8884-4c6f-b093-340df860f80a',
          quantity: 2,
        },
        {
          productId: '138f3d69-5194-4846-8976-eb40171a6236',
          quantity: 3,
        },
      ],
      isPaid: true,
      name: 'John Doe',
      phone: '123-456-7890',
      address: '123 Main St',
    };

    try {
      const response = await fetch(
        `http://localhost:3000/api/${emilstore}/orders/addorder`, // CHECK LOCALHOST NR
        {
          mode: 'no-cors',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
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
