'use client';

import { FileSpreadsheet } from 'lucide-react';
import { useContext } from 'react';

import { CardStat } from '@/components/card-stat';
import { DashboardContext } from '@/providers/dashboard-provider';

export function ElectricityBillsStat() {
  const { totalElectricityBills } = useContext(DashboardContext);

  return (
    <CardStat
      title='Total Faturas'
      highlight={`+${totalElectricityBills}`}
      description='Faturas com compensações'
      icon={FileSpreadsheet}
    />
  );
}
