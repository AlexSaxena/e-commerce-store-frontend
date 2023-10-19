import Image from 'next/image';
import prisma from '../utils/connectdb';
import Modal from './productmodal'; // Make sure to import the correct Modal component
import AddToCart from './addToCart';

export default async function Product_list() {
  const products = await prisma.product.findMany({
    where: {
      storeId: '4d1875a7-1a5a-42d1-a9c1-ffa1b78bba20',
    },
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
              {product.price?.toFixed(2)} kr
            </p>
            <small className="text-slate-400">
              {product.weight.toString()}g
            </small>

            <div className="flex justify-between w-52">
              <Modal product={product} />
              <AddToCart product={product} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
