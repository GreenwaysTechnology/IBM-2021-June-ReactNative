//statefull component
import React from 'react';
import { View, StyleSheet } from 'react-native'
import { Counter } from './components'

const App = () => <View style={container}>
    <Counter seedValue={10} />
    <Counter seedValue={8} />
    <Counter seedValue={0} />

</View>

const { text, container } = StyleSheet.create({
    container: {
        backgroundColor: "pink",
        flex: 1,
        padding: 24,
    }
})

export default App;