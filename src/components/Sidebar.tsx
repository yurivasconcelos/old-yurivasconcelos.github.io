import { Link } from 'react-router-dom';

export function Sidebar() {
  return (
    <div className='invisible w-0 lg:w-72 pl-8 lg:visible bg-slate-200'>
      
      <div className='pt-8 w-40'>
        <Link to={`formgrid`}>FormsGrid</Link>
      </div>

      <div className='pt-4 w-40'>
        <Link to={`test`}>test</Link>
      </div>

      <div className='pt-4'>
        <Link to={`new`}>new component</Link>
      </div>
      
      <div className='pt-4'>
        <Link to={`tab`}>tabs</Link>
      </div>
    </div>
  );
}
