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
        <nav>
          <ul>
            <li>
              <Link to={`test`}>Test Component</Link>
            </li>
            <li>
            <Link to={`slack`}>Slack Message</Link>
            <Link to={`slack/:1`}>Slack Message</Link>
            </li>

          </ul>
        </nav>
        {/* where I wanna render the components */}
        <Outlet />
      </div>
    </>
  );
}

export default App;
