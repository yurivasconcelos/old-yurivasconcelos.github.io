//https://tailwindcss.com/docs/grid-column
export function GridComponent() {
  return (
    <>
      <div className='grid grid-cols-1 lg:grid-cols-8 gap-4'>
        <div className='lg:col-span-3'>01</div>
        <div className='lg:hover:col-span-4'>02</div>
        <div className=''>03</div>
        <div className=''>04</div>
        <div className=''>05</div>
        <div className=''>06</div>
        <div className=''>07</div>
        {/* <div className='col-span-2 ...'>07</div> */}
      </div>

    </>
  );
}
