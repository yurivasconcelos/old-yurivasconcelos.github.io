import { useState } from 'react';
import { sendMessage } from '../services/SlackService';

export function SlackComponent() {

    const [message, setMessage] = useState('');
    const [isLocal, setIsLocal] = useState(true);

  return (
    <>
      <div>
        <input type="checkbox" name="Is Local" id="" onChange={e => setIsLocal(e.target.checked)}/>
        <input type='text' placeholder='input your message here' onChange={e => setMessage(e.target.value)}></input>
        <button onClick={() => sendMessage(message, isLocal)}>Send Message</button>
      </div>
    </>
  );
}
