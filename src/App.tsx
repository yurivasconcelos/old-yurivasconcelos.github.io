import { Outlet } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import { Sidebar } from './components/Layout/Sidebar';

function App() {
  return (
    <>
      <div className='flex flex-col h-screen'>
        <Navbar />
        <div className='flex flex-row flex-grow mt-16'>
          <Sidebar />
          <main className='flex-1 overflow-y-auto sm:ml-64 p-5'>
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
