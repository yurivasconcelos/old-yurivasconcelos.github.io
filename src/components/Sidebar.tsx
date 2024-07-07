import { Link } from 'react-router-dom';

export function Sidebar() {
  return (
    <div className='invisible w-0 lg:w-72 lg:visible bg-slate-200'>
      <div className='pl-4 pt-2 w-40'>
        <Link to={`formgrid`}>FormsGrid</Link>
      </div>
      <div className='pl-4 pt-2 w-40'>
        <Link to={`test`}>test</Link>
      </div>
    </div>
  );
}
