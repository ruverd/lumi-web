'use server';

import { fetcher } from '@/actions/fetcher';
import { ElectricityBill } from '@/app/electricity-bills/columns';

const FETCH_ELECTRICITY_BILLS = /* GraphQl */ `
  query FETCH_ELECTRICITY_BILLS {
    fetchElectricityBills {
      id
      clientId
      client {
        clientNumber
      }
      fileName
      refMonth
      refYear
      billTotalAmount
      electricityKwh
      electricityAmount
      netMeteringKwh
      netMeteringAmount
      netMeteredKwh
      netMeteredAmount
      municipalLightingTax
    }
  }
`;

interface FetchElectricityBillsResult {
  data: { fetchElectricityBills: ElectricityBill[] };
}

export async function fetchElectricityBills() {
  const res = await fetcher<FetchElectricityBillsResult>(
    FETCH_ELECTRICITY_BILLS,
    {
      next: { tags: ['fetchElectricityBills'] },
    }
  );

  return res?.data?.fetchElectricityBills ?? [];
}
