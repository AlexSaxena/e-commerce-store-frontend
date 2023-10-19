'use client';
import { Product } from '@prisma/client';
import { useCartStore } from './store/cartStore';
import { toast } from 'react-toastify';

interface ModalProps {
  product: Product;
}

export default function AddToCart({ product }: ModalProps) {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleClick = () => {
    addToCart(product);
    toast.success('Product added to cart', {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="mt-4 mb-4 align-bottom w-28 bg-transparent hover:bg-purple-800 text-purple-800 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded"
      >
        Köp
      </button>
    </>
  );
}
