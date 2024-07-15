import { getData, columns } from './customer-columns';
import { DataTable } from '../../@shadcn/data-table';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../@shadcn';
// import { useEffect } from 'react';
// import useSWR from 'swr';

export function CustomersDatatable() {
  const data = getData();
  return (
    <Card className='flex flex-col max-w-100'>
      <CardHeader>
        <CardTitle>Customers</CardTitle>
        <CardDescription>Manage your customers and view their sales performance.</CardDescription>
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} data={data} visibilityState={{ "lastName": false }} />
      </CardContent>
    </Card>
  );
}
