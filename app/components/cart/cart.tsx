'use client';
import Decimal from 'decimal.js';
import { useCartStore } from '../store/cartStore';
import Image from 'next/image';
import { useState } from 'react';

export default function Cart() {
  const [itemCount, setItemCount] = useState(1);
  // Get the cart status using the hook useCartStore, which gives us access to the cart status of the store.
  const cart = useCartStore((state) => state.cart);

  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const handlePlus = (product: any) => {
    product.quantity = new Decimal(product.quantity).add(1).toNumber();
    setItemCount(itemCount + 1);

    // Update the totalItems in the store
    useCartStore.setState({
      totalItems: useCartStore.getState().totalItems + 1,
    });
  };

  const handleMinus = (product: any) => {
    if (product.quantity > 0) {
      product.quantity = new Decimal(product.quantity).minus(1).toNumber();
      setItemCount(itemCount - 1);

      // Update the totalItems in the store
      useCartStore.setState({
        totalItems: useCartStore.getState().totalItems - 1,
      });
    }
  };

  //Total number of items in the cart
  const totalItems = useCartStore((state) => state.totalItems);

  // Calculate the total price of the products in the cart by adding the prices of each product multiplied by its quantity.
  const total = cart.reduce(
    (acc, product) => acc + Number(product.price) * Number(product.quantity),
    0,
  );

  return (
    <div>
      {cart &&
        cart.map((product) => (
          <div
            key={product.id}
            className="flex justify-between flex-1 border-t border-b"
          >
            <div className="mt-2 flex flex-col justify-center">
              <Image
                src={product.imageUrl}
                className="h-16 w-16 "
                alt={product.description}
                width={200}
                height={200}
              />
              <p className="mt-2">{product.name}</p>
            </div>
            <div className="flex flex-col ml-4 mt-4 mb-4">
              <button
                className="border border-slate-400"
                onClick={() => {
                  handlePlus(product);
                }}
              >
                +
              </button>
              <button
                className="border border-slate-400"
                onClick={() => handleMinus(product)}
              >
                -
              </button>
              <p>Antal av Vara: {itemCount}</p>
              <button
                className="bg-red-600 px-4 rounded-xl border-2 text-m hover:bg-red-800 hover:text-white mt-4"
                onClick={() => removeFromCart(product)}
              >
                Tabort produkt
              </button>
            </div>
          </div>
        ))}
      <div className="flex flex-col">
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-bold">Antal Varor:</span>
          <span className="text-xl font-bold">{totalItems}</span>
        </div>
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-bold">TotalBelopp:</span>
          <span className="text-xl font-bold">{total.toFixed(2)} kr</span>
        </div>
      </div>
    </div>
  );
}
