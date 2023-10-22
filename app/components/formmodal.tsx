// src/Modal.server.js
'use client';
import { useState } from 'react';
import ModalFormComponent from './modalFormComponent';



export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <>
      <button
        onClick={openModal}
        className="mt-4 mb-4 align-bottom w-2/4 bg-transparent hover:bg-purple-800 text-purple-800 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded"
      >
        Fyll I Uppgifter
      </button>
      {isOpen && (
        <>
            <ModalFormComponent closeModal={closeModal}/>
        </>
      )}
    </>
  );
}
