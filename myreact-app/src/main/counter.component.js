import React, { Component } from 'react'

//state introduction inside class component

export class Counter extends Component {

    //declare state : encasuplate biz data.
    state = {
        value: 0
    }
    //listener method :arrow notation
    onIncrement = () => {
        //increment logic
        // this.setState((previousState, props) => {
        //     //logic ; computation ; return new state
        //     let value = previousState.value + 1
        //     // return {
        //     //     //value: value
        //     //     value
        //     // }
        //     // return Object.assign({}, previousState, { value })
        //     return { ...previousState, value };
        // })
        let value = this.state.value + 1
        this.setState({ value })
    }

    render() {
        return <>
            <h2>Counter {this.state.value}</h2>
            <button className="btn btn-success" onClick={this.onIncrement} >+</button>
            <button className="btn btn-success" onClick={() => {
                let value = this.state.value - 1
                this.setState({ value })
            }} >-</button>
        </>

    }
}