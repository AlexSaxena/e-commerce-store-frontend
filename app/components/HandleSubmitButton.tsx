'use client';
import { useCartStore } from './store/cartStore';
import React, { useState } from 'react';

const STORE_ID = '4d1875a7-1a5a-42d1-a9c1-ffa1b78bba20'
const HandleSubmitButton: React.FC = () => {
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
        .flat(), // This flattens the nested arrays
      isPaid: false,
      name: name,
      phone: phone,
      address: address,
    };

    try {
      const response = await fetch(
        `https://e-commerce-store-dashboard.vercel.app/api/${STORE_ID}/orders`,
        // `http://localhost:3001/api/${STORE_ID}/orders`,
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
        console.log('response inte 200-> ', response);
        localStorage.clear();
        throw new Error('Something went wrong with data retrieval!');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form action="" className="flex flex-col gap-1">
        <div className="flex flex-col gap-1">
          <div>
            <label htmlFor="customerName">Namn: </label>
            <input
              type="text"
              name="customerName"
              id="customerName"
              placeholder="Mitt Namn"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="customerTel">Tel Nr: </label>
            <input
              type="tel"
              name="customerTel"
              id="customerTel"
              placeholder="Mitt Nr.."
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="customerAdress">Adress: </label>
            <input
              type="text"
              name="customerAdress"
              id="customerAdress"
              placeholder="Min Adress"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>

        <button
          type="submit"
          // disabled={true}
          className="mt-4 mb-4 align-bottom w-28 bg-transparent hover:bg-purple-800 text-purple-800 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded"
          onClick={handleSubmit}
        >
          Lägg Order
        </button>
      </form>
    </div>
  );
};

export default HandleSubmitButton;
