import Link from 'next/link'
import React from 'react'
import prisma from "../utils/connectdb";

export default async function Sidebar(){

    const categorys = await prisma.category.findMany();

    return(
        <aside role='Sidebar' style={{
            border: 'solid 1px blue'
          }}>
            <ul>
                <li><Link href='/#' className=''>Erbjudanden</Link></li>
                {categorys.map((category) => (
                    <li key={category.id}><Link href="/#" className=''>{category.name}</Link></li>
                ))}
            </ul>
        </aside>
    )
}