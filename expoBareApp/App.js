import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { createStore, combineReducers } from 'redux'
import { connect, Provider } from 'react-redux'

//how to pass input to the reducer.
// action object has another property {type:'INPUT',payload:'inputvalue'}
const InputReducer = (state = { text: 'foo' }, action) => {
    switch (action.type) {
        case 'INPUT':
            return Object.assign({}, state, { text: action.payload })

        default:
            return state;
    }
};
const rootReducer = combineReducers({
    InputReducer
})
const store = createStore(rootReducer);

const mapStateToProp = appState => {
    console.log(appState.InputReducer)
    return {
        text: appState.InputReducer.text
    }
}

//action creator
function sendAction(input) {
    return {
        type: 'INPUT',
        payload: input
    }
}

const InputComponent = props => {
    const [text, setText] = useState('defaultText')

    const onSend = () => {
        props.dispatch(sendAction(text));
        setText('')
    }
    return <View style={styles.container}>
        <Text style={{ fontSize: 25 }}>Hello {props.text}</Text>
        <TextInput
            style={{ height: 40, backgroundColor: 'yellow' }}
            placeholder="Type Text Here..."
            value={text}
            onChangeText={text => setText(text)}
        />
        <Button onPress={onSend} title="Send Input" />
    </View>
}
const InputContainer = connect(mapStateToProp)(InputComponent);



const App = () => {
    return <Provider store={store}>
        <InputContainer />
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


