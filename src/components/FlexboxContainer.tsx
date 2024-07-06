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
    </>
  );
}
