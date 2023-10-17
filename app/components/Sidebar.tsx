import Link from 'next/link';
import React from 'react';
import prisma from '../utils/connectdb';

export default async function Sidebar() {
  const categorys = await prisma.category.findMany({
    where:{
      storeId: "4d1875a7-1a5a-42d1-a9c1-ffa1b78bba20"
    }
  });

  return (
    <aside
      role="Sidebar"
      className="	flex text-slate-800 text-2xl font-normal "
    >
      <ul className=" flex flex-col space-y-8 mt-4">
        {categorys.map((category) => (
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
