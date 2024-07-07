import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <>
      <div className='flex flex-col h-screen'>
        <Navbar />
        <div className='flex flex-row flex-grow mt-8'>
          <Sidebar />
          <main className='flex-1 overflow-y-auto p-5'>
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
