import React from 'react';
import { StyleSheet, Stylesheet, Text, View } from 'react-native';


const App = () => {
    return <View style={styles.container}>
        <View style={
            { flex: 3, backgroundColor: "red" }
        }>
        </View>
        <View style={
            { flex: 3, backgroundColor: "darkblue" }
        }></View>
        <View style={
            { flex: 1, backgroundColor: "green" }
        }></View>
    </View>
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white',
        flexDirection: "column"

    }
})

export default App;