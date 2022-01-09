import logo from './logo.svg';
import './App.css';
import Counter from './useReducer/Counter';
import Memo from './useMemo/Memo';
import Parent from './useCallback/Parent';

function App() {
  return (
    <div className="App">
      <div>
        <h1>useReducer Example</h1>
      <Counter />
        </div> 
        <hr/>
        <div>
          <h1>useMemo Example</h1>
           <Memo />
           </div>
         <hr/>
        <div> 
          <h1>useCallback Example</h1>
          <Parent /></div>
       
    </div>
  );
}

export default App;
