import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import * as Contacts from 'expo-contacts';


export default function App() {
    const [names, setNames] = useState([])

    useEffect(() => {
        (async () => {
            const { status } = await Contacts.requestPermissionsAsync();
            if (status === 'granted') {
                //will Return ContactResponse ; data; hasNextPage,hasPreviousNext
                const contactResponse = await Contacts.getContactsAsync();
                //ContactResponse has data property which will return arrayof contact
                const contactList = contactResponse.data;
                //console.log(contactList);
                setNames(contactList)
           
            }
        })();
    }, []);

    return (
        <View style={styles.container}>
            <FlatList keyExtractor={(item) => item.id} data={names}
                renderItem={({ item }) => {
                    return (<Text style={styles.item}>{item.firstName}</Text>)
                }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        flex: 1,
        marginHorizontal: 10,
        marginTop: 25,
        padding: 30,
        backgroundColor: 'pink',
        fontSize: 24
    }
});
