'use client';

import Image from 'next/image';
import Link from 'next/link';

import Logo from '@/assets/logo.svg';
import { CommandMenu } from '@/components/header/desktop/command-menu';
import { MenuNav } from '@/components/header/desktop/menu-nav';

export function HeaderDesktop() {
  return (
    <div className='hidden md:flex justify-between items-center w-full'>
      <div className='flex gap-12 items-center justify-center'>
        <Link href='/dashboard'>
          <Image src={Logo} alt='Lumi' />
        </Link>
        <MenuNav />
      </div>
      <div className='flex gap-2 items-center'>
        <CommandMenu />
      </div>
    </div>
  );
}
