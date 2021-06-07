import React, { Component } from 'react'

//how to access props inside class component.

export class ControlPanel extends Component {

    render() {
        console.log(this.props)
        const { userName, password } = this.props
        return <>
            <h1>Control Panel</h1>
            <div className="card">
                <p>User :  {userName}</p>
                <p>Password :  {password}</p>

            </div>
        </>
    }
}
ControlPanel.defaultProps = {
    userName: 'username',
    password: 'password'
}