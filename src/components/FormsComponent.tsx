import React, { useState } from 'react';

export function FormsComponent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <>
      <div className=''>
        <form className='max-w-sm mx-auto'>
          <div className='mb-5'>
            <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900  '>
              Your email
            </label>
            <input
              type='email'
              id='email'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5           '
              placeholder='name@flowbite.com'
              required
            />
          </div>
          <div className='mb-5'>
            <label htmlFor='password' className='block mb-2 text-sm font-medium text-gray-900  '>
              Your password
            </label>
            <input
              type='password'
              id='password'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5           '
              required
            />
          </div>
          <div className='flex items-start mb-5'>
            <div className='flex items-center h-5'>
              <input
                id='remember'
                type='checkbox'
                value=''
                className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300       dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800'
                required
              />
            </div>
            <label htmlFor='remember' className='ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
              Remember me
            </label>
          </div>
          <button
            type='submit'
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
            Submit
          </button>
        </form>
      </div>
      <div id='form' className='flex flex-col'>
        <div className='formTitle'>
          <p>FormsComponent</p>
        </div>
        <div className=''>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input type='text' name='name' value={formData.name} onChange={handleChange} />
            </label>
            <br />
            <label>
              Email:
              <input type='email' name='email' value={formData.email} onChange={handleChange} />
            </label>
            <br />
            <br />
            <button type='submit'>Submit</button>
          </form>
        </div>

        <div>
          <form>
            <div className='grid gap-6 mb-6 md:grid-cols-2'>
              <div>
                <label htmlFor='first_name' className='block mb-2 text-sm font-medium text-gray-900'>
                  First name
                </label>
                <input
                  type='text'
                  id='first_name'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5           '
                  placeholder='John'
                  required
                />
              </div>
              <div>
                <label htmlFor='last_name' className='block mb-2 text-sm font-medium text-gray-900  '>
                  Last name
                </label>
                <input
                  type='text'
                  id='last_name'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5           '
                  placeholder='Doe'
                  required
                />
              </div>
              <div>
                <label htmlFor='company' className='block mb-2 text-sm font-medium text-gray-900  '>
                  Company
                </label>
                <input
                  type='text'
                  id='company'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5           '
                  placeholder='Flowbite'
                  required
                />
              </div>
              <div>
                <label htmlFor='phone' className='block mb-2 text-sm font-medium text-gray-900  '>
                  Phone number
                </label>
                <input
                  type='tel'
                  id='phone'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5           '
                  placeholder='123-45-678'
                  pattern='[0-9]{3}-[0-9]{2}-[0-9]{3}'
                  required
                />
              </div>
              <div>
                <label htmlFor='website' className='block mb-2 text-sm font-medium text-gray-900  '>
                  Website URL
                </label>
                <input
                  type='url'
                  id='website'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5           '
                  placeholder='flowbite.com'
                  required
                />
              </div>
              <div>
                <label htmlFor='visitors' className='block mb-2 text-sm font-medium text-gray-900  '>
                  Unique visitors (per month)
                </label>
                <input
                  type='number'
                  id='visitors'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5           '
                  placeholder=''
                  required
                />
              </div>
            </div>
            <div className='mb-6'>
              <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900  '>
                Email address
              </label>
              <input
                type='email'
                id='email'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5           '
                placeholder='john.doe@company.com'
                required
              />
            </div>
            <div className='mb-6'>
              <label htmlFor='password' className='block mb-2 text-sm font-medium text-gray-900  '>
                Password
              </label>
              <input
                type='password'
                id='password'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5           '
                placeholder='•••••••••'
                required
              />
            </div>
            <div className='mb-6'>
              <label htmlFor='confirm_password' className='block mb-2 text-sm font-medium text-gray-900  '>
                Confirm password
              </label>
              <input
                type='password'
                id='confirm_password'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5           '
                placeholder='•••••••••'
                required
              />
            </div>
            <div className='flex items-start mb-6'>
              <div className='flex items-center h-5'>
                <input
                  id='remember'
                  type='checkbox'
                  value=''
                  className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300       dark:focus:ring-blue-600 dark:ring-offset-gray-800'
                  required
                />
              </div>
              <label htmlFor='remember' className='ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                I agree with the{' '}
                <a href='#' className='text-blue-600 hover:underline dark:text-blue-500'>
                  terms and conditions
                </a>
                .
              </label>
            </div>
            <button
              type='submit'
              className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

