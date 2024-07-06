// https://jonitrythall.com/content/flexboxsheet.pdf

export function FlexboxContainer() {
  return (
    <>
      <div className='flex flex-row'>
        <div>flex</div>
        <div>direction</div>
        <div>row</div>
      </div>

      <div className='flex flex-col'>
        <div>flex</div>
        <div>direction</div>
        <div>column</div>
      </div>

      <div className='flex flex-row justify-center'>
      <div>flex</div>
        <div>direction</div>
        <div>row</div>
        <div>justify</div>
        <div>center</div>
      </div>

      <div className='flex flex-row justify-end'>
        <div>flex</div>
        <div>direction</div>
        <div>row</div>
        <div>justify</div>
        <div>end</div>
      </div>

      <div className='flex flex-row justify-between'>
        <div>flex</div>
        <div>direction</div>
        <div>row</div>
        <div>justify</div>
        <div>space-between</div>
      </div>


      <div className='flex flex-row justify-around'>
        <div>flex</div>
        <div>direction</div>
        <div>row</div>
        <div>justify</div>
        <div>space-around</div>
      </div>

      <div className='flex flex-row h-60'>
        <div>flex</div>
        <div>direction</div>
        <div>row</div>
        <div>height</div>
        <div>bigger than elements</div>
      </div>

      <div className='flex flex-row h-60 justify-center items-center'>
        <div>flex</div>
        <div>direction</div>
        <div>row</div>
        <div>height</div>
        <div>bigger</div>
      </div>
    </>
  );
}
