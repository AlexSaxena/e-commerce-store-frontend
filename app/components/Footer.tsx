import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/assets/logos/logo-hakim-01.png';

export default function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link href="/" className="flex items-center mb-4 sm:mb-0">
            <Image
              src={logo}
              width={108}
              height={108}
              alt="Hakims logo"
              className="h-8 mr-3"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Hakim Livs
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link href="#" className="mr-4 hover:underline md:mr-6 ">
                Om Oss
              </Link>
            </li>
            <li>
              <Link href="#" className="mr-4 hover:underline md:mr-6">
                Vår Vision
              </Link>
            </li>
            <li>
              <Link href="#" className="mr-4 hover:underline md:mr-6 ">
                Kategorier
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Kontakta Oss
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{' '}
          <Link href="/" className="hover:underline">
            HakimLivs™
          </Link>
          . Alla rättigheter inte förbehållna.
        </span>
      </div>
    </footer>
  );
}
