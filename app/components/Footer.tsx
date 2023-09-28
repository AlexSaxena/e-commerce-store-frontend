import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer
    style={{
        border: 'solid 1px red',
        marginTop: 1
    }}>
        <h1>Footer</h1>
        <Link href="/kundservice">Kundservice</Link>
    </footer>
  )
}
