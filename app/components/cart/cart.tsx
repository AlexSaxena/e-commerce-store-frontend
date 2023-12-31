'use client';
import Decimal from 'decimal.js';
import { useCartStore } from '../store/cartStore';
import Image from 'next/image';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Cart() {
  const router = useRouter()
  // Get the cart status using the hook useCartStore, which gives us access to the cart status of the store.
  const cart = useCartStore((state) => state.cart);
  const addToCart = useCartStore((state) => state.addToCart)
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const removeOneFromCart = useCartStore((state) => state.removeOneFromCart)

  useEffect(() => {
    if(cart.length === 0) {
      router.push('/')
    }
  }, [cart])

  const handlePlus = (product: any) => {
    addToCart(product)
    useCartStore.setState((state) => {
      const updatedCart = state.cart.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity,
            }
          : item,
      );
      return { cart: updatedCart, totalItems: state.totalItems + 1 };
    });
  };

  const handleMinus = (product: any) => {
    removeOneFromCart(product)
    useCartStore.setState((state) => {
      const updatedCart = state.cart.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: new Decimal(item.quantity)
                .minus(1)
                .greaterThanOrEqualTo(1)
                ? item.quantity
                : 1, // Ensure the quantity doesn't go below 1
            }
          : item,
      );

      const newTotalItems = updatedCart.reduce(
        (acc, product) => acc + Number(product.quantity),
        0,
      );

      return {
        cart: updatedCart,
        totalItems: newTotalItems >= 0 ? newTotalItems : 0,
      };
    });
  };
  
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0)

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
              <p className="mt-2">{Number(product.price).toFixed(2)} kr/st</p>
            </div>
            <div className="flex flex-col ml-4 mt-4 mb-4">
              <button
                className="border border-slate-400 bg-blue-500 text-white rounded-lg px-3 py-1 hover:bg-blue-700 transition duration-500 ease-in-out"
                onClick={() => {
                  handlePlus(product);
                }}
              >
                +
              </button>
              <button
                className="border border-slate-400 bg-yellow-500 text-white rounded-lg px-3 py-1 hover:bg-yellow-700 transition duration-500 ease-in-out"
                onClick={() => handleMinus(product)}
              >
                -
              </button>
              <p>Antal av Vara: {Number(product.quantity)}</p>
            
              <button
                className="bg-red-600 px-4 rounded-full border-none text-white mt-4 transition duration-500 ease-in-out shadow-lg hover:bg-red-800 hover:text-white transform "
                onClick={() => removeFromCart(product)}
              >
                Tabort produkt
              </button>
            </div>
          </div>
        ))}
  
      <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-bold">Antal Produkter:</span>
          <span className="text-xl font-bold">{totalQuantity}</span>
      </div>
      <div className="flex justify-between items-center mt-4">
        <span className="text-lg font-bold">Totalbelopp:</span>
        <span className="text-xl font-bold">{total.toFixed(2)} kr</span>
      </div>
    </div>
  );
}
