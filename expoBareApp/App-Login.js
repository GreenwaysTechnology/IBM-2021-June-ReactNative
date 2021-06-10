//statefull component
import React from 'react';
import { View, StyleSheet } from 'react-native'
import { Login } from './components';

const App = () => <View style={container}>
      <Login/>
</View>

const { text, container } = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
    }
})

export default App;