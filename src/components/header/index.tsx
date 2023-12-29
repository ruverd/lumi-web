'use client';

import { HeaderDesktop } from '@/components/header/desktop';
import { HeaderMobile } from '@/components/header/mobile';

export function Header() {
  return (
    <header className='px-4 h-[62px] flex justify-center z-30 border-b border-gray-900 w-full sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/6'>
      <HeaderMobile />
      <HeaderDesktop />
    </header>
  );
}
