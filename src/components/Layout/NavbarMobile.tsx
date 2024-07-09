import { Link } from 'react-router-dom';
import { Button } from '../../@shadcn/button';
import { Sheet, SheetContent, SheetTrigger } from '../../@shadcn/sheet';
import { AlignTopIcon } from '@radix-ui/react-icons';

export function NavbarMobile() {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button size='icon' variant='outline' className='sm:hidden'>
            <AlignTopIcon className='h-5 w-5' />
            <span className='sr-only'>Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side='left' className='sm:max-w-xs'>
          <nav className='grid gap-6 text-lg font-medium'>
            <Link
              to='#'
              className='group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base'>
              <AlignTopIcon className='h-5 w-5 transition-all group-hover:scale-110' />
              <span className='sr-only'>Acme Inc</span>
            </Link>
            <Link to='#' className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'>
              <AlignTopIcon className='h-5 w-5' />
              Dashboard
            </Link>
            <Link to='#' className='flex items-center gap-4 px-2.5 text-foreground'>
              <AlignTopIcon className='h-5 w-5' />
              Orders
            </Link>
            <Link to='#' className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'>
              <AlignTopIcon className='h-5 w-5' />
              Products
            </Link>
            <Link to='#' className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'>
              <AlignTopIcon className='h-5 w-5' />
              Customers
            </Link>
            <Link to='#' className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'>
              <AlignTopIcon className='h-5 w-5' />
              Settings
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
}
