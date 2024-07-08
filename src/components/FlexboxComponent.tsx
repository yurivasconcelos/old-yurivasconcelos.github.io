export function FlexComponent() {
  return (
    <>
      <div className='flex w-2/3 h-2/3 border-solid border-2 border-red-200 justify-center items-center'>
        <div className='w-60 h-60 bg-green-600'>1</div>
        <div className='w-60 h-60 bg-yellow-600'>2</div>
        <div className='w-60 h-60 bg-red-600'>3</div>
        <div className='w-60 h-60 bg-blue-600'>4</div>
      </div>
    </>
  );
}
