'use client';

import { useContext } from 'react';

import { ChartElectricity } from '@/app/dashboard/charts/electricity';
import { ChartMonetary } from '@/app/dashboard/charts/monetary';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DashboardContext } from '@/providers/dashboard-provider';

export function OverviewCharts() {
  const { filter } = useContext(DashboardContext);

  return (
    <div className='grid gap-4 grid-cols-1 md:grid-cols-2'>
      <Card>
        <CardHeader>
          <CardTitle>Valor gasto x economia R$</CardTitle>
        </CardHeader>
        <CardContent className='pl-2'>
          <ChartMonetary />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Consumo x Compensação kWh</CardTitle>
        </CardHeader>
        <CardContent className='pl-2'>
          <ChartElectricity />
        </CardContent>
      </Card>
    </div>
  );
}
