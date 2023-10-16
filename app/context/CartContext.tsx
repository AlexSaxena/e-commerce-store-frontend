"use client";
import { Product } from '@prisma/client';

// cart.ts (Cart store)
import { createContext, useContext, useReducer, ReactNode, Dispatch, useEffect } from 'react';

interface CartState {
  cart: Product[];
}

// Define the actions that can be dispatched
type CartAction = { type: 'ADD_TO_CART'; payload: Product } |{type: 'INITIALIZE_CART'; payload: CartState};

const CartContext = createContext<{ cartState: CartState; dispatch: Dispatch<CartAction> } | undefined>(
  undefined
);

// Define your cart reducer
const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART':
        const updatedCart = [...state.cart, action.payload]

        localStorage.setItem('cart', JSON.stringify(updatedCart))

        return {cart: updatedCart}
    default:
        return state
  }
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    
    const storedCart = localStorage.getItem('cart');
    const initialCartState = storedCart ? { cart: JSON.parse(storedCart)} : { cart: [] };
    const [cartState, dispatch] = useReducer(cartReducer, initialCartState);
  
    useEffect(() => {
        // Save the cart state to localStorage whenever it changes
        localStorage.setItem('cart', JSON.stringify(cartState.cart));
      }, [cartState.cart]);
  

  
    return <CartContext.Provider value={{ cartState, dispatch }}>{children}</CartContext.Provider>;
  };
  
  

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};