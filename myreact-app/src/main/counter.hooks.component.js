import React, { useState } from 'react';


export const CounterHook = props => {
    //const [counter,setCounter] = useState({ value: 0 })
    const [counter, setCounter] = useState(0)
    //listeners
    // function onIncrement() {
    //     setCounter(counter + 1);
    // }
    const onIncrement = () => {
        setCounter(counter + 1)
    }
    const onDecrement = () => {
        setCounter(counter - 1)
    }

    return <>
        {/**dynamic props , function as prop */}
        <CounterChild counter={counter} onIncrement={onIncrement} onDecrement={onDecrement} />
    </>
}

const CounterChild = ({ counter, onIncrement, onDecrement }) => {
    return <>
        <h2>Counter Using Hooks</h2>
        <h3>Counter  {counter}</h3>
        <button className="btn btn-success" onClick={onIncrement} >+</button>
        <button className="btn btn-success" onClick={onDecrement}  >-</button>
    </>
}
