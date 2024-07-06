import { Outlet } from 'react-router-dom';
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
      <div id='App'>
        <Navbar />
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
}

export default App;
