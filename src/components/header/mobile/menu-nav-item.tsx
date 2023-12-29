'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { NavItem } from '@/components/sidebar/constant-nav-items';
import { SheetContext } from '@/providers/sheet-provider';
import { cn } from '@/utils/style';
import { useContext } from 'react';

interface MenuNavItemProps {
  item: NavItem;
}

export function MenuNavItem({ item }: MenuNavItemProps) {
  const pathname = usePathname();
  const { setShow } = useContext(SheetContext);

  const Icon = item.icon;

  const isActive = pathname === item.path;

  return (
    <li className='list-none' key={item.title}>
      <Link
        href={item.path}
        onClick={() => setShow(false)}
        className={cn(
          'flex items-center gap-4 text-gray-300 hover:text-white p-4 rounded-md transition-colors duration-200 ease-in-out hover:bg-gray-900',
          {
            'bg-gray-900': isActive,
          }
        )}
      >
        <div className='w-6'>
          <Icon />
        </div>
        <span className='font-semibold truncate'>{item.title}</span>
      </Link>
    </li>
  );
}
