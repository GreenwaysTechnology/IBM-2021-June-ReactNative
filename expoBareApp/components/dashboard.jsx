import { Text, View, StyleSheet } from 'react-native'
import React from 'react'
import { Name } from './'

//Name Component
export const DashBoard = ({ age, status, name }) => <View>
    <Name name={name} />
    <Text style={text}>
        Age : {age}
    </Text>
    <Text style={text}>
        Status : {status ? 'Active' : 'InActive'}
    </Text>
</View>

DashBoard.defaultProps = {
    age: 18,
    status: false
}
//add prop validation: age should be number

const { text } = StyleSheet.create({
    text: {
        color: "red",
        textAlign: "center",
        marginTop: 30,
        marginLeft: 10,
        backgroundColor: "#eaeaea"
    }
})