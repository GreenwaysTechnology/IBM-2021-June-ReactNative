import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import { Heading } from './header' // ./folder
import './App.css'
import { ControlPanel } from './main';

const userName = "admin"
const password = "admin"

const App = () => {
    return <div className="container">
        <Heading />
        <h1>Property Binding</h1>
        <ControlPanel userName={userName} password={password} />
        <ControlPanel  />

    </div>
}


render(<App />, document.getElementById('root'))