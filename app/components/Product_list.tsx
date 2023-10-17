import Image from 'next/image';
import prisma from '../utils/connectdb';
import Modal from './productmodal'; // Make sure to import the correct Modal component
import AddToCart from './addToCart';

export default async function Product_list() {
  
  const products = await prisma.product.findMany({
    where:{
      storeId: "7ea880c8-fc45-4cb4-b8a2-2e2945e22c01"
    }
  });

  return (
    <div className="flex flex-wrap justify-center gap-8 text-center w-5/6">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex basis-1/5 flex-col items-center hover:border-purple-800 border-solid border-2 rounded"
        >
          <div className="flex flex-col items-center w-72">
            <Image
              src={product.imageUrl}
              width={208}
              height={208}
              alt={product.description}
              className="mt-6 mb-4 hover:scale-110 transition duration-500 cursor-pointer"
            />

            <h2 className="text-xl h-16 text-black mx-4 ">{product.name}</h2>

            <p className="text-2xl h-8 text-red-600 font-black min-w-fit">
              {product.price?.toNumber()} kr
            </p>
            <small className="text-slate-400">
              {product.weight.toString()}g
            </small>

            <div className="flex justify-between w-52">
              <button className="mt-4 mb-4 align-bottom w-28 bg-transparent hover:bg-purple-800 text-purple-800 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded">
                <Modal product={product} />
              </button>

              <AddToCart product={product} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
