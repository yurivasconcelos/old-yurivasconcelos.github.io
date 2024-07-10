export function TestComponent() {
  return (
    <>
      <div className='block w-[300px] h-[300px] bg-primary overflow-y-scroll  '>
        <p className='break-words'>
          superlongstringsuperlongstringsuperlo ngstringsuperlongstringsuperlongstringsuperlongstringsup
          erlongstringsuperlongstringsuperlongstringsuperlongstringsuperlongstringsuperlongstringsuper
          longstringsuperlongstringsuperlongstringsuperlongstringsuperlongstringsuperlongstringsuperlongstringsuperlongstringsuperlongstringsuperlongstringsuperlongstringlongstringsuperlongstringsuperlongstringsuperlongstringsuperlongstringsuperlongstringsuperlongstringsuperlongstringlongstringsuperlongstringsuperlongstringsuperlongstringsuperlongstringlongstringsuperlongstringsuperlongstringsuperlongstringsuperlongstringsuperlongstringsuperlongstringsuperlongstringlongstringsuperlongstringsuperlongstringsuperlongstringsuperlongstringsuperlongstringsuperlongstringsuperlongstringlongstringsuperlongstringsuperlongstringsuperlongstringsuperlongstringsuperlongstringsuperlongstringsuperlongstringlongstringsuperlongstringsuperlongstringsuperlongstringsuperlongstringsuperlongstringsuperlongstringsuperlongstring
        </p>
      </div>

      <div className='flex h-[500px] w-[400px] border flex-wrap'>
        <div className='w-[30px] h-[100px]   bg-blue-300'>a</div>
        <div className='w-[50px] h-[100px] bg-red-500'>b</div>
        <div className='w-[80px] h-[100px] bg-black'>c</div>
        <div className='w-[30px] h-[100px] bg-blue-300'>a</div>
        <div className='w-[50px] h-[100px] bg-red-500'>b</div>
        <div className='w-[80px] h-[100px] bg-black'>c</div>
        <div className='w-[30px] h-[100px] bg-blue-300'>a</div>
        <div className='w-[50px] h-[100px] bg-red-500'>b</div>
        <div className='w-[80px] h-[100px] bg-black'>c</div>
      </div>
    </>
  );
}
