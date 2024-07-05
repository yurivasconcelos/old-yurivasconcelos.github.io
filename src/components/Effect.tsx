import { useEffect, useState } from 'react';

type EffectComponentProps = {
  name: string;
};

export function Effect(props: EffectComponentProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('I depend on nothing, Ill run just one time');
  }, []);

  useEffect(() => {
    console.log('I depend on everything, Ill run on every re-render')
  }); 

  useEffect(() => {
    console.log('I depend on name, if changes then I run')
  }, [props.name]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setCount(count + 1);
    console.log(e);
  };

  return (
    <>
      <div>
        <button onClick={(e) => handleClick(e)}>Use Effect Click Me</button>
        <p>Name is {props.name}</p>
      </div>
    </>
  );
}
