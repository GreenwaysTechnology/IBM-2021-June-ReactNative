import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

//create StacKNavigator object
// const Stack = createStackNavigator();
const { Navigator, Screen } = createStackNavigator()

//Home screen Component
const Home = props => {
    console.log(props)
    return <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button title="Go to Details" onPress={() => props.navigation.navigate('Details')} />

    </View>
}
const DetailsScreen = props => {
    const { route } = props
    return (
        <View style={styles.container}>
            <Text>Details Screen</Text>
            <Text>Details Screen : {route.params.id} - {route.params.item}</Text>

            <Button
                title="Go to Details... again"
                onPress={() =>
                    // props.navigation.push('Details', {
                    //     id: Math.floor(Math.random() * 100),
                    // })}
                    props.navigation.setParams({ id: 900, item: 'foo' })
                }
            />
            <Button title="Go to Home" onPress={() => props.navigation.navigate('Home')} />
            <Button title="Go back" onPress={() => props.navigation.goBack()} />
        </View>
    );
}

//Navigation rules

// const App = () => <NavigationContainer>
//     <Stack.Navigator>
//         <Stack.Screen name="Home" component={Home} />
//     </Stack.Navigator>
// </NavigationContainer>

const App = () => <NavigationContainer >
    <Navigator initialRouteName="Home">
        <Screen name="Home" component={Home} options={{ title: 'Welcome to Start Token' }}>

        </Screen>
        <Screen name="Details"  component={DetailsScreen} initialParams={{ id: 1, item: 'React Native v2' }} />
    </Navigator>
</NavigationContainer>
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default App;
