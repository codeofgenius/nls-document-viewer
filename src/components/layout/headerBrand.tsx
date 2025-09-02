'use client';

import { NavbarBrand } from 'flowbite-react';
import Image from 'next/image';

import logo from '@/assets/image/vercel.svg';
import { APP_NAME } from '@/lib/constant';

export function HeaderBrand() {
  return (
    <NavbarBrand className="md:order-1" href="/">
      <Image
        alt="App Logo"
        className="mr-3 w-10 sm:h-10 invert dark:invert-0"
        height={20}
        src={logo}
        width={20}
      />
      <span className="self-center text-xl font-semibold whitespace-nowrap">
        {APP_NAME}
      </span>
    </NavbarBrand>
  );
}
