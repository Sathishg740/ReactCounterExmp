import React from 'react'

function CustomHook1() {
    const timer = useNewTimer(new Date());
    return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {timer.toLocaleTimeString()}.</h2>
        </div>
        
    )
}

const useNewTimer = (currentDate) => {
    const [date, setDate] = React.useState(currentDate);
    
    React.useEffect(() => {
      var timerID = setInterval( () => tick(), 1000 );
      return function cleanup() {
          clearInterval(timerID);
        };
     });
    
    function tick() {
      setDate(new Date());
     }
    
    return date;
  }

export default CustomHook1

