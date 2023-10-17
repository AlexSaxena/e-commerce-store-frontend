import Image from 'next/image';
import prisma from '../utils/connectdb';
import Modal from './productmodal'; // Make sure to import the correct Modal component

export default async function Product_list() {
  
  const products = await prisma.product.findMany();

  return (
    <div className="flex flex-wrap justify-center gap-8 text-center w-5/6">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex basis-1/5 flex-col items-center hover:border-purple-800 border-solid border-2 rounded"
        >
          <div className="flex flex-col items-center w-72">
            <Image
              src={`https://productimages.motatos.com/MS207196/7-up-90134d9c-9678-4073-947a-b6d1314c5aba.png?tr=n-product&itok=MW3pOGSO`}
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
          
            <button className="mt-4 mb-4 align-bottom w-28 bg-transparent hover:bg-purple-800 text-purple-800 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded">
              {/* Pass imageUrl and description as props to Modal */}
              <Modal product={product}/>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}


