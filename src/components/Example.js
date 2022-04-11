import React, { useReducer } from 'react';

const reducer = (state,action) => {
    switch (action.type) {
        case "SAVE":
            return state + action.inputMoney;
        case "OUTPUT":
            return state - action.outputMoney;
        default:
            return state;
    }
}

const Example = () => {
    const[state,dispatch] = useReducer(reducer, 100);

    const save = () => {
      dispatch({
        type: "SAVE",
        inputMoney: 100,
      });
    };

    const out = () => {
      dispatch({
        type: "OUTPUT",
        outputMoney: 50,
      });
    };
    return(
        <div>
            {state}
            <button onClick={save}>save</button>
            <button onClick={out}>out</button>            
        </div>
    ) 
}

export default Example;