'use client';

import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, Download } from 'lucide-react';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

const ElectricityBillSchema = z.object({
  id: z.string(),
  clientId: z.string(),
  client: z.object({
    clientNumber: z.string(),
  }),
  fileName: z.string(),
  billTotalAmount: z.coerce.number(),
  refMonth: z.coerce.number(),
  refYear: z.coerce.number(),
  electricityKwh: z.coerce.number(),
  electricityAmount: z.coerce.number(),
  netMeteringKwh: z.coerce.number().nullable(),
  netMeteringAmount: z.coerce.number().nullable(),
  netMeteredKwh: z.coerce.number().nullable(),
  netMeteredAmount: z.coerce.number().nullable(),
  municipalLightingTax: z.coerce.number().nullable(),
});

export type ElectricityBillData = z.infer<typeof ElectricityBillSchema>;
export type ElectricityBill = {
  id: string;
  clientId: string;
  client: {
    clientNumber: string;
  };
  fileName: string;
  billTotalAmount: number;
  refMonth: number;
  refYear: number;
  electricityKwh: number;
  electricityAmount: number;
  netMeteringKwh: number | null;
  netMeteringAmount: number | null;
  netMeteredKwh: number | null;
  netMeteredAmount: number | null;
  municipalLightingTax: number | null;
};

const MONTHS_IN_YEAR = [
  'JAN',
  'FEV',
  'MAR',
  'ABR',
  'MAI',
  'JUN',
  'JUL',
  'AGO',
  'SET',
  'OUT',
  'NOV',
  'DEZ',
];

export const electricityBillColumns: ColumnDef<
  ElectricityBillData & {
    clientNumber: string;
  }
>[] = [
  {
    accessorKey: 'clientNumber',
    enableColumnFilter: true,
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          N Cliente
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => {
      const electricityBill = row.original;

      const clientNumber = electricityBill.client.clientNumber;

      return (
        <div className='flex gap-2 items-center'>
          <span className='truncate'>{clientNumber}</span>
        </div>
      );
    },
  },
  {
    accessorKey: 'role',
    header: 'Mês/Ano',
    cell: ({ row }) => {
      const electricityBill = row.original;

      const month = MONTHS_IN_YEAR[electricityBill.refMonth - 1];
      const year = electricityBill.refYear;
      const formattedDate = `${month}/${year}`;

      return <span>{formattedDate}</span>;
    },
  },
  {
    id: 'actions',
    cell: async ({ row }) => {
      const electricityBill = row.original;

      const url = `${process.env.NEXT_PUBLIC_API_URL}/${electricityBill.fileName}`;

      return (
        <div className='flex justify-end'>
          <Link href={`${url}`} target='_blank'>
            <Button variant='ghost' size={'icon'}>
              <Download size={16} />
            </Button>
          </Link>
        </div>
      );
    },
  },
];
