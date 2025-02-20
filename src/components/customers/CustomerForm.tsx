import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  Button,
  Input,
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Textarea,
} from '../../@shadcn';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Invalido.',
  }),
  lastName: z.string(),
  address: z.string().optional(),
});

export function CustomerForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      lastName: '',
      address: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=''>
          <Tabs defaultValue='info'>
            <TabsList className='grid w-full grid-cols-2'>
              <TabsTrigger value='info'>Dados</TabsTrigger>
              <TabsTrigger value='additional'>Adicionais</TabsTrigger>
            </TabsList>
            <TabsContent value='info'>
              <div id='customerForm' className='grid grid-cols-1 md:grid-cols-2 justify-stretch gap-4 xl:gap-8'>
                <FormField
                  control={form.control}
                  name='name'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='lastName'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Sobrenome</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </TabsContent>
            <TabsContent value='additional'>
              <div id='customerForm' className='grid grid-cols-1 justify-stretch gap-4'>
                <FormField
                  control={form.control}
                  name='address'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='font-semibold text-gray-900'>Endereco</FormLabel>
                      <FormControl>
                        <Textarea placeholder='Address' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </TabsContent>
          </Tabs>
          <Button className='mt-3 w-full' type='submit'>
            Salvar
          </Button>
        </form>
      </Form>
    </>
  );
}
