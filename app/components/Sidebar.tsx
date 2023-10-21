'use client'
import Link from 'next/link';
import React from 'react';
import { Category } from '@prisma/client';
import { useEffect, useState } from 'react';

export default function Sidebar() {

  const STORE_ID = "4d1875a7-1a5a-42d1-a9c1-ffa1b78bba20"; // storeID from Hakim_livs
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await fetch(
          `https://e-commerce-store-dashboard.vercel.app/api/${STORE_ID}/categories`,
          {
            method: 'GET',
          },
        );
        if (response.ok) {
          const categoriesData = await response.json();
          setCategories(categoriesData);
        } else {
          console.error('Failed to fetch Categories.');
        }
      } catch (error) {
        console.error('Error fetching Categories:', error);
      }
    }
    fetchCategories();
  }, [categories]);

  return (
    <aside role="Sidebar" className="	flex text-slate-800 text-2xl font-normal ">
      <ul className=" flex flex-col space-y-8 mt-4">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/category/${category.id}`}
            className="hover:bg-slate-200 w-full "
          >
            <li className="hover:bg-slate-200 w-full pl-4">{category.name}</li>
          </Link>
        ))}
      </ul>
    </aside>
  );
}
