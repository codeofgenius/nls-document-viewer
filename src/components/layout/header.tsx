import { Navbar, NavbarCollapse, NavbarToggle } from 'flowbite-react';

import { AvatarDrawer } from '@/components/layout/headerAvatar';
import { HeaderBrand } from '@/components/layout/headerBrand';
import { HeaderLinks } from '@/components/layout/headerLinks';
import { ThemeModeSelector } from '@/components/layout/themeModeSelector';

export function Header() {
  return (
    <Navbar className="sticky top-0 z-10" color="main" fluid rounded>
      <HeaderBrand />
      <div className="flex gap-2 md:order-3">
        <NavbarToggle />
        <ThemeModeSelector />
        <AvatarDrawer />
      </div>
      <NavbarCollapse className="me-2 md:order-2 md:me-3 md:grow-1 md:justify-items-end">
        <HeaderLinks />
      </NavbarCollapse>
    </Navbar>
  );
}
