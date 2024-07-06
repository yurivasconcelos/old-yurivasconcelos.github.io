import { useState } from 'react';
import { sendMessage } from '../services/SlackService';

export function SlackComponent() {
  const [message, setMessage] = useState('');
  const [isLocal, setIsLocal] = useState(true);

  return (
    <>
      <div>
        <h1 className='text-3xl font-bold'>Send me a message on Slack!</h1>
        <input
          type='checkbox'
          className='input'
          name='Is Local'
          id='IsLocal'
          onChange={(e) => setIsLocal(e.target.checked)}
        />
        <input type='text' placeholder='input your message here' onChange={(e) => setMessage(e.target.value)}></input>
        <button className='bg-black' onClick={() => sendMessage(message, isLocal)}>Send Message</button>
      </div>
    </>
  );
}
