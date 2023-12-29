'use client';

import Image from 'next/image';
import Link from 'next/link';

import Logo from '@/assets/logo.svg';
import { MobileMenu } from '@/components/header/mobile/menu';
import { SheetProvider } from '@/providers/sheet-provider';

export function HeaderMobile() {
  return (
    <div className='flex md:hidden justify-between items-center w-full'>
      <Link href='/dashboard'>
        <Image src={Logo} alt='Lumi' />
      </Link>
      <SheetProvider>
        <MobileMenu />
      </SheetProvider>
    </div>
  );
}
