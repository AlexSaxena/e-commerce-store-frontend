'use client';
import Decimal from 'decimal.js';
import { useCartStore } from '../store/cartStore';
import Image from 'next/image';

export default function Cart() {
  // Get the cart status using the hook useCartStore, which gives us access to the cart status of the store.
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const handlePlus = (product: any) => {
    useCartStore.setState((state) => {
      const updatedCart = state.cart.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      );
      return { cart: updatedCart, totalItems: state.totalItems + 1 };
    });
  };

  const handleMinus = (product: any) => {
    useCartStore.setState((state) => {
      const updatedCart = state.cart.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: new Decimal(item.quantity)
                .minus(1)
                .greaterThanOrEqualTo(1)
                ? item.quantity - 1
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
              <p className="mt-2">{Number(product.price)} kr/st</p>
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
              <p>Antal av Vara: {Number(product.quantity)}</p>
              <button
                className="bg-red-600 px-4 rounded-xl border-2 text-m hover:bg-red-800 hover:text-white mt-4"
                onClick={() => removeFromCart(product)}
              >
                Tabort produkt
              </button>
            </div>
          </div>
        ))}
      <div className="flex justify-between items-center mt-4">
        <span className="text-lg font-bold">Antal Produkter:</span>
        <span className="text-xl font-bold">{totalItems}</span>
      </div>
      <div className="flex justify-between items-center mt-4">
        <span className="text-lg font-bold">Totalbelopp:</span>
        <span className="text-xl font-bold">{total.toFixed(2)} kr</span>
      </div>
    </div>
  );
}
