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
        <div className="flex flex-row-reverse gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <input
            id="search"
            className="search flex h-8"
            type="text"
            placeholder="Sök jalla"
          />
        </div>
        <div className="flex flex-row gap-8 mr-4">
          <Link href="/kontakt">Kontakt</Link>

          <Link href="/om-hakim-livs">Hakims Livs</Link>

          <Link href="/checkout">Varukorg</Link>
        </div>
      </div>
    </nav>
  );
}
