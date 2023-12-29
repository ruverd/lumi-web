'use client';

import { ElectricityBill } from '@/app/electricity-bills/columns';
import {
  ReactNode,
  createContext,
  useCallback,
  useMemo,
  useState,
} from 'react';

interface DashboardContextValues {
  electricityBills: ElectricityBill[];
  electricityAmountSum: number;
  netMeteredAmountSum: number;
  electricityKwhSum: number;
  netMeteredKwhSum: number;
  totalElectricityBills: number;
  totalClients: number;
  filter: {
    clientNumber: string | null;
  };
  changeFilter: (clientNumber: string | null) => void;
}

export const DashboardContext = createContext<DashboardContextValues>(
  {} as DashboardContextValues
);

interface DashboardProviderProps {
  children: ReactNode;
  initialData: {
    electricityBills: ElectricityBill[];
  };
}

export function DashboardProvider({
  children,
  initialData,
}: DashboardProviderProps) {
  const [filter, setFilter] = useState<{ clientNumber: string | null }>({
    clientNumber: null,
  });

  const electricityBills = initialData.electricityBills;

  const changeFilter = useCallback(
    (clientNumber: string | null) => {
      if (clientNumber !== null) {
        const hasClientNumber = electricityBills.some(
          (item) => item.client.clientNumber === clientNumber
        );

        if (!hasClientNumber) {
          throw new Error('Client number not found');
        }
      }

      setFilter({ clientNumber });
    },
    [electricityBills]
  );

  const filteredData = useMemo(() => {
    if (!filter.clientNumber) {
      return electricityBills;
    }

    return electricityBills.filter(
      (item) => item.client.clientNumber === filter.clientNumber
    );
  }, [electricityBills, filter]);

  const totalClients = useMemo(() => {
    const clients = electricityBills.reduce((acc, item) => {
      if (!acc.includes(item.client.clientNumber)) {
        acc.push(item.client.clientNumber);
      }

      return acc;
    }, [] as string[]);

    return clients.length;
  }, [electricityBills]);

  const totalElectricityBills = useMemo(() => {
    return filteredData.length;
  }, [filteredData]);

  const netMeteredAmountSum = useMemo(() => {
    return filteredData.reduce((acc, item) => {
      const amount = item.netMeteredAmount || 0;

      return acc + amount;
    }, 0);
  }, [filteredData]);

  const electricityAmountSum = useMemo(() => {
    return filteredData.reduce((acc, item) => {
      const amount =
        item.electricityAmount +
        (item?.netMeteringAmount || 0) +
        (item?.municipalLightingTax || 0);

      return acc + amount;
    }, 0);
  }, [filteredData]);

  const electricityKwhSum = useMemo(() => {
    return filteredData.reduce((acc, item) => {
      const amount = item.electricityKwh + (item?.netMeteringKwh || 0);

      return acc + amount;
    }, 0);
  }, [filteredData]);

  const netMeteredKwhSum = useMemo(() => {
    return filteredData.reduce((acc, item) => {
      const amount = item.netMeteredKwh || 0;

      return acc + amount;
    }, 0);
  }, [filteredData]);

  return (
    <DashboardContext.Provider
      value={{
        electricityBills: filteredData,
        totalElectricityBills,
        totalClients,
        electricityAmountSum,
        netMeteredAmountSum,
        electricityKwhSum,
        netMeteredKwhSum,
        filter,
        changeFilter,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}
