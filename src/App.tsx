import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <div className='flex flex-col h-screen'>
        <Navbar />
        <main className='flex-1 overflow-y-auto p-5'>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
