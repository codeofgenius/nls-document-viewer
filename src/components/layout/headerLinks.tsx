'use client';

import { NavbarLink } from 'flowbite-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { title: 'about', href: '/about' },
  { title: 'orange', href: '/orange' },
  { title: 'apple', href: '/apple' },
  { title: 'button', href: '/ui/sample/button' },
  { title: 'link', href: '/ui/sample/link' },
  { title: 'buttonlink', href: '/ui/sample/buttonlink' },
  { title: 'form', href: '/ui/sample/form' },
  { title: 'author', href: '/author' },
  { title: 'book', href: '/book' },
];

export function HeaderLinks() {
  const pathName = usePathname();
  return (
    <>
      {links.map((e: { href: string; title: string }, i: number) => (
        <NavbarLink
          active={pathName === e.href}
          as={Link}
          href={e.href}
          key={i}
        >
          {e.title}
        </NavbarLink>
      ))}
    </>
  );
}
