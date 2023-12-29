'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { DashboardContext } from '@/providers/dashboard-provider';
import { SheetContext } from '@/providers/sheet-provider';

const FilterFormSchema = z.object({
  clientNumber: z
    .string({ required_error: 'Número do cliente não pode ser vazio.' })
    .max(10, 'Número do cliente deve ter no máximo 10 caracteres.'),
});

type FilterFormType = z.infer<typeof FilterFormSchema>;

export function FilterFormCreate() {
  const { toast } = useToast();
  const { setShow } = useContext(SheetContext);
  const { filter, changeFilter } = useContext(DashboardContext);

  const formMethods = useForm<FilterFormType>({
    resolver: zodResolver(FilterFormSchema),
    defaultValues: {
      clientNumber: filter?.clientNumber || '',
    },
  });

  const { control, formState, handleSubmit, setError } = formMethods;

  const onSubmit = async (data: FilterFormType) => {
    try {
      changeFilter(data.clientNumber);

      setShow(false);
    } catch (error) {
      // add error to form on clientNumber field
      setError('clientNumber', {
        type: 'manual',
        message: 'Número do cliente não existente.',
      });
    }
  };

  const handleClearFilter = () => {
    changeFilter(null);
    setShow(false);
  };

  return (
    <Form {...formMethods}>
      <form onSubmit={handleSubmit(onSubmit)} className='mt-4 space-y-4'>
        <FormField
          control={control}
          name='clientNumber'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input placeholder='Número da cliente' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type='submit'
          disabled={formState.isSubmitting}
          className='w-full'
        >
          {formState.isSubmitting ? (
            <Loader2 className='mr-2 h-4 w-4 animate-spin' />
          ) : (
            'Filtrar'
          )}
        </Button>
        {filter.clientNumber && (
          <Button
            type='button'
            variant={'ghost'}
            className='w-full'
            onClick={handleClearFilter}
          >
            Limpar Filtro
          </Button>
        )}
      </form>
    </Form>
  );
}
