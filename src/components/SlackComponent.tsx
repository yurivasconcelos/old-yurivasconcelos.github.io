import { useState } from 'react';
import { sendMessage } from '../services/SlackService';

export function SlackComponent() {
  const [message, setMessage] = useState('');
  const [isLocal, setIsLocal] = useState(true);
  const [showButton, setShowButton] = useState(true);

  return (
    <>
      <div>
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
        <button
          className={`bg-green-200 my-4 ${showButton ? '' : 'invisible'} `}
          onClick={() => {
            sendMessage(message, isLocal);
            setShowButton(false);
          }}>
          Send
        </button>
        <p className={`text text-pretty text-lg ${showButton ? 'invisible' : ''}`}>Message Sent</p>
      </div>
    </>
  );
}
