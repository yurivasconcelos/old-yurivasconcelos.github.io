export function NewComponent({ hash }: { hash: string }) {
  const selected = 'text-indigo-500 border-indigo-500 border-b-2  p-2';
  const unselected = 'text-slate-500 hover:text-slate-600 rounded-lg p-2 hover:bg-gray-100';
  return (
    <>
      <div>
        <div className='bottom-0 w-full' aria-hidden='true'></div>
        <ul className='text-sm font-medium flex flex-wrap -mx-4 sm:-mx-6 lg:-mx-8'>
          <li className=''>
            <a
              className={`pb-3 ${hash == '' || hash == '#profile' ? selected : selected}`}
              href='#profile'>
              Geral
            </a>
          </li>
          <li className='mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8'>
            <a className={` ${hash == '#details' ? selected : unselected}`} href='#details'>
              Detalhes
            </a>
          </li>
          <li className='mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8'>
            <a className={`${hash == '#settings' ? selected : unselected}`} href='#settings'>
              Configurações
            </a>
          </li>
        </ul>
      </div>
      <div className='flex flex-col shadow-sm pt-2'>
        <div className='pl-4'>Title</div>
        <div className='pl-4'>Content</div>
      </div>
    </>
  );
}
