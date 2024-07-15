import { ColumnDef } from '@tanstack/react-table';
import {
  Badge,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../../@shadcn';

import { MoreHorizontal, ArrowUpDown } from 'lucide-react';

export type Customer = {
  id: string;
  name: string;
  email: string;
  lastName: string;
  amount: number;
  status: 'Pending' | 'Processing' | 'Success' | 'Failed' | 'Draft';
};

export const columns: ColumnDef<Customer>[] = [
  {
    accessorKey: 'name',
    header: ({ column }) => {
      return (
        <Button variant='ghost' onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Name
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ cell, row }) => <div className='pl-4'>{cell.getValue<string>() + ' ' + row.getValue('lastName')}</div>,
  },
  {
    accessorKey: 'lastName',
    enableHiding: true,
  },
  //sorting
  {
    accessorKey: 'email',
    header: ({ column }) => {
      return (
        <Button variant='ghost' onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Email
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => <div className='pl-4'>{row.original.email}</div>,

  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ cell }) => (
      <Badge
        className={
          cell.row.original.status == 'Pending'
            ? 'bg-red-200'
            : cell.row.original.status == 'Draft'
            ? 'bg-pink-50'
            : 'bg-green-50'
        }
        variant='secondary'>
        {cell.row.original.status}
      </Badge>
    ),
  },

  //formatting
  {
    accessorKey: 'amount',
    header: () => <div className='text-center'>Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('amount'));
      const formatted = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(amount);

      return <div className='text-center font-medium'>{formatted}</div>;
    },
  },

  {
    id: 'actions',
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' className='h-8 w-8 p-0'>
              <span className='sr-only'>Open menu</span>
              <MoreHorizontal className='h-4 w-4' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(payment.id)}>
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export function getData(): Customer[] {
  // Fetch data from your API here.
  return [
    {
      id: '728ed52f',
      name: 'Yuri',
      lastName: 'Vasconcelos',
      status: 'Success',
      amount: 100,
      email: 'yurifx@gmail.com',
    },
    {
      id: '728ed52f',
      name: 'Priscila',
      lastName: 'Menozzi',
      status: 'Pending',
      amount: 200,
      email: 'priscila_menozzi@hotmail.com',
    },
  ];
}
