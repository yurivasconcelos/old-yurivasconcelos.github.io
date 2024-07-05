import { useState } from 'react';

export function Button() {
  const [count, setCount] = useState(0);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setCount(count + 1);
    console.log(e.target);
  };

  return (
    <>
      <div>
        <button onClick={e => handleClick(e)}>Click me</button>
        <p>hey {count}</p>
      </div>
    </>
  );
}
