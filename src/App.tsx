import { Outlet } from 'react-router-dom';
import Navbar from './pages/Layout/Navbar';
import { Sidebar } from './pages/Layout/Sidebar';
import { Bottom } from './pages/Layout/Bottom';
import { useLocation } from 'react-router-dom';
import { TooltipProvider, Toaster } from './@shadcn';

function App() {
  const location = useLocation();
  console.log(location.key);

  return (
    <>
      <TooltipProvider>
        <Toaster />
        <div className='flex flex-col h-screen'>
          <Navbar />
          <div className='flex flex-row flex-grow mt-16'>
            <aside id='sidebar' className='fixed z-1 w-64 h-screen transition-transform -translate-x-full md:translate-x-0' aria-label='Sidebar'>
              <Sidebar />
            </aside>
            <main className='flex-1 overflow-y-auto pb-20 md:mb-0 md:ml-64 p-5'>
              <Outlet />
            </main>
            <footer className='md:hidden'>
              <Bottom />
            </footer>
          </div>
        </div>
      </TooltipProvider>
    </>
  );
}

export default App;
