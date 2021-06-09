import React, { useState } from 'react'
import { Text, Button, StyleSheet, Alert } from 'react-native'

//container component
export const Counter = ({ seedValue }) => {
    //useState Hook to increment value
    const [counter, setCounter] = useState(seedValue);
    //listener code
    const onIncrement = () => {
        setCounter(counter + 1)
        Alert.alert('Counter has been updated')
    }

    return <CounterDisplay counter={counter} onIncrement={onIncrement} />
}

//Presentational Component
export const CounterDisplay = props => {
    const { counter, onIncrement } = props;
    return <>
        <Text style={text}>Counter {counter}</Text>
        <Button
            title="Increment"
            color="#f194ff"
            onPress={onIncrement}
        />
    </>
}


const { text } = StyleSheet.create({
    text: {
        padding: 24,
        fontSize: 25,
        fontWeight: 'bold'
    }
})