import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import * as Location from 'expo-location';


const App = () => {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    useEffect(() => {
        //write IIFE Function to wrap async...await logic
        (async () => {

            try {
                let { status } = await Location.requestForegroundPermissionsAsync();
                if (status !== 'granted') {
                    setErrorMsg('Permission to access location was denied');
                    return;
                }
                let location = await Location.getCurrentPositionAsync({});
                console.log(location)
                setLocation(location);
            }
            catch (err) {
                console.log('error in getting location')
                console.log(err)
            }

        })()

    }, []);

    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }

    return (<View style={styles.container}>
        <Text style={{ fontSize: 10 }}>{text}</Text>
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
});

export default App;