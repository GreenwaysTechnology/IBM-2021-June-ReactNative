import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column-reverse', //column,column-reverse,row-reverse
        backgroundColor: 'brown',
        paddingTop: 50,

    },
});

const App = () => {

    {/**container */ }
    return <View style={styles.container}>
        <View style={{
            backgroundColor: 'yellow', width: 50, height: 50, marginLeft: 50
        }}>
            <Text>Box-1</Text>
        </View>
        <View style={{
            marginLeft: 50
            , backgroundColor: 'pink', width: 50, height: 50
        }}>
            <Text>Box-2</Text>
        </View>
        <View style={{
            marginLeft: 50
            , backgroundColor: 'lightblue', width: 50, height: 50
        }}>
            <Text>Box-3</Text>
        </View>
    </View>

}
export default App;