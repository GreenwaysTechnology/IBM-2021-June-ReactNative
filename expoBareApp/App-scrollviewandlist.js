import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native'
import { USERS } from './mock-data/users';

const logo = {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    width: 64,
    height: 64
}

const App = () => {

    return <ScrollView>
        <Text style={{ fontSize: 96 }}>UsersList</Text>
        {
            USERS.map((user, index) => {
                return <Text style={{ fontSize: 50 }}>{user.name}</Text>
            })
        }
    </ScrollView>
}

export default App;