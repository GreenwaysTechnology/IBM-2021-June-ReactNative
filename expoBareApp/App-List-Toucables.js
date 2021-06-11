//Flat List
import React, { useState } from 'react';
import { Alert, FlatList, TouchableHighlight, StyleSheet, Text, View } from 'react-native'
import { photos } from './mock-data/photos';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        flex: 1,
        marginHorizontal: 10,
        marginTop: 25,
        padding: 30,
        backgroundColor: 'pink',
        fontSize: 24
    }
})

const App = () => {
    const [myphotos, setMyPhotos] = useState(photos);

    //normal method
    const onPressItem = (item) => {
        Alert.alert(item.title)
    }

    return <View style={styles.container}>
        <FlatList
            keyExtractor={(item) => item.id}
            data={myphotos}
            renderItem={({ item,separators }) => {
                console.log(item)
                return <TouchableHighlight
                    key={item.key}
                    onPress={() => onPressItem(item)}
                    onShowUnderlay={separators.highlight}
                    onHideUnderlay={separators.unhighlight}>
                    <View style={styles.item}>
                        <Text>{item.title}</Text>
                    </View>
                </TouchableHighlight>
            }}

        />
    </View>
}
export default App;