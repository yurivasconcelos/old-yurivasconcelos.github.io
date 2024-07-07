import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <>
      <header className='py-1 text-white bg-gray-800 font-extrabold fixed w-full'>
        <div id='nav' className='grid grid-cols-12 m-1 pl-6 text-sm lg:text-base'>
          <div className='lg:hidden w-6'>
            <svg
              onClick={() => console.log('open side menu')}
              className='block cursor-pointer text-white-800 dark:text-white'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 17 14'>
              <path d='M16 2H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 0 1 0 2Z'></path>
            </svg>
          </div>
          <div className='hidden lg:block'>
            <Link to={`home`}>Home</Link>
          </div>
          <div className='grid lg:col-start-5 col-span-10 lg:col-span-6 grid-cols-5'>
            <Link to={'calendar'}>Calendar</Link>
            <Link to={`marketing`}>Marketing</Link>
            <Link to={`forms`}>Forms</Link>
            <Link to={`slack`}>Slack</Link>
          </div>
          <div className='grid col-start-12 justify-end pr-6'>
            <Link to={`login`}>Login</Link>
          </div>
        </div>
      </header>
      <div />
    </>
  );
};

export default Navbar;
