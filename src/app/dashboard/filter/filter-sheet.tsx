'use client';

import { Filter } from 'lucide-react';
import { useContext } from 'react';

import { FilterFormCreate } from '@/app/dashboard/filter/filter-form';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { SheetContext } from '@/providers/sheet-provider';

export function FilterDashboardSheet() {
  const { show, setShow } = useContext(SheetContext);

  return (
    <Sheet open={show} onOpenChange={setShow}>
      <SheetTrigger asChild>
        <Button className='space-x-1' variant={'secondary'}>
          <Filter size={16} />
          <span className='hidden md:block'>Filtrar</span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Filtrar por</SheetTitle>
        </SheetHeader>
        <FilterFormCreate />
      </SheetContent>
    </Sheet>
  );
}
