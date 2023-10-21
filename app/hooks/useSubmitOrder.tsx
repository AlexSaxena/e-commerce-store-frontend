// useSubmitOrder.js
import { useState } from 'react';
import { useCartStore } from '../components/store/cartStore';

const STORE_ID = '4d1875a7-1a5a-42d1-a9c1-ffa1b78bba20';

export const useSubmitOrder = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const cart = useCartStore((state) => state.cart);

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const data = {
      storeId: STORE_ID,
      orderItems: cart
        .map((item) =>
          item.orderItems.map((orderItem) => ({
            productId: orderItem.productId,
            quantity: Number(item.quantity),
          })),
        )
        .flat(),
      isPaid: false,
      name: name,
      phone: phone,
      address: address,
    };

    try {
      const response = await fetch(
        `https://e-commerce-store-dashboard.vercel.app/api/${STORE_ID}/orders`,
        {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        },
      );

      if (response.status === 200) {
        const data = await response.json();
        console.log('response 200 -> ', response);
        localStorage.clear();
        return data;
      } else {
        console.log('response not 200-> ', response);
        localStorage.clear();
        throw new Error('Something went wrong with data retrieval!');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return { name, setName, phone, setPhone, address, setAddress, handleSubmit };
};
