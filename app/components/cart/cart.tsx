'use client';
import { useCartStore } from '../store/cartStore';

export default function Cart() {
  // Get the cart status using the hook useCartStore, which gives us access to the cart status of the store.
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  // Calculate the total price of the products in the cart by adding the prices of each product multiplied by its quantity.
  const total = cart.reduce(
    (acc, product) => acc + Number(product.price) * Number(product.quantity),
    0,
  );

  return (
    <section>
      <ul>
        {cart &&
          cart.map((product) => (
            //  <CartItem key={product.id} product={product} />
            <div key={product.id} className="flex justify-between w-96 flex-1 border-t border-b">
              <div className='mt-2 flex flex-col justify-center'>
                <img src={product.imageUrl} className="h-16 w-16 " />
                <p className='mt-2'>{product.name}</p>
              </div>
              <div className="flex flex-col mt-4 mb-4">
                <button onClick={() => removeFromCart(product)}>
                  Remove From Cart
                </button>
                <button className="border border-slate-400">+</button>
                <button className="border border-slate-400">-</button>
              </div>
            </div>
          ))}
      </ul>
      <div className="flex justify-between items-center mt-4">
        <span className="text-lg font-bold">Total:</span>
        <span className="text-xl font-bold">${total.toFixed(2)}</span>
      </div>
    </section>
  );
}
