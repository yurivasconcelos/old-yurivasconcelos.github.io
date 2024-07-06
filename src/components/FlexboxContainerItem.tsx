// https://jonitrythall.com/content/flexboxsheet.pdf
//https://v1.tailwindcss.com/components/flexbox-grids

export function FlexboxContainerItem() {
    return (
      <>
        <div className='flex justify-center items-center content-center h-60 w-60 bg-slate-500'>
          <div className='flex h-32'>1</div>
          <div className='flex h-32 flex-col justify-center'>
            <div>2</div>
            <div>3</div>
          </div>
        </div>
      </>
    );
  }
  