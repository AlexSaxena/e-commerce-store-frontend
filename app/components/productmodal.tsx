// src/Modal.server.js
"use client";
import { useState } from 'react';
import { Product } from '@prisma/client';

interface ModalProps {
  product: Product;
}

export default function Modal({ product }: ModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDescOpen, setIsDescOpen] = useState(false)

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
    setIsDescOpen(!isDescOpen)
  }

  const onBuy = () => {
    console.log('Lagt i varukorg')
  }

  return (
    <>
      <button onClick={openModal}>Mer Info</button>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50"></div> {/* Backdrop overlay */}
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 h-2/4 relative z-10 text-black">
            <button onClick={closeModal} className="absolute top-2 right-2">
              X
            </button>
            <div className="flex">
              <div className="w-1/2">
                <img src={product.imageUrl} alt="Image" />
              </div>
              <div className="w-1/2 p-4 flex items-center flex-col">
                <h3 className="text-xl font-semibold">{product.name}</h3>
                  <div className='flex flex-col'>
                    <p>{product.weight.toString()} ml</p>
                    <p>{product.price.toString()} kr</p>
                  </div>
                <button className="bg-purple-500 text-white px-4 py-2 rounded-full mt-32 w-3/4"
                onClick={onBuy}
                >
                  Köp
                </button>
              </div>
            </div>
            <div className='mt-4'>
              <button onClick={toggleDescription}
              className="text-blue-500 hover:underline"
              >
                {isDescOpen ? 'Hide Description' : 'Show Description'}
              </button>
              {isDescOpen && (
                <p className='mt-4'>
                  Description
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
