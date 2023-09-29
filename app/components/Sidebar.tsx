import Link from 'next/link'
import React from 'react'

export default function Sidebar(){
    return(
        <aside role='Sidebar' style={{
            border: 'solid 1px blue'
          }}>
            <ul>
                <li><Link href="/" style={{color: "black"}}>Hem</Link></li>
                <li> <Link href="/" style={{color: "black"}}>Mat</Link></li>
                <li><Link href="/" style={{color: "black"}}> Erbjudanden</Link></li>
                <li> <Link href="/" style={{color: "black"}}>Om Oss</Link></li>
            </ul>
        </aside>
    )
}