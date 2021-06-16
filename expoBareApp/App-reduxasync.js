
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { connect, Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; //thunk is async middleware

const INCREMENT = 'INCRMENT';
const FINDALL = 'FINDALL'

const CounterReducer = (state = 0, action) => {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        default:
            return state
    }
}

const TodoReducer = (state = [], action) => {
    switch (action.type) {
        case FINDALL:
            return state.concat(action.todos)
        default:
            return state;
    }
}

const rootReducer = combineReducers({ CounterReducer, TodoReducer })

//middleware Greeter.
const GreeterMiddleware = store => {
    return next => {
        return action => {
            // your middleware-specific code goes here
            console.info(`Welcome to React Native`);
            return next(action);
        }
    }
};
const Logger = store => next => action => {
    // your middleware-specific code goes here
    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    return result
};

//async middlware ; using timers

//ACTION CREATOR
function increment() {
    return {
        type: INCREMENT,
    };
}
//Middlware
function incrementAsync() {
    return (dispatch) => {
        //async apis ; it could be timer or fetch or websocket
        setTimeout(() => {
            // Yay! Can invoke sync or async actions with `dispatch`
            dispatch(increment());
        }, 5000);

    };
}

function findAllTodos() {
    return function (dispatch) {
        const url = 'https://jsonplaceholder.typicode.com/todos'
        fetch(url).then(res => res.json()).then(todos => {
            dispatch({
                type: FINDALL,
                todos
            })
        });
    }

}


const middlewareConfig = applyMiddleware(GreeterMiddleware, Logger, thunk);

const store = createStore(rootReducer, middlewareConfig)

const Counter = props => {
    return <View style={styles.container}>
        <Text style={{ fontSize: 20, color: 'darkblue' }}>Redux Middlewares</Text>
        <Text style={{ fontSize: 20, color: 'darkblue' }}>{props.counter}</Text>
        <Button title="+" onPress={() => {
            //sync dispatch
            // props.dispatch({ type: INCREMENT })
            //async dispatch
            props.dispatch(incrementAsync())
        }} />
    </View>
}
const mapStateToProp = (state) => {
    return {
        counter: state.CounterReducer
    }
}

const CounterContainer = connect(mapStateToProp)(Counter)

//mapper function for todo

const todoMapper = (state) => {
    return {
        todos: state.TodoReducer
    }
}
const Todo = props => {

    console.log(props.todos)
    return <View>
        <Text>Todos</Text>
        <Button title='FetchTodos' onPress={
            props.dispatch(findAllTodos())
        } />
    </View>
}

const TodoContainer = connect(todoMapper)(Todo)

const App = () => {
    return <Provider store={store}>
        <View style={styles.container}>
            <CounterContainer />
            <TodoContainer />
        </View>
    </Provider>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default App;


