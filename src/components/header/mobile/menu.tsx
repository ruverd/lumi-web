'use client';

import { Menu } from 'lucide-react';
import { useContext } from 'react';

import { MenuNavItem } from '@/components/header/mobile/menu-nav-item';
import { navItems } from '@/components/sidebar/constant-nav-items';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { SheetContext } from '@/providers/sheet-provider';

export function MobileMenu() {
  const { show, setShow } = useContext(SheetContext);

  return (
    <Sheet open={show} onOpenChange={setShow}>
      <SheetTrigger asChild>
        <Button variant={'ghost'} className='p-0'>
          <Menu size={24} />
        </Button>
      </SheetTrigger>
      <SheetContent side={'left'} className='flex flex-col gap-4'>
        <span className='uppercase text-gray-400 font-bold text-xs ml-6'>
          menu
        </span>
        <ul className='flex w-full flex-col px-2 space-y-4'>
          {navItems.map((item) => (
            <MenuNavItem key={item.title} item={item} />
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}
