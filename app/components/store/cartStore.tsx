import { create } from 'zustand';
import { Product, OrderItem } from '@prisma/client';

interface CartItem extends Product {
  name: string;
  quantity: number;
  imageUrl: string;
  orderItems: OrderItem[];
}

interface State {
  cart: CartItem[];
  totalItems: number;
  totalPrice: number;
}

interface Actions {
  addToCart: (Item: Product) => void;
  removeFromCart: (Item: Product) => void;
  removeOneFromCart: (Item: Product) => void;
}

const INITIAL_STATE: State = {
  cart: [],
  totalItems: 0,
  totalPrice: 0,
};

const orderId = Math.random().toString(36).substring(2, 15);

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

      const newOrderItem: OrderItem = {
        id: product.id,
        orderId: orderId,
        productId: product.id,
        quantity: 1
      };

      if (cartItem) {
        const updatedCart = cart.map((item) =>  
          item.id === product.id ? {
            ...item, quantity: item.quantity + 1,
            orderItems: item.orderItems.map((orderItem) => 
              orderItem.productId === product.id ? {
                ...orderItem, quantity: orderItem.quantity + 1
              } : orderItem
            )
          }
          : item
        )

        set({
          ...get(),
          cart: updatedCart,
          totalItems: get().totalItems + 1,
          totalPrice: get().totalPrice + Number(product.price),
        });
        if (typeof window !== 'undefined') {
          localStorage.setItem('cart', JSON.stringify(updatedCart));
        }
      } else {
        const updatedCart = [
          ...cart,
          { ...product, quantity: 1, orderItems: [newOrderItem] },
        ];
        set({
          ...get(),
          cart: updatedCart,
          totalItems: get().totalItems + 1,
          totalPrice: get().totalPrice + Number(product.price),
        });
        localStorage.setItem('cart', JSON.stringify(updatedCart));
      }
    },
    removeFromCart: (product) => {
      set({
        ...get(),
        cart: get().cart.filter((item) => item.id !== product.id),
        totalItems: get().totalItems - 1,
        totalPrice: get().totalPrice - Number(product.price),
      });
      if (typeof window !== 'undefined') {
        localStorage.setItem('cart', JSON.stringify(get().cart));
      }
    },  
    removeOneFromCart: (product) => {
      const cart = get().cart;
      const cartItem = cart.find((item) => item.id === product.id);
    
      if (cartItem && cartItem.quantity > 1) {
        const updatedCart = cart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity - 1,
                orderItems: item.orderItems.map((orderItem) => 
                  orderItem.productId === product.id
                  ? { ...orderItem, quantity: orderItem.quantity - 1}
                  : orderItem
                )
              }
            : item,
        );
    
        set({
          ...get(),
          cart: updatedCart,
          totalItems: get().totalItems - 1,
          totalPrice: get().totalPrice - Number(product.price),
        });
    
        if (typeof window !== 'undefined') {
          localStorage.setItem('cart', JSON.stringify(updatedCart));
        }
      } else if (cartItem && cartItem.quantity === 1) {
        // If the quantity is 1, remove the item from the cart
        get().removeFromCart(product);
      }
    },
  };
});
