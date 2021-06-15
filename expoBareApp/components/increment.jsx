import { incrementAction } from '../actions'
import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native'


export const Increment = props => {
    const onIncrement = () => {
        props.dispatch(incrementAction)
    }
    return <View style={styles.container}>
        <Text>Value {props.inc.incvalue}</Text>
        <Button onPress={onIncrement} title="+" />
    </View>
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});