import { Outlet } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import { Sidebar } from './components/Layout/Sidebar';
import { Bottom } from './components/Layout/Bottom';
import { useLocation } from 'react-router-dom';
import { TooltipProvider } from './components/@shadcn/tooltip';
import { Toaster } from './components/@shadcn/sonner';

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
            <Sidebar />
            <main className='flex-1 overflow-y-auto sm:ml-64 p-5'>
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
