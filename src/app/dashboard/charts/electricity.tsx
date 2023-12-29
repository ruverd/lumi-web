'use client';

import { DashboardContext } from '@/providers/dashboard-provider';
import { useContext } from 'react';
import {
  Bar,
  BarChart,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

export function ChartElectricity() {
  const { netMeteredKwhSum, electricityKwhSum } = useContext(DashboardContext);

  const data = [
    {
      name: 'Gastos em kWh',
      consumida: electricityKwhSum,
      compensada: netMeteredKwhSum,
    },
  ];

  return (
    <ResponsiveContainer width='100%' height={350}>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis
          dataKey='name'
          stroke='#D1D5DB'
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke='#D1D5DB'
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value} kWh`}
        />
        <Tooltip
          cursor={{ fill: 'transparent' }}
          formatter={(value) => [`R$ ${value}`]}
          labelStyle={{ color: '#312E81' }}
          labelFormatter={(label) => `${label}`}
        />
        <Legend />
        <Bar
          dataKey='consumida'
          fill='#0284c7'
          activeBar={<Rectangle fill='#0284c7' stroke='transparent' />}
        />
        <Bar
          dataKey='compensada'
          fill='#059669'
          activeBar={<Rectangle fill='#059669' stroke='transparent' />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
