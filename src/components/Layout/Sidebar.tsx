import { BarChartIcon, BellIcon, HeartIcon, MixIcon, PersonIcon, QuoteIcon, SunIcon } from '@radix-ui/react-icons';
import { Link } from 'react-router-dom';

const iconsStyle =
  'flex-shrink-0 w-6 h-6 text-slate-500 transition duration-75 dark:text-gray-400 group-hover:text-cyan-00 dark:group-hover:text-white';

export function Sidebar() {
  return (
    <>
      <aside
        id='sidebar'
        className='fixed z-1 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0'
        aria-label='Sidebar'>
        <div className='h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800'>
          <ul className='space-y-2 font-medium'>
            <li>
              <Link
                to='chart'
                className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'>
                <SunIcon className={iconsStyle} />
                <span className='ms-3'>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to='card'
                className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'>
                <MixIcon className={iconsStyle} />
                <span className='flex-1 ms-3 whitespace-nowrap'>Services</span>
                <span className='inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300'>
                  Pro
                </span>
              </Link>
            </li>
            <li>
              <Link
                to='dialog'
                className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'>
                <QuoteIcon className={iconsStyle} />
                <span className='flex-1 ms-3 whitespace-nowrap'>Dialog</span>
                <span className='inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300'>
                  3
                </span>
              </Link>
            </li>
            <li>
              <Link
                to='tab'
                className='flex items-center p-2  text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'>
                <PersonIcon className={iconsStyle} />
                <span className='flex-1 ms-3 whitespace-nowrap'>Customers</span>
              </Link>
            </li>
            <li>
              <Link
                to='chart'
                className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'>
                <BarChartIcon className={iconsStyle} />
                <span className='flex-1 ms-3 whitespace-nowrap'>Chart</span>
              </Link>
            </li>
            <li>
              <Link
                to='test'
                className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'>
                <BellIcon className={iconsStyle} />
                <span className='flex-1 ms-3 whitespace-nowrap'>Reminders</span>
              </Link>
            </li>
            <li>
              <Link
                to='orders'
                className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'>
                <HeartIcon className={iconsStyle} />
                <span className='flex-1 ms-3 whitespace-nowrap'>Sign Up</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
