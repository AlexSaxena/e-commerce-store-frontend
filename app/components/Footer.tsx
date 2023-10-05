import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/assets/logos/logo-hakim-01.png';

export default function Footer() {
  return (
    <footer>
      <div>
        <div>
          <img src="" alt="MAYBE Hakim Logo" />
          <ul>
            <li>List Here with Links</li>
            <li>Maybe Home & Contact Us</li>
          </ul>
        </div>
        <hr />
        <span>© 2023 HakimLivs. All Rights Reserved.</span>
      </div>
    </footer>
  );
}
