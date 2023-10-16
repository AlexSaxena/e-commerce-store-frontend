import { create } from 'zustand';
import { Product } from '@prisma/client';
import { Decimal } from 'decimal.js';

interface CartItem extends Product {
  name: string;
  quantity: Decimal;
  imageUrl: string;
}

interface State {
  cart: CartItem[];
  totalItems: number;
  totalPrice: number;
}

interface Actions {
  addToCart: (Item: Product) => void;
  removeFromCart: (Item: Product) => void;
}

const INITIAL_STATE: State = {
  cart: [],
  totalItems: 0,
  totalPrice: 0,
};

export const useCartStore = create<State & Actions>((set, get) => {
  let initialCart = INITIAL_STATE.cart;
  if (typeof window !== 'undefined') {
    const savedCart = localStorage.getItem('cart');
    initialCart = savedCart ? JSON.parse(savedCart) : INITIAL_STATE.cart;
  }

  return {
    cart: initialCart,
    totalItems: INITIAL_STATE.totalItems,
    totalPrice: INITIAL_STATE.totalPrice,
    addToCart: (product) => {
      const cart = get().cart;
      const cartItem = cart.find((item) => item.id === product.id);

      if (cartItem) {
        const updatedCart = cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: new Decimal(item.quantity).plus(1) }
            : item,
        );
        set({
          ...get(),
          cart: updatedCart,
          totalItems: get().totalItems + 1,
          totalPrice: get().totalPrice + Number(product.price),
        });
        if (typeof window !== 'undefined') {
          localStorage.setItem('cart', JSON.stringify(get().cart));
        }
      } else {
        const updatedCart = [...cart, { ...product, quantity: new Decimal(1) }];
        set({
          ...get(),
          cart: updatedCart,
          totalItems: get().totalItems + 1,
          totalPrice: get().totalPrice + Number(product.price),
        });
      }
      localStorage.setItem('cart', JSON.stringify(get().cart));
    },
    removeFromCart: (product) => {
      set({
        ...get(),
        cart: get().cart.filter((item) => item.id !== product.id),
        totalItems: get().totalItems - 1,
        totalPrice: get().totalPrice - Number(product.price),
      });
      localStorage.setItem('cart', JSON.stringify(get().cart));
    },
  };
});
