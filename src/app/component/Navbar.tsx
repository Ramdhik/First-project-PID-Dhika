import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from '@nextui-org/react';
import Image from 'next/image';

export default function NavbarComponent() {
  return (
    <Navbar isBordered>
      <NavbarBrand>
        <Link href="/" color="foreground">
          <Image src="/logoreal.png" alt="Logo" width={150} height={150} />
        </Link>
      </NavbarBrand>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link className="bg-gradient-to-t from-pink-500 to-yellow-500 text-transparent bg-clip-text" href="/login">
            Login
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} className="bg-gradient-to-tl from-pink-500 to-yellow-500 " href="/register" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
