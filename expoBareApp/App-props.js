import React from 'react';
import { View, StyleSheet } from 'react-native'
// import { Name, DashBoard } from './components'
import { DashBoard } from './components'


const age = 29;
const status = true;
const name = "Subramanian"

const App = (props) => {
    return <View style={container}>
        {/* <Name name="Subramanian" />
        <Name name="Geetha" />
        <Name /> */}
        <DashBoard age={age} name={name} status={status} />
        <DashBoard age={age} name={name} status={status} />
        <DashBoard age={age} name={name} status={status} />
        <DashBoard age={age} name={name} status={status} />

    </View>
}

const { text, container } = StyleSheet.create({
    container: {
        backgroundColor: "pink"
    }
})

export default App;