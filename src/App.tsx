import { useState } from 'react';
import reactLogo from './assets/react.svg';
import { Button } from './components/Button';
import { EffectComponent } from './components/EffectComponent';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Button></Button>
        <EffectComponent name={count.toString()}></EffectComponent>

      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>

        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
    </>
  );
}

export default App;
