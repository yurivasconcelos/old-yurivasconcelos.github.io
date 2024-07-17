import { useState } from 'react';
// import { testService } from '../services/services.ts';
import useSWR from 'swr';
import { Button } from '../@shadcn/button.tsx';
import { Alert } from '../@shadcn/alert.tsx';
import { fetcher, poster } from '../services/fetcher.ts';

export function SlackComponent() {
  const [message, setMessage] = useState('');
  const [showButton, setShowButton] = useState(true);

  const { isLoading, data, error } = useSWR('test', () => fetcher('/test'));
  console.log(data);
  // const { data: googleData } = useSWR('google', getGoogle(true))

  return (
    <>
      <div>
        <p>Testing API</p>
        <p>error: {JSON.stringify(error)}</p>
        <p>data: {JSON.stringify(data)}</p>
        <p>loading: {JSON.stringify(isLoading)}</p>
        {/* <p>google: {JSON.stringify(googleData)}</p> */}
        <h1 className='text-4xl font-bold mb-5'>Send me a message on Slack!</h1>
        <input
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          type='textarea'
          placeholder='your message here'
          onChange={(e) => setMessage(e.target.value)}></input>
        <Button
          className={`${showButton ? '' : 'invisible'}`}
          onClick={() => {
            poster('/slackTest', { text: message }).then((x) => console.log(x));
            setShowButton(false);
          }}>
          Send
        </Button>
        <Alert>Hey</Alert>

        {!isLoading && data && (
          <div
            className={`flex w-full  overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 ${
              showButton ? 'invisible' : ''
            }`}>
            <div className='flex items-center justify-center w-12 bg-emerald-500'>
              <svg className='w-6 h-6 text-white fill-current' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'>
                <path d='M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z' />
              </svg>
            </div>

            <div className='px-4 py-2 -mx-3'>
              <div className='mx-3'>
                <span className='font-semibold text-emerald-500 dark:text-emerald-400'>Success</span>
                <p className='text-sm text-gray-600 dark:text-gray-200'>Slack message Sent</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
