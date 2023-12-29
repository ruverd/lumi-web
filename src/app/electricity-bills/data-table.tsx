import {
  ElectricityBillData,
  electricityBillColumns,
} from '@/app/electricity-bills/columns';
import { DataTable } from '@/components/data-table';

interface ElectricityBillDataTableProps {
  data: ElectricityBillData[];
}

export async function ElectricityBillDataTable({
  data,
}: ElectricityBillDataTableProps) {
  const mapperData = data.map((item) => {
    return {
      ...item,
      clientNumber: item.client.clientNumber,
    };
  });

  return (
    <DataTable
      columns={electricityBillColumns}
      data={mapperData}
      filterBy={{
        key: 'clientNumber',
        label: 'número do cliente',
      }}
    />
  );
}
