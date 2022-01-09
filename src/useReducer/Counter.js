import React, { useReducer } from 'react'
let initialState=1; 
let reducer=(prevState,action)=>{
    switch(action.type){
        case "add":
            return prevState+5;
        case "sub":
            return prevState-5;
        case "reset":
            return prevState=0;
    }
}
 function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <p>Counter : {state} </p>
            <button onClick={()=> dispatch({type: "add"})}>Add</button>
            <button onClick={()=> dispatch({type: "sub"})}>subtract</button>
            <button onClick={()=> dispatch({type: "reset"})}>Reset</button>
        </div>
    )
}

export default Counter

