import { useLocation } from 'react-router-dom';
import { Button } from './@shadcn/button';
<script src='https://cdn.jsdelivr.net/npm/flowbite@2.4.1/dist/flowbite.min.js'></script>;

export function TestComponent() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <div className='flex flex-col items-center justify-center w-300'>
        <div>Hey</div>
        <Button className='w-full lg:w-1/2 flex items-center justify-center'></Button>
      </div>
    </>
  );
}
