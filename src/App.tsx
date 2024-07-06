import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import { Sidebar } from './components/Sidebar';
// import { Button } from './components/Button';
// import { Effect } from './components/Effect';
// import { FetchComponent } from './components/Fetch';
// import { SlackComponent } from './components/SlackComponent';
// import { TestComponent } from './components/TestsComponent';

function App() {
  return (
    <>
      <div>
        <Sidebar/>
        <Navbar/>
        <Outlet />
      </div>
    </>
  );
}

export default App;
