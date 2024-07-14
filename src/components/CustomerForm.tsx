import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button, Input, Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '../@shadcn';
import { TabComponent } from './TabComponent';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Invalido.',
  }),
  lastName: z.string(),
});

export function CustomerForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      lastName: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='flex space-y-4'>
          <div className='flex form'>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input placeholder='' {...field} />
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
                    <Input placeholder='' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type='submit'>Salvar</Button>
        </form>
      </Form>
    </>
  );
}
