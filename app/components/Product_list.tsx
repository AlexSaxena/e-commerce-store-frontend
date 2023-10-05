import Link from 'next/link';
import Image from 'next/image';
import prisma from '../utils/connectdb';

export default async function Product_list() {
  const products = await prisma.product.findMany();

  return (
    <div className="flex flex-wrap justify-center gap-8 text-center w-5/6 ">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex basis-1/5 flex-col items-center hover:border-purple-800 border-solid border-2 rounded"
        >
          <Link href="/#" className="flex flex-col items-center">
            <Image
              src={product.imageUrl}
              width={208}
              height={208}
              alt={product.description}
              className="mt-6 mb-4 min-h-208 hover:scale-110 transition duration-500 cursor-pointer"
            />
            <h2 className="text-xl h-16 text-black">{product.name}</h2>
            <p className="text-2xl h-8 text-red-600 font-black">
              {product.price?.toNumber()} kr
            </p>
            <small className="text-slate-400">{product.weight}</small>
          </Link>
          <button className="mt-4 mb-4 align-bottom w-28 bg-transparent hover:bg-purple-800 text-purple-800 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded">
            Köp
          </button>
        </div>
      ))}
    </div>
  );
}
