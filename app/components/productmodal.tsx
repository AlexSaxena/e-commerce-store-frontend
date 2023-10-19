// src/Modal.server.js
'use client';
import Image from 'next/image';
import { useState } from 'react';
import { Product } from '@prisma/client';
import { useCartStore } from './store/cartStore';
import { toast } from 'react-toastify';

interface ModalProps {
  product: Product;
}

export default function Modal({ product }: ModalProps) {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleClick = () => {
    addToCart(product);
    toast.success('Product added to cart');
  };

  const [isOpen, setIsOpen] = useState(false);
  const [isDescOpen, setIsDescOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    // Disable body scrolling when the modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsOpen(false);
    // Enable body scrolling when the modal is closed
    document.body.style.overflow = 'auto';
  };

  const toggleDescription = () => {
    setIsDescOpen(!isDescOpen);
  };

  return (
    <>
      <button onClick={openModal} className='mt-4 mb-4 align-bottom w-28 bg-transparent hover:bg-purple-800 text-purple-800 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded'>Mer Info</button>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          {/* Backdrop overlay */}
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 h-2/4 relative z-10 text-black">
            <button onClick={closeModal} className="absolute top-2 right-2">
              X
            </button>
            <div className="flex">
              <div className="w-1/2">
              <Image
              src={product.imageUrl}
              width={208}
              height={208}
              alt={product.description}
              className="mt-6 mb-4 hover:scale-110 transition duration-500 cursor-pointer"
            />
              </div>
              <div className="w-1/2 p-4 flex items-center flex-col">
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <div className="flex flex-col">
                  <small className='text-slate-400'>Vikt: {product.weight.toString()} g</small>
                  <p>{product.price.toString()} kr</p>
                </div>
                <button
                  className="bg-purple-500 text-white px-4 py-2 rounded-full mt-32 w-3/4"
                  onClick={handleClick}
                >
                  Lägg till i varukorg
                </button>
              </div>
            </div>
            <div className="mt-4">
              <h2 className='font-bold underline'>Beskrivning</h2>
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
