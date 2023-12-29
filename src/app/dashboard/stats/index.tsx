'use client';

import { useContext } from 'react';

import { ClientsStat } from '@/app/dashboard/stats/clients';
import { ElectricityBillsStat } from '@/app/dashboard/stats/electricity-bills';
import { SavedElectricityStat } from '@/app/dashboard/stats/saved-electricity';
import { SavedMoneyStat } from '@/app/dashboard/stats/saved-money';
import { DashboardContext } from '@/providers/dashboard-provider';

export function OverviewStats() {
  const { filter } = useContext(DashboardContext);

  return (
    <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
      <SavedMoneyStat />
      <SavedElectricityStat />
      <ClientsStat />
      <ElectricityBillsStat />
    </div>
  );
}
