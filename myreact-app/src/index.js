import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import { Heading } from './header' // ./folder
import './App.css'
import { DashBoard } from './main/dashboard.component';

const firstName = "Subramanian";
const age = 18
const isActive = true;
const address = {
    city: 'Coimbatore',
    state: 'Tamil Nadu'
}
const skills = [
    {
        id: 1,
        name: 'Javascript'
    },
    {
        id: 2,
        name: 'React'
    },
    {
        id: 3,
        name: 'Kotlin'
    },
    {
        id: 4,
        name: 'Java Micro services'
    },
]

const App = () => {
    return <div className="container">
        <Heading />
        <h1>Property Binding</h1>
        {/* {DashBoard("Subramanian")}  */}
        {/** calling dashBoard - Dashboard() */}
        <DashBoard firstName={firstName} age={age} isActive={isActive} address={address} skills={skills} />

        <DashBoard firstName={firstName} age={age} isActive={isActive} address={address} skills={skills} />

        <DashBoard />
    </div>
}


render(<App />, document.getElementById('root'))