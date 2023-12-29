import { fetchElectricityBills } from '@/actions/fetch-electricity-bills';
import { ElectricityBillDataTable } from '@/app/electricity-bills/data-table';

export default async function ElectricityBill() {
  const electricityBills = await fetchElectricityBills();

  return (
    <div className='space-y-8'>
      <div className='flex items-center justify-between'>
        <h2 className='text-3xl font-bold tracking-tight'>Faturas</h2>
      </div>
      <ElectricityBillDataTable data={electricityBills} />
    </div>
  );
}
