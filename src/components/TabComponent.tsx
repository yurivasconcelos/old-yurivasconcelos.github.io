import { useState } from 'react';

export function TabComponent() {
  const [activeTab, setActiveTab] = useState(1);

  const base =
    'hover:cursor-pointer inline-block px-4 py-1 rounded-md rounded-b-none text-gray-800 hover:text-gray-900 hover:bg-gray-200 ';
  const active = base + 'text-white bg-indigo-800 hover:text-gray-200 hover:bg-indigo-800 active';
  const nonactive = base + 'hover:text-gray-900 dark:hover:text-white';

  return (
    <>
      <div>
        {/* my tab component */}
        <div className='flex'>
          <ul className='flex flex-wrap text-xs font-small text-center'>
            <li className='me-1'>
              <a
                onClick={() => setActiveTab(1)}
                className={`${activeTab == 1 ? active : nonactive} `}
                aria-current='page'>
                Perfil
              </a>
            </li>
            <li className='me-2'>
              <a onClick={() => setActiveTab(2)} className={`${activeTab == 2 ? active : nonactive} `}>
                Adicional
              </a>
            </li>
            <li className='me-2'>
              <a onClick={() => setActiveTab(3)} className={`${activeTab == 3 ? active : nonactive} `}>
                Testes
              </a>
            </li>
            <li>
              <a onClick={() => setActiveTab(4)} className={`${activeTab == 4 ? active : nonactive} `}>
                Tab very long name name name
              </a>
            </li>
          </ul>
        </div>
        <div className='flex flex-col pt-2'>
          <div className='pl-2'>Title</div>
          <div className='pl-2'>Content</div>
        </div>
      </div>
    </>
  );
}
