import React, { Profiler } from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import { Heading } from './header' // ./folder
import './App.css'
import { Profile } from './main/profile.component'

const firstName = "Subramanian"
const lastName = 'Murugan';
const city = "Coimbatore";
const state = "Tamil nadu";
const active = true;
const likes = 100;
const contact = {
    email: 'admin@foo.com',
    phone: '9003706368'
}

const App = () => {
    return <div className="container">
        <Heading />
        <h1>Property Binding</h1>
        <Profile
            firstName={firstName} 
            lastName={lastName}
            city={city} state={state}
            active={active}
            likes={likes}
            contact={contact}
        />
    </div>
}


render(<App />, document.getElementById('root'))