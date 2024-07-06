import { useLocation } from 'react-router-dom';
<script src='https://cdn.jsdelivr.net/npm/flowbite@2.4.1/dist/flowbite.min.js'></script>;

export function TestComponent() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <div>
        <p className='text-4xl font-bold mb-5'>Test Component</p>

        <input
          id='firstName'
          maxLength={30}
          type='text'
          className='w-full bg-zinc-50 leading-5 py-2 px-3 border-green-300 hover:border-green-200 focus:border-indigo-300 shadow-sm rounded placeholder-slate-400'
        />

        <input
          type='checkbox'
          name=''
          className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:outline-none'
          id=''
        />

        <button
          type='button'
          className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
          Click me
        </button>

        {/* google button */}
        <div className='p-4'>
          <button className='bg-white dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-800 rounded-lg hover:bg-gray-100 duration-300 transition-colors border px-8 py-2.5'>
            <svg className='w-5 h-5 sm:h-6 sm:w-6' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <g clipPath='url(#clip0_3033_94454)'>
                <path
                  d='M23.766 12.2764C23.766 11.4607 23.6999 10.6406 23.5588 9.83807H12.24V14.4591H18.7217C18.4528 15.9494 17.5885 17.2678 16.323 18.1056V21.1039H20.19C22.4608 19.0139 23.766 15.9274 23.766 12.2764Z'
                  fill='#4285F4'
                />
                <path
                  d='M12.2401 24.0008C15.4766 24.0008 18.2059 22.9382 20.1945 21.1039L16.3276 18.1055C15.2517 18.8375 13.8627 19.252 12.2445 19.252C9.11388 19.252 6.45946 17.1399 5.50705 14.3003H1.5166V17.3912C3.55371 21.4434 7.7029 24.0008 12.2401 24.0008Z'
                  fill='#34A853'
                />
                <path
                  d='M5.50253 14.3003C4.99987 12.8099 4.99987 11.1961 5.50253 9.70575V6.61481H1.51649C-0.18551 10.0056 -0.18551 14.0004 1.51649 17.3912L5.50253 14.3003Z'
                  fill='#FBBC04'
                />
                <path
                  d='M12.2401 4.74966C13.9509 4.7232 15.6044 5.36697 16.8434 6.54867L20.2695 3.12262C18.1001 1.0855 15.2208 -0.034466 12.2401 0.000808666C7.7029 0.000808666 3.55371 2.55822 1.5166 6.61481L5.50264 9.70575C6.45064 6.86173 9.10947 4.74966 12.2401 4.74966Z'
                  fill='#EA4335'
                />
              </g>
              <defs>
                <clipPath id='clip0_3033_94454'>
                  <rect width='24' height='24' fill='white' />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
        {/* google finish */}

        {/* card-example */}
        <div className='max-w-2xl overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800'>
          <img
            className='object-cover w-full h-64'
            src='https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
            alt='Article'
          />

          <div className='p-6'>
            <div>
              <span className='text-xs font-medium text-blue-600 uppercase dark:text-blue-400'>Product</span>
              <a
                href='#'
                className='block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline'
                tabIndex={0}
                role='link'>
                Yuri Vasconcelos
              </a>
              <p className='mt-2 text-sm text-gray-600 dark:text-gray-400'>
                10+ years of software development experience, with a focus on front-end and back-end development.
              </p>
            </div>
          </div>
        </div>
        {/* card-example finish */}

        {/* pills example */}
        <span className='bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300'>
          Default
        </span>
        <span className='bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300'>
          Dark
        </span>
        <span className='bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300'>
          Red
        </span>
        <span className='bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300'>
          Green
        </span>
        <span className='bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300'>
          Yellow
        </span>
        <span className='bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300'>
          Indigo
        </span>
        <span className='bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300'>
          Purple
        </span>
        <span className='bg-pink-100 text-pink-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-300'>
          Pink
        </span>
        {/* pills example */}

        {/* alert example - https://flowbite.com/docs/components/alerts/ */}
        <div
          className='p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400'
          role='alert'>
          <span className='font-medium'>Info alert!</span> Change a few things up and try submitting again.
        </div>
        {/* alert example */}

        <span className='flex items-center'>
          <span className='h-px flex-1 bg-black'></span>
          <span className='shrink-0 px-6'>Lorem, ipsum dolor</span>
          <span className='h-px flex-1 bg-black'></span>
        </span>

        {/* datepicker */}
      </div>
    </>
  );
}
