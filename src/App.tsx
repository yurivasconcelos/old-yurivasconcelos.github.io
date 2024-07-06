import { Link, Outlet } from 'react-router-dom';
import './App.css';
// import { Button } from './components/Button';
// import { Effect } from './components/Effect';
// import { FetchComponent } from './components/Fetch';
// import { SlackComponent } from './components/SlackComponent';
// import { TestComponent } from './components/TestsComponent';

function App() {
  return (
    <>
      <div>
        <Link to={`test`}>Test Component</Link><br/>
        <Link to={`slack`}>Slack Message</Link><br/>
        <Link to={`signin`}>Sign in</Link><br/>
        <Link to={`forms`}>Forms</Link><br/>

        <Outlet />
      </div>
    </>
  );
}

export default App;
