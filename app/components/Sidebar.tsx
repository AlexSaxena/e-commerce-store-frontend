import Link from 'next/link';
import React from 'react';
import prisma from '../utils/connectdb';

export default async function Sidebar() {
  const categorys = await prisma.category.findMany();

  return (
    <aside
      role="Sidebar"
      className="	flex basis-full text-slate-800 text-2xl font-normal "
    >
      <ul className=" flex flex-col space-y-8 w-full">
        <Link href="/#" className="hover:bg-slate-200 w-full">
          <li className="pl-4 mt-4">Erbjudanden</li>
        </Link>

        {categorys.map((category) => (
          <Link href="/#" className="hover:bg-slate-200 w-full ">
            <li key={category.id} className="hover:bg-slate-200 w-full pl-4">
              {category.name}
            </li>
          </Link>
        ))}
      </ul>
    </aside>
  );
}
