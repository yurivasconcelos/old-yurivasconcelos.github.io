import { useState } from 'react';
import { Button } from './components/Button';
import { Effect } from './components/Effect';

import './App.css';
import { FetchComponent } from './components/Fetch';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Button></Button>
        <Effect name={count.toString()}></Effect>
        <FetchComponent></FetchComponent>
      </div>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
      </div>
    </>
  );
}

export default App;
