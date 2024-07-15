import { columns } from './customer-columns';
import { DataTable } from '../../@shadcn/data-table';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../@shadcn';
import { customerService } from '../../services/services';
import useSWR from 'swr';

// import { useEffect } from 'react';
// import useSWR from 'swr';

export function CustomersDatatable() {
  const { isLoading, data, error } = useSWR('customers', customerService.getAll(true), {
    revalidateOnFocus: false,
    revalidateOnMount: true,
    revalidateOnReconnect: true,
    refreshWhenOffline: false,
    refreshWhenHidden: false,
    refreshInterval: 0,
  });

  return (
    <Card className='flex flex-col max-w-100'>
      <CardHeader>
        <CardTitle>Customers</CardTitle>
        <CardDescription>Manage your customers and view their sales performance.</CardDescription>
      </CardHeader>
      <CardContent>
        {!isLoading && !error && (
          <DataTable
            columns={columns}
            data={data}
            visibilityState={{ lastName: false, status: window.matchMedia('(min-width: 768px)').matches }}
          />
        )}
        {error && <p>Error to get customers</p>}
      </CardContent>
    </Card>
  );
}
