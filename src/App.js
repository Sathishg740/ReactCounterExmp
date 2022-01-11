import logo from './logo.svg';
import './App.css';
import Counter from './useReducer/Counter';
import Memo from './useMemo/Memo';
import Parent from './useCallback/Parent';
import CustomHook from './customHooks/CustomHook';
import CustomHook1 from './customHooks/CustomHook1';

function App() {
  return (
    <div className="App">
      {/* <div>
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
          <Parent /></div> */}
          <CustomHook />
          <CustomHook1 />
    </div>
  );
}

export default App;
