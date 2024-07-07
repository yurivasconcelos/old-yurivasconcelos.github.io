import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <>
      <header className='py-2 pl-4 text-black bg-gray-800 font-extrabold'>
        <div id='nav' className='flex flex-row p-2 text-sm lg:text-base'>
          <div className='flex-grow justify-items-center'>
            <Link to={`home`}>Home</Link>
          </div>
          <div className='flex flex-row justify-between'>
            <div className=''>
              <Link to={'calendar'}>Calendar</Link>
            </div>
            <div className='pl-4'>
              <Link to={`marketing`}>Marketing</Link>
            </div>
            <div className='pl-4'>
              <Link to={`forms`}>Forms</Link>
            </div>
            <div className='pl-4'>
              <Link to={`slack`}>Slack</Link>
            </div>
            <div className='pl-4 pr-8'>
              <Link to={`signin`}>Login</Link>
            </div>
          </div>
        </div>
      </header>

      <div />
    </>
  );
};

export default Navbar;
