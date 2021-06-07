import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import { Heading } from './header' // ./folder
import './App.css'
import { Counter } from './main/counter.component'

const App = () => {
    return <div className="container">
        <Heading />
        <h1>State Binding</h1>
        <Counter />

    </div>
}


render(<App />, document.getElementById('root'))