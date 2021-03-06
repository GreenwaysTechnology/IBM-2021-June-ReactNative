import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import { Heading } from './header' // ./folder
import './App.css'
import { CounterHook } from './main/counter.hooks.component'

const App = () => {
    return <div className="container">
        <Heading />
        <h1>State Binding</h1>
        <CounterHook />

    </div>
}


render(<App />, document.getElementById('root'))