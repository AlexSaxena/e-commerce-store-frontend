import React from 'react';
import Cart from './cart/cart';
import { useSubmitOrder } from '../hooks/useSubmitOrder';
interface ModalProps {
  closeModal: () => void;
}

function ModalFormComponent({ closeModal }: ModalProps) {
  const { name, setName, phone, setPhone, address, setAddress, handleSubmit } =
    useSubmitOrder();

  const handleFormSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    await handleSubmit(e);

    closeModal();
    window.location.href = '/';
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50 "></div>
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 h-2/4 relative z-10 text-black flex flex-col">
        <button onClick={closeModal} className="absolute top-2 right-2">
          X
        </button>

        <form
          action=""
          className="flex flex-col gap-4 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="">
            <div className='mb-4'>
              <label
                htmlFor="customerName"
                className="block text-sm font-bold text-gray-700"
              >
                Namn:{' '}
              </label>
              <input
                type="text"
                name="customerName"
                id="customerName"
                placeholder="Mitt Namn"
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="customerTel"
                className="block text-gray-700 text-sm font-bold"
              >
                Tel Nr:{' '}
              </label>
              <input
                type="tel"
                name="customerTel"
                id="customerTel"
                placeholder="Mitt Nr.."
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="customerAdress"
                className="block text-sm font-bold text-gray-700 mb-2"
              >
                Adress:{' '}
              </label>
              <input
                type="text"
                name="customerAdress"
                id="customerAdress"
                placeholder="Min Adress"
                onChange={(e) => setAddress(e.target.value)}
                value={address}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

          </div>
        </form>

        <div className="flex-1 overflow-auto">
          <Cart />
        </div>
        <button
          type="submit"
          className="mt-4 mb-4 align-bottom w-28 bg-transparent hover:bg-purple-800 text-purple-800 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded"
          onClick={handleFormSubmit}
        >
          Lägg Order
        </button>
      </div>
    </div>
  );
}

export default ModalFormComponent;
