'use client';

import { Zap } from 'lucide-react';
import { useContext } from 'react';

import { CardStat } from '@/components/card-stat';
import { DashboardContext } from '@/providers/dashboard-provider';

export function SavedElectricityStat() {
  const { netMeteredKwhSum } = useContext(DashboardContext);

  return (
    <CardStat
      title='Energia Compensada'
      highlight={`${netMeteredKwhSum} kWh`}
      description='Total de leituras no período'
      icon={Zap}
    />
  );
}
