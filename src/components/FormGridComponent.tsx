export function FormGridComponent() {
  return (
    <>
      <div className='grid grid-cols-1 lg:grid-cols-3 bg-green-50 gap-8'>
        <div className=''>
          <input type='textarea' />
        </div>
        <div>
          <input type='text' />
        </div>
        <div>
          <input type='text' />
        </div>
      </div>
    </>
  );
}
