import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../@shadcn/card';
import { Button } from '../@shadcn/button';
import { toast } from 'sonner';
import { Label } from '../@shadcn/label';
import { Input } from '../@shadcn/input';
import { Popover, PopoverContent, PopoverTrigger } from '../@shadcn/popover';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '../@shadcn/resizable';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../@shadcn/select';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../@shadcn/sheet';
import { Switch } from '../@shadcn/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../@shadcn/tabs';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '../@shadcn/navigation-menu';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../@shadcn/tooltip';
import { Toggle } from '../@shadcn/toggle';
import { Textarea } from '../@shadcn/textarea';
import { Table, TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell } from '../@shadcn/table';
import { IconJarLogoIcon } from '@radix-ui/react-icons';
import { Skeleton } from '../@shadcn/skeleton';
import { ScrollArea } from '../@shadcn/scroll-area';
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarShortcut,
  MenubarSeparator,
} from '../@shadcn/menubar';
import { AlertDialogHeader, AlertDialogFooter, AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogTitle, AlertDialogDescription, AlertDialogCancel, AlertDialogAction } from '../@shadcn';

export function ShadcnTestComponent() {
  return (
    <>
      <Popover>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>
          Place content for the popover here.
          <Card>
            <p>hey</p>
          </Card>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant='outline'>Open popover</Button>
        </PopoverTrigger>
        <PopoverContent className='w-80'>
          <div className='grid gap-4'>
            <div className='space-y-2'>
              <h4 className='font-medium leading-none'>Dimensions</h4>
              <p className='text-sm text-muted-foreground'>Set the dimensions for the layer.</p>
            </div>
            <div className='grid gap-2'>
              <div className='grid grid-cols-3 items-center gap-4'>
                <Label htmlFor='width'>Width</Label>
                <Input id='width' defaultValue='100%' className='col-span-2 h-8' />
              </div>
              <div className='grid grid-cols-3 items-center gap-4'>
                <Label htmlFor='maxWidth'>Max. width</Label>
                <Input id='maxWidth' defaultValue='300px' className='col-span-2 h-8' />
              </div>
              <div className='grid grid-cols-3 items-center gap-4'>
                <Label htmlFor='height'>Height</Label>
                <Input id='height' defaultValue='25px' className='col-span-2 h-8' />
              </div>
              <div className='grid grid-cols-3 items-center gap-4'>
                <Label htmlFor='maxHeight'>Max. height</Label>
                <Input id='maxHeight' defaultValue='none' className='col-span-2 h-8' />
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>

     

      <Popover>
        <PopoverTrigger asChild>
          <Button variant='outline'>Open popover</Button>
        </PopoverTrigger>
        <PopoverContent className='w-80'>
          <div className='grid gap-4'>
            <div className='space-y-2'>
              <h4 className='font-medium leading-none'>Adicionar novo evento</h4>

              {/* <p className='text-sm text-muted-foreground'>Set the dimensions for the layer.</p> */}
            </div>
            <div className='grid gap-2'>
              <div className='grid grid-cols-3 items-center gap-4'>
                <Label htmlFor='servico'>Serviço</Label>
                <Select>
                  <SelectTrigger className='w-[180px]'>
                    <SelectValue placeholder='Escolha um serviço' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Serviços</SelectLabel>
                      <SelectItem value='unha'>Unha</SelectItem>
                      <SelectItem value='cabelo'>Cabelo</SelectItem>
                      <SelectItem value='sombrancelha'>Sombrancelha</SelectItem>
                      <SelectItem value='tatuagem'>Tatuagem</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className='grid grid-cols-3 items-center gap-4'>
                <Label htmlFor='maxWidth'>Staff</Label>
                <Select>
                  <SelectTrigger className='w-[180px]'>
                    <SelectValue placeholder='Escolha um membro' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Serviços</SelectLabel>
                      <SelectItem value='joao'>Joao</SelectItem>
                      <SelectItem value='Maria'>Maria</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              {/* default how it was before
               <div className='grid grid-cols-3 items-center gap-4'>
                <Label htmlFor='maxWidth'>Staff</Label>
                <Input id='maxWidth' defaultValue='300px' className='col-span-2 h-8' />
              </div> */}
              <div className='grid grid-cols-3 items-center gap-4'>
                <Label htmlFor='height'>Preço</Label>

                <Input id='price' defaultValue='R$80,00' className='col-span-2 h-8' />
              </div>

              <Button className='mt-4 h-8'>Salvar</Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant='outline'>Show Dialog</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your account and remove your data from our
              servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <div className='w-72 h-72'>
        <ResizablePanelGroup direction='horizontal' className='max-w-sm max-h-24 rounded-lg border'>
          <ResizablePanel defaultSize={50}>
            <div className='flex h-[200px] items-center justify-center p-6'>
              <span className='font-semibold'>One</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={50}>
            <ResizablePanelGroup direction='vertical'>
              <ResizablePanel defaultSize={25}>
                <div className='flex h-full items-center justify-center p-6'>
                  <span className='font-semibold'>Two</span>
                </div>
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize={75}>
                <div className='flex h-full items-center justify-center p-6'>
                  <span className='font-semibold'>Three</span>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
        </ResizablePanelGroup>
        <Select>
          <SelectTrigger className='w-[180px]'>
            <SelectValue placeholder='Select a fruit' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value='apple'>Apple</SelectItem>
              <SelectItem value='banana'>Banana</SelectItem>
              <SelectItem value='blueberry'>Blueberry</SelectItem>
              <SelectItem value='grapes'>Grapes</SelectItem>
              <SelectItem value='pineapple'>Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className='p-10 my-10 w-1/2 bg-grey-50'>
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className='w-[100px]'>Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className='text-right'>Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className='font-medium'>INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className='text-right'>$250.00</TableCell>
            </TableRow>
          </TableBody>
          <TableBody>
            <TableRow>
              <TableCell className='font-medium'>INV001</TableCell>
              <TableCell>
                <IconJarLogoIcon />
              </TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className='text-right'>$250.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className='p-10 my-10 w-1/2 bg-purple-50'>
        <div className='flex items-center space-x-4'>
          <Skeleton className='h-12 w-12 rounded-full' />
          <div className='space-y-2'>
            <Skeleton className='h-4 w-[250px]' />
            <Skeleton className='h-4 w-[200px]' />
          </div>
        </div>{' '}
      </div>

      <div className='p-10 my-10 w-1/2 bg-cyan-50'>
        <ScrollArea className='h-72 w-48 rounded-md border'></ScrollArea>
      </div>

      <div className='p-10 my-10 w-full bg-purple-50'>
        <Tabs defaultValue='account' className='w-[400px]'>
          <TabsList className='grid w-full grid-cols-2'>
            <TabsTrigger value='account'>Account</TabsTrigger>
            <TabsTrigger value='password'>Password</TabsTrigger>
          </TabsList>
          <TabsContent value='account'>
            <Card>
              <CardHeader>
                <CardTitle>Account</CardTitle>
                <CardDescription>Make changes to your account here. Click save when you're done.</CardDescription>
              </CardHeader>
              <CardContent className='space-y-2'>
                <div className='space-y-1'>
                  <Label htmlFor='name'>Name</Label>
                  <Input id='name' defaultValue='Pedro Duarte' />
                </div>
                <div className='space-y-1'>
                  <Label htmlFor='username'>Username</Label>
                  <Input id='username' defaultValue='@peduarte' />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value='password'>
            <Card>
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>Change your password here. After saving, you'll be logged out.</CardDescription>
              </CardHeader>
              <CardContent className='space-y-2'>
                <div className='space-y-1'>
                  <Label htmlFor='current'>Current password</Label>
                  <Input id='current' type='password' />
                </div>
                <div className='space-y-1'>
                  <Label htmlFor='new'>New password</Label>
                  <Input id='new' type='password' />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save password</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <div className='p-10 my-10 w-full bg-green-50'>
        <Sheet>
          <SheetTrigger>
            <Button variant='outline'>Open right panel medium</Button>
          </SheetTrigger>
          <SheetContent side='right' className='w-[480px] lg:min-w-[70%]'>
            <SheetHeader>
              <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>Make changes to your profile here. Click save when you're done.</SheetDescription>
            </SheetHeader>
            <div className='grid gap-4 py-4'>
              <div className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor='name' className='text-right'>
                  Name
                </Label>
                <Input id='name' value='Yuri Vasconcelos' className='col-span-3' />
              </div>
              <div className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor='username' className='text-right'>
                  Username
                </Label>
                <Input id='username' value='@yuri' className='col-span-3' />
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button type='submit'>Save changes</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              New Tab <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>New Window</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Share</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Print</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>

      <Button
        variant='outline'
        onClick={() =>
          toast('Event has been created', {
            description: 'Sunday, December 03, 2023 at 9:00 AM',
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo'),
            },
          })
        }>
        Show Toast
      </Button>

      <div className='p-10 my-10 w-full bg-pink-50'>
        <Switch onClick={() => toast('Hey Yuri')} />
        <Toggle className=''>toggle</Toggle>
        <Label htmlFor='email'>Just a label</Label>
        <Input className='mt-8' />
        <Textarea />
      </div>

      <div className='p-10 my-10 w-full bg-gray-50'>
        <div className='flex'>
          <Tabs defaultValue='account' className='max-w-100'>
            <TabsList>
              <TabsTrigger value='account'>Account</TabsTrigger>
              <TabsTrigger value='password'>Password</TabsTrigger>
              <TabsTrigger value='test'>Test</TabsTrigger>
              <TabsTrigger value='abc'>Abc</TabsTrigger>
              <TabsTrigger value='123'>123</TabsTrigger>
            </TabsList>
            <TabsContent value='account'>Make changes to your account here.</TabsContent>
            <TabsContent value='password'>Input password here</TabsContent>
            <TabsContent value='test'>Testing here</TabsContent>
            <TabsContent value='abc'>Content_ABC</TabsContent>
            <TabsContent value='123'>Content_123</TabsContent>
          </Tabs>
        </div>
      </div>

      <div className='p-10 my-10 w-full bg-blue-50'>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>
                  <div className='w-[200px] h-[200px] border bg-red-50'></div>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className='p-10 w-full bg-green-50'>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>Hover</TooltipTrigger>
            <TooltipContent>
              <p>Add to library</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </>
  );
}
