import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/assets/logos/logo-hakim-01.png';

export default function Footer() {
  return (
    <footer className="bg-black">
      <h1>Footer</h1>
      <Link href="/kundservice">Kundservice</Link>
    </footer>
  );
}
