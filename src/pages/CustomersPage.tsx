import { Link } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Button,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Input,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Tabs,
  TabsContent,
  TabsList,
  Sheet,
  TabsTrigger,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Label,
} from '../@shadcn';
import { ListFilter, PlusCircle, Search } from 'lucide-react';
import { CustomerForm } from '../components/customers/CustomerForm';
import { CustomersDatatable } from '../components/customers/CustomersDatatable';

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
            <Tabs className='mt-2 lg:mt-4' defaultValue='all'>
              <div className='flex items-center'>
                <TabsList>
                  <TabsTrigger asChild value='all'>
                    All
                  </TabsTrigger>
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

                  <Dialog >
                    <DialogTrigger asChild>
                      <Button variant='outline'>Add Customer</Button>
                    </DialogTrigger>
                    <DialogContent className='min-w-64 min-h-[70%]'>
                      <DialogHeader>
                        <DialogTitle>Add customer</DialogTitle>
                        {/* <DialogDescription>
                          Make changes to your profile here. Click save when you're done.
                        </DialogDescription> */}
                      </DialogHeader>
                      {/* <div className='grid gap-4 py-4'>
                        <div className='grid grid-cols-4 items-center gap-4'>
                          <Label htmlFor='name' className='text-right'>
                            Name
                          </Label>
                          <Input id='name' value='Pedro Duarte' className='col-span-3' />
                        </div>
                        <div className='grid grid-cols-4 items-center gap-4'>
                          <Label htmlFor='username' className='text-right'>
                            Username
                          </Label>
                          <Input id='username' value='@peduarte' className='col-span-3' />
                        </div>
                      </div> */}
                      <CustomerForm />

                      <DialogFooter>
                        <Button type='submit'>Save changes</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>

                  <Sheet>
                    <SheetTrigger asChild>
                      <Button size='sm' className='h-7 gap-1'>
                        <PlusCircle className='h-3.5 w-3.5' />
                        <span className='sr-only sm:not-sr-only sm:whitespace-nowrap'>Add Customer</span>
                      </Button>
                    </SheetTrigger>
                    <SheetContent side='right' className='lg:min-w-[40%]'>
                      <SheetHeader>
                        <SheetTitle>Create new customer</SheetTitle>
                        <SheetDescription>This is a description</SheetDescription>
                      </SheetHeader>

                      <CustomerForm />
                    </SheetContent>
                  </Sheet>
                </div>
              </div>
              <TabsContent value='all'>
                <CustomersDatatable />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
}
