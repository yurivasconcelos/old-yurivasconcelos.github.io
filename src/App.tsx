import './App.css';
// import { Button } from './components/Button';
// import { Effect } from './components/Effect';
// import { FetchComponent } from './components/Fetch';
import { SlackComponent } from './components/SlackComponent';

function App() {

  return (
    <>
      <div className='w-full'>
        {/* <Button></Button>
        <Effect name={count.toString()}></Effect>
        <FetchComponent></FetchComponent> */}
        <SlackComponent/>
      </div>
    </>
  );
}

export default App;
