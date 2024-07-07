import { useState } from 'react';

export function NewComponent() {
  const [activeTab, setActiveTab] = useState(1);

  const base =
    'inline-block px-4 py-1 rounded-md rounded-b-none text-gray-800 hover:text-gray-900 hover:bg-gray-200 dark:hover:text-white ';
  const active = base + 'text-white bg-indigo-800 hover:text-gray-200 hover:bg-indigo-800 active';
  const nonactive = base + 'hover:text-gray-900 dark:hover:text-white';

  return (
    <>
      <div className='flex flex-col min-h-72'>
        <div >
          <ul className='flex flex-wrap sm:text-sm text-md font-small text-center'>
            <li className='me-1'>
              <a
                onClick={() => setActiveTab(1)}
                href='#'
                className={`${activeTab == 1 ? active : nonactive} `}
                aria-current='page'>
                Perfil
              </a>
            </li>
            <li className='me-2'>
              <a href='#' onClick={() => setActiveTab(2)} className={`${activeTab == 2 ? active : nonactive} `}>
                Adicional
              </a>
            </li>
            <li className='me-2'>
              <a href='#' onClick={() => setActiveTab(3)} className={`${activeTab == 3 ? active : nonactive} `}>
                Testes
              </a>
            </li>
            <li>
              <a href='#' onClick={() => setActiveTab(4)} className={`${activeTab == 4 ? active : nonactive} `}>
                Tab very long name name name
              </a>
            </li>
          </ul>
        </div>
        <div className='flex flex-col pt-2 border-2 border-gray-200 rounded-lg border-t-0 shadow'>
          <div className='pl-2'>Title</div>
          <div className='pl-2 '>Content</div>
        </div>
      </div>
    </>
  );
}
