import React, { useState } from 'react';
import { Text, TextInput, StyleSheet, View, Button, Alert } from 'react-native'


export const Login = props => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    //validate listener
    const validate = (evt) => {
        if (userName === 'admin' && password === 'admin') {
            Alert.alert("Login Success")
        } else {
            Alert.alert("Login Failed")
        }
    }

    return <View style={{ padding: 10 }}>
        <Text>User Name</Text>
        <TextInput
            style={{ height: 40, backgroundColor: 'yellow' }}
            placeholder="User Name"
            onChangeText={userName => setUserName(userName)}
        />
        <Text>Password</Text>
        <TextInput
            style={{ height: 40, backgroundColor: 'pink' }}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={password => setPassword(password)}
        />
        <Button
            title="SignIn"
            color="#f194ff"
            onPress={validate}
        />
    </View>
}