import React from 'react';
import ReactDOM from 'react-dom'

//ways of creating component;

//1.VariablePattern
// const Heading = <h1>Hello React!</h1>
// ReactDOM.render(Heading, document.getElementById('root'))

//2.function pattern - es 5 ,arrow

// function Heading() {
//     //component logic
//     return <h1>Hello React!</h1>
// }
//const Heading = () => <h1>Hello React!</h1>
//function call :Imperative 
//ReactDOM.render(Heading(), document.getElementById('root'))

//Function call : Declarative : <Heading>
//ReactDOM.render(<Heading />, document.getElementById('root'))

//Es 6 class Pattern.


class Heading extends React.Component {

    render() {
      return <h1>Hello React!</h1>
    }
}

ReactDOM.render(<Heading />, document.getElementById('root'))