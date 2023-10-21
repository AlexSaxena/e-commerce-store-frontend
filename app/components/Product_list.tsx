'use client'

import Image from 'next/image';
import Modal from './productmodal'; // Make sure to import the correct Modal component
import { Product } from '@prisma/client';
import AddToCart from './addToCart';
import { useEffect, useState } from 'react';



export default function Product_list() {
  const STORE_ID = "4d1875a7-1a5a-42d1-a9c1-ffa1b78bba20"; // storeID from Hakim_livs
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(
          `https://e-commerce-store-dashboard.vercel.app/api/${STORE_ID}/products`,
          // `http://localhost:3001/api/${STORE_ID}/products`, // CHECK HOST NR
          {
            method: 'GET',
          },
        );
        if (response.ok) {
          const productsData = await response.json();
          setProducts(productsData);
        } else {
          console.error('Failed to fetch Products.');
        }
      } catch (error) {
        console.error('Error fetching Products:', error);
      }
    }
    fetchProducts();
  }, [products]);

  
  ///// OLD
  // const products = await prisma.product.findMany({
  //   where: {
  //     storeId: '4d1875a7-1a5a-42d1-a9c1-ffa1b78bba20',
  //   },
  // });

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
              {Number(product.price).toFixed(2)} kr
            </p>
            <small className="text-slate-400">
              {product.weight} g
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
