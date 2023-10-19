import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../../public/assets/logos/logo-hakim-01.png';

export default function Navbar() {
  return (
    <nav className="flex flex-row justify-between bg-slate-200">
      <div className="flex w-full justify-between items-center">
        <Link href="/">
          <Image
            src={logo}
            width={208}
            height={208}
            alt="Hakims logo"
            className=""
          />
        </Link>
        <div className="flex flex-row gap-8 mr-8">
          <Link href="/checkout">Varukorg</Link>
        </div>
      </div>
    </nav>
  );
}
