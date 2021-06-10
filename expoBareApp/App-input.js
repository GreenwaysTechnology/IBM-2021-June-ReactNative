//statefull component
import React from 'react';
import { View, StyleSheet } from 'react-native'
import { Input } from './components';

const App = () => <View style={container}>
      <Input/>
</View>

const { text, container } = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
    }
})

export default App;