import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import { Heading } from './header' // ./folder
import './App.css'

//data variables
//component =  static markup + data =>data binding

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

const DashBoard = () => {

    return <div className="container">
        <Heading />
        <h1>Data Binding</h1>
        <p>Name : {firstName}</p>
        <p>age : {age}</p>
        <p>IsActive : {isActive ? "Active" : "InActive"}</p>
        <address>
            {address.city} {","} {address.state}
        </address>
        <h3>Skills</h3>
        <ul className="list-group">
            {
                // skills.map((skill, index) => {
                //     return <li key={index} >{skill.name}</li>
                // })
                skills.map((skill, index) => <li
                    className="list-group-item list-group-item-action" key={index} >{skill.name}</li>)

            }
        </ul>
        <div className="row">
            <div className="col">
                {
                    skills.map((skill, index) =>
                        <div key={index} className="card card-body">
                            <span>{skill.name}</span>
                        </div>)
                }

            </div>
        </div>

    </div>
}

render(<DashBoard />, document.getElementById('root'))