import { Link } from 'react-router-dom';
import {
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Input,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  Sheet,
  TabsTrigger,
} from '../@shadcn';
import { ListFilter, MoreHorizontal, PlusCircle, Search } from 'lucide-react';
import { CustomerForm } from '../components/CustomerForm';

const customersDemo = [
  { name: 'Yuri Eduardo', status: 'Success', price: '$30.20', totalSales: 50, createdAt: '20-20-2021' },
  { name: 'Priscila', status: 'Success', price: 'R$299.02', totalSales: 25, createdAt: '20-10-2021' },
  { name: 'Roger Status', status: 'Draft', price: 30, totalSales: 3, createdAt: '20-10-2021' },
  { name: 'June Six', status: 'Success', price: 30, totalSales: 55, createdAt: '20-10-2021' },
  { name: 'Carl Junior', status: 'Pending', price: 30, totalSales: 7, createdAt: '20-10-2021' },
  { name: 'Burger King Jr.', status: 'Pending', price: 30, totalSales: 2, createdAt: '20-10-2021' },
  { name: 'Yuri Vasconcelos', status: 'Success', price: 30, totalSales: 3, createdAt: '20-10-2021' },
  { name: 'Castro Filho', status: 'Pending', price: 30, totalSales: 552, createdAt: '20-10-2021' },
  { name: 'Priscila', status: 'Success', price: 30, totalSales: 66, createdAt: '20-10-2021' },
];

export function CustomersPage() {
  return (
    <>
      <div className='flex-1 justify-center h-full pb-52'>
        <div className='p-2 lg:p-8 h-20'>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to='#'>Dashboard</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to='#'>Customers</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>All</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className='pt-6 pb-20'>
            <div className='relative flex-1 md:grow-0'>
              <Search className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground' />
              <Input
                type='search'
                placeholder='Search...'
                className='w-full rounded-lg bg-background pl-8 md:w-[600px] lg:w-[620px]'
              />
            </div>
            <main className='grid flex-1 items-start gap-0 pt-4 sm:pt-6 md:gap-0'>
              <Tabs defaultValue='all'>
                <div className='flex items-center'>
                  <TabsList>
                    <TabsTrigger value='all'>All</TabsTrigger>
                    <TabsTrigger value='active'>Active</TabsTrigger>
                    <TabsTrigger value='draft'>Draft</TabsTrigger>
                    <TabsTrigger value='archived' className='hidden sm:flex'>
                      Archived
                    </TabsTrigger>
                  </TabsList>
                  <div className='ml-auto flex items-center gap-2'>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant='outline' size='sm' className='h-7 gap-1'>
                          <ListFilter className='h-3.5 w-3.5' />
                          <span className='sr-only sm:not-sr-only sm:whitespace-nowrap'>Filter</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align='end'>
                        <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuCheckboxItem checked>Active</DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem>Draft</DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem>Archived</DropdownMenuCheckboxItem>
                      </DropdownMenuContent>
                    </DropdownMenu>

                      <Sheet>
                        <SheetTrigger>
                          <Button size='sm' className='h-7 gap-1'>
                            <PlusCircle className='h-3.5 w-3.5' />
                            <span className='sr-only sm:not-sr-only sm:whitespace-nowrap'>Add Customer</span>
                          </Button>
                        </SheetTrigger>
                        <SheetContent side='right' className='w-[480px] lg:min-w-[60%]'>
                          <SheetHeader>
                            <SheetTitle>Create new customer</SheetTitle>
                            <SheetDescription>
                              <CustomerForm/>
                            </SheetDescription>
                          </SheetHeader>
                        </SheetContent>
                      </Sheet>
                    </div>
                </div>
                <TabsContent value='all'>
                  <Card>
                    <CardHeader>
                      <CardTitle>Customers</CardTitle>
                      <CardDescription>Manage your customers and view their sales performance.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            {/* <TableHead className='hidden w-[100px] sm:table-cell'>
                              <span className='sr-only'>Image</span>
                            </TableHead> */}
                            <TableHead>Name</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Price</TableHead>
                            <TableHead className='hidden md:table-cell'>Total Sales</TableHead>
                            <TableHead className='hidden md:table-cell'>Created at</TableHead>
                            <TableHead>
                              <span className='sr-only'>Actions</span>
                            </TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {customersDemo.map((customer) => (
                            <>
                              <TableRow>
                                <TableCell className='font-medium'>{customer.name}</TableCell>
                                <TableCell>
                                  <Badge
                                    className={
                                      customer.status == 'Pending'
                                        ? 'bg-red-200'
                                        : customer.status == 'Draft'
                                        ? 'bg-pink-50'
                                        : 'bg-green-50'
                                    }
                                    variant='secondary'>
                                    {customer.status}
                                  </Badge>
                                </TableCell>
                                <TableCell>{customer.price}</TableCell>
                                <TableCell className='hidden md:table-cell'>{customer.totalSales}</TableCell>
                                <TableCell className='hidden md:table-cell'>{customer.createdAt}</TableCell>
                                <TableCell>
                                  <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                      <Button aria-haspopup='true' size='icon' variant='ghost'>
                                        <MoreHorizontal className='h-4 w-4' />
                                        <span className='sr-only'>Toggle menu</span>
                                      </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align='end'>
                                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                      <DropdownMenuItem>Edit</DropdownMenuItem>
                                      <DropdownMenuItem>Delete</DropdownMenuItem>
                                    </DropdownMenuContent>
                                  </DropdownMenu>
                                </TableCell>
                              </TableRow>
                            </>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                    <CardFooter>
                      <div className='text-xs text-muted-foreground'>
                        Showing <strong>1-10</strong> of <strong>32</strong> products
                      </div>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
