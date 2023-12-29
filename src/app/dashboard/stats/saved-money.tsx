'use client';

import { DollarSign } from 'lucide-react';
import { useContext } from 'react';

import { CardStat } from '@/components/card-stat';
import { DashboardContext } from '@/providers/dashboard-provider';
import { convertCentsToCurrency } from '@/utils/currency';

export function SavedMoneyStat() {
  const { netMeteredAmountSum } = useContext(DashboardContext);

  return (
    <CardStat
      title='Economia Gerada'
      highlight={convertCentsToCurrency(netMeteredAmountSum * -1)}
      description='Total economizado em R$'
      icon={DollarSign}
    />
  );
}
