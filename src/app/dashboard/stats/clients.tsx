'use client';

import { Users } from 'lucide-react';
import { useContext } from 'react';

import { CardStat } from '@/components/card-stat';
import { DashboardContext } from '@/providers/dashboard-provider';

export function ClientsStat() {
  const { totalClients } = useContext(DashboardContext);

  return (
    <CardStat
      title='Total Clientes'
      highlight={`+${totalClients}`}
      description='Clientes cadastrados'
      icon={Users}
    />
  );
}
