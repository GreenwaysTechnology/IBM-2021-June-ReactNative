import { Text, StyleSheet } from 'react-native'
import React from 'react'

//Name Component
export const Name = props => <>
    <Text style={text}>Name {props.name}</Text>
</>
Name.defaultProps = {
    name: 'Please Add Name'
}

const { text } = StyleSheet.create({
    text: {
        color: "red",
        textAlign: "center",
        marginTop: 30,
        marginLeft: 10,
        backgroundColor: "#eaeaea"
    }
})