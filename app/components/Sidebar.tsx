import Link from 'next/link'
import React from 'react'

export default function Sidebar(){
    return(
        <aside role='Sidebar' style={{
            border: 'solid 1px blue'
          }}>
            <ul>
                <li><Link href="/">Hem</Link></li>
                <li> <Link href="/">Mat</Link></li>
                <li><Link href="/">Kaffe</Link></li>
                <li> <Link href="/">Om Oss</Link></li>
            </ul>
        </aside>
    )
}