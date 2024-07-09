import { useState } from 'react';
import { slackMessageService, testService } from '../services/services.ts';
import useSWR from 'swr';
import { Button } from '../@shadcn/button.tsx';
import { Alert } from '../@shadcn/alert.tsx';

export function SlackComponent() {
  const [message, setMessage] = useState('');
  const [isLocal, setIsLocal] = useState(false);
  const [showButton, setShowButton] = useState(true);

  const { isLoading, data, error } = useSWR('test', testService.getTest(true));
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
        <div className='flex items-center mb-4'>
          <input
            id='default-checkbox'
            type='checkbox'
            onChange={(e) => setIsLocal(e.target.checked)}
            className='form-checkbox h-6 w-6 text-green-600 rounded border-green-300 focus:ring-green-500'
          />
          <label className='ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Local Environment?</label>
        </div>
        <input
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          type='textarea'
          placeholder='your message here'
          onChange={(e) => setMessage(e.target.value)}></input>
        <Button
          className={`${showButton ? '' : 'invisible'}`}
          onClick={() => {
            slackMessageService.postSlackMessage(isLocal, message).then((x) => console.log(x));
            setShowButton(false);
          }}>
          Send
        </Button>
        <Alert>Hey</Alert>
       
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
      </div>
    </>
  );
}
