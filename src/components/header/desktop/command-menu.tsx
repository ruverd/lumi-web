'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { navItems } from '@/components/sidebar/constant-nav-items';
import { Button } from '@/components/ui/button';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';

export function CommandMenu() {
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const navigationCommands = navItems.map((nav) => {
    const Icon = nav.icon;

    return {
      label: nav.title,
      icon: <Icon className='mr-2 h-4 w-4' />,
      onSelect: () => {
        setOpen(false);
        router.push(nav.path);
      },
    };
  });

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();

        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);

    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <>
      <Button
        variant={'outline'}
        size={'sm'}
        onClick={() => setOpen((open) => !open)}
      >
        <p className='text-sm text-muted-foreground'>
          Menu Rápido{' '}
          <kbd className='pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded bg-muted px-1.5 font-mono text-xs font-medium text-muted-foreground opacity-100'>
            <span className='text-sm'>⌘</span>k
          </kbd>
        </p>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder='Digite o que você procura...' />
        <CommandList>
          <CommandEmpty>Nenhum registro encontrado.</CommandEmpty>
          <CommandGroup heading='Menu Rápido'>
            {navigationCommands.map((command, index) => (
              <CommandItem
                key={index}
                className='hover:cursor-pointer'
                onSelect={command.onSelect}
              >
                {command.icon}
                <span>{command.label}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
