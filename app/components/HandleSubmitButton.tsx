'use client';
import { Product } from '@prisma/client';
import { useCartStore } from './store/cartStore';
import React, { useState } from 'react';

// let storeId = '4d1875a7-1a5a-42d1-a9c1-ffa1b78bba20'; //Temporary Store ID

let emilstore = '1b9f737b-8ed7-4b20-b3e7-d45dcd91eebe';
let alexStore = '15fd1e68-0410-41e4-80f9-19c4f1128309';

const HandleSubmitButton: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const cart = useCartStore((state) => state.cart);
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('Cart -> ', cart);

    const myOrder: object[] = [];

    cart.forEach((item) => {
      item.orderItems.forEach((orderItem) => {
        console.table(item);
        console.table(orderItem);
        myOrder.push(orderItem);
      });
    });

    const data = {
      storeId: alexStore,
      orderItems: cart
        .map((item) =>
          item.orderItems.map((orderItem) => ({
            productId: orderItem.productId,
            quantity: item.quantity,
          })),
        )
        .flat(), // This flattens the nested arrays
      isPaid: true,
      name: name,
      phone: phone,
      address: address,
    };

    console.log('DATA --->', data);

    console.log(
      'Data orderItems',
      data.orderItems.map((i) => console.log('i-> ', i)),
    );

    try {
      const response = await fetch(
        `http://localhost:3000/api/${alexStore}/orders/addorder`, // CHECK LOCALHOST NR
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
        const data = await response.json();

        return data;
      } else {
        localStorage.clear();

        throw new Error('Something went wrong with data retrieval!');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
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
  );
};

export default HandleSubmitButton;
