import './App.css';
// import { Button } from './components/Button';
// import { Effect } from './components/Effect';
// import { FetchComponent } from './components/Fetch';
import { SlackComponent } from './components/SlackComponent';
import { TestComponent } from './components/TestsComponent';

function App() {
  return (
    <>
      <div>
        {/* <Button></Button>
        <Effect name={count.toString()}></Effect>
        <FetchComponent></FetchComponent> */}
        <SlackComponent />
        <TestComponent />

      </div>
    </>
  );
}

export default App;
