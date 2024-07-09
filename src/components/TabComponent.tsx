import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './@shadcn/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './@shadcn/card';
import { Button } from './@shadcn/button';
import { Label } from './@shadcn/label';
import { Input } from './@shadcn/input'

export function TabComponent() {
  const [activeTab, setActiveTab] = useState(1);

  const base =
    'hover:cursor-pointer inline-block px-4 py-1 rounded-md rounded-b-none text-gray-800 hover:text-gray-900 hover:bg-gray-200 ';
  const active = base + 'text-white bg-indigo-800 hover:text-gray-200 hover:bg-indigo-800 active';
  const nonactive = base + 'hover:text-gray-900 dark:hover:text-white';

  return (
    <>
      <div>
        {/* my tab component */}
        <div className='flex'>
          <ul className='flex flex-wrap text-xs font-small text-center'>
            <li className='me-1'>
              <a
                onClick={() => setActiveTab(1)}
                className={`${activeTab == 1 ? active : nonactive} `}
                aria-current='page'>
                Perfil
              </a>
            </li>
            <li className='me-2'>
              <a onClick={() => setActiveTab(2)} className={`${activeTab == 2 ? active : nonactive} `}>
                Adicional
              </a>
            </li>
            <li className='me-2'>
              <a onClick={() => setActiveTab(3)} className={`${activeTab == 3 ? active : nonactive} `}>
                Testes
              </a>
            </li>
            <li>
              <a onClick={() => setActiveTab(4)} className={`${activeTab == 4 ? active : nonactive} `}>
                Tab very long name name name
              </a>
            </li>
          </ul>
        </div>
        <div className='flex flex-col pt-2'>
          <div className='pl-2'>Title</div>
          <div className='pl-2'>Content</div>
        </div>
      </div>

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
                <p>2</p>
                
              </div>
              <div className='space-y-1'>
                <p>hey</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  );
}
