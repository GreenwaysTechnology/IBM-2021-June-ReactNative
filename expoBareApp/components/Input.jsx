import React, { useState } from 'react';
import { Text, TextInput, StyleSheet, View } from 'react-native'


export const Input = props => {
    const [text, setText] = useState('')
    return <View style={{ padding: 10 }}>
        <Text>Enter Something</Text>
        <TextInput
            style={{ height: 40, backgroundColor: 'yellow' }}
            placeholder="Type Text Here..."
            onChangeText={text => setText(text)}
        />
        <Text style={{ padding: 10, fontSize: 42, fontStyle: 'italic' }}>
            {text}
        </Text>
    </View>
}