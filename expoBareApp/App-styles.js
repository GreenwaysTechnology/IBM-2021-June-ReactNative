import { Text, View, StyleSheet } from 'react-native'
import React from 'react';

// const App = (props) => {
//     return <View>
//         <Text>Hello ReactNative</Text>
//         <Text>Hello ReactNative</Text>
//         <Text>Hello ReactNative</Text>
//         <Text>Hello ReactNative</Text>
//     </View>
// }
// const App = (props) => {
//     return <>
//         <Text style={styles.text} >Hello ReactNative</Text>
//         <Text style={styles.text}>Hello ReactNative</Text>
//         <Text style={styles.text}>Hello ReactNative</Text>
//         <Text style={styles.text}>Hello ReactNative</Text>
//     </>
// }

// const styles = StyleSheet.create({
//     text: {
//         color: "red",
//         textAlign: "center",
//         marginTop: 30,
//         marginLeft: 10,
//         backgroundColor: "#eaeaea"
//     }
// })

const App = (props) => {
    return <>
        <Text style={text} >Hello ReactNative</Text>
        <Text style={text}>Hello ReactNative</Text>
        <Text style={text}>Hello ReactNative</Text>
        <Text style={text}>Hello ReactNative</Text>
        <Text style={{
            color: "red",
            textAlign: "center",
            marginTop: 30,
            marginLeft: 10,
            backgroundColor: "#eaeaea"
        }}>Hello ReactNative</Text>

    </>
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




export default App;