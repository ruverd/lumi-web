import { fetchElectricityBills } from '@/actions/fetch-electricity-bills';
import { OverviewCharts } from '@/app/dashboard/charts';
import { FilterDashboardSheet } from '@/app/dashboard/filter/filter-sheet';
import { OverviewStats } from '@/app/dashboard/stats';
import { DashboardProvider } from '@/providers/dashboard-provider';
import { SheetProvider } from '@/providers/sheet-provider';

export default async function Dashboard() {
  const electricityBills = await fetchElectricityBills();

  return (
    <DashboardProvider initialData={{ electricityBills }}>
      <div className='space-y-8'>
        <div className='flex items-center justify-between'>
          <h2 className='text-3xl font-bold tracking-tight'>Dashboard</h2>
          <SheetProvider>
            <FilterDashboardSheet />
          </SheetProvider>
        </div>
        <OverviewStats />
        <OverviewCharts />
      </div>
    </DashboardProvider>
  );
}
