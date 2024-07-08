import { BarChartIcon, BellIcon, HeartIcon, MixIcon, PersonIcon, QuoteIcon, SunIcon } from '@radix-ui/react-icons';
import { Link } from 'react-router-dom';

export function Sidebar() {
  return (
    <>
      <aside
        id='default-sidebar'
        className='fixed z-1 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0'
        aria-label='Sidebar'>
        <div className='h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800'>
          <ul className='space-y-2 font-medium'>
            <li>
              <Link
                to='#'
                className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'>
                <SunIcon />
                <span className='ms-3'>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to='card'
                className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'>
                <MixIcon />
                <span className='flex-1 ms-3 whitespace-nowrap'>Services</span>
                <span className='inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300'>
                  Pro
                </span>
              </Link>
            </li>
            <li>
              <Link
                to='#'
                className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'>
                <QuoteIcon />
                <span className='flex-1 ms-3 whitespace-nowrap'>Test</span>
                <span className='inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300'>
                  3
                </span>
              </Link>
            </li>
            <li>
              <Link
                to='#'
                className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'>
                <PersonIcon />
                <span className='flex-1 ms-3 whitespace-nowrap'>Customers</span>
              </Link>
            </li>
            <li>
              <Link to='chart'
                className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'>
                <BarChartIcon />
                <span className='flex-1 ms-3 whitespace-nowrap'>Chart</span>
              </Link>
            </li>
            <li>
              <a
                href='#'
                className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'>
                <BellIcon className='flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                <span className='flex-1 ms-3 whitespace-nowrap'>Sign In</span>
              </a>
            </li>
            <li>
              <a
                href='#'
                className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'>
                <HeartIcon />
                <span className='flex-1 ms-3 whitespace-nowrap'>Sign Up</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
