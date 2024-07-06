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
        <p>Loaded!</p>
        <nav>
          <ul>
            <li>
              <a href={`/test`}>Test</a>
            </li>
            <li>
              <a href={`/slack`}>Slack</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default App;
