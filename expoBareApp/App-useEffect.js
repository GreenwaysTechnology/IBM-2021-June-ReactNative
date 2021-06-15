import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, FlatList } from 'react-native';


const App = () => {

    const [todos, setTodos] = useState([])
    const [error, setError] = useState(null)
    const [isLoading, setLoading] = useState(true);
    //or
    //const [responses,setResponse] = useState({todos:[],error:null,isLoading:true})

    //Life cycle hooks: componentDidMount /ComponentDidUpdate
    // useEffect(() => {
    //     // resource initalization
    //     setTimeout(() => {
    //         setLoading(false);
    //     }, 5000)
    //     return () => {
    //         //for clean up resources
    //     }
    // }, [props.something])
    //fetch logic inside useEffect

    // useEffect(() => {
    //     const url = 'https://jsonplaceholder.typicode.com/todos'
    //     // fetch(url)
    //     //     .then(response => response.json())
    //     //     .then(todos => setTodos(todos))
    //     //     .catch((error) => console.error(error))
    //     //     .finally(() => setLoading(false));

    //     fetch(url)
    //         .then(res => res.json())
    //         .then((result) => {
    //             setTodos(result)
    //         },
    //             // Note: it's important to handle errors here
    //             // instead of a catch() block so that we don't swallow
    //             // exceptions from actual bugs in components.
    //             (error) => {
    //                 // this.setState({
    //                 //     isLoaded: true,
    //                 //     error
    //                 // });
    //                 setError(error)
    //             }
    //         ).finally(() => setLoading(false));


    //     return () => {
    //         //for clean up resources
    //     }
    // }, [])
    const init = async () => {
        const url = 'https://jsonplaceholder.typicode.com/todos'
        try {
            const response = await fetch(url)
            const todos = await response.json()
            setTodos(todos);
        }
        catch (error) {
            console.log(error);
            setError(error)
        }
        finally {
            setLoading(false);
        }

    }
    //useEffect async... await
    useEffect(() => {
        //async and await
        //init funciton
        init();
        //unMountPhase :componentWillUnMount
        return () => {

        }
    }, [])


    if (error !== null) {
        return <View style={styles.container}>
            <Text style={{ color: 'red', fontSize: 50 }}>Oops!!
                  </Text>
        </View>
    }

    if (isLoading) {
        return <View style={styles.container}>
            <ActivityIndicator size="large" color="#00ff00" />
        </View>
    }
    return <View style={styles.container}>
        <Text style={{ fontSize: 50 }}>Todos</Text>
        <FlatList
            keyExtractor={(item) => item.id}
            data={todos}
            renderItem={({ item }) => (
                <Text style={styles.item}>{item.title}</Text>
            )} />
    </View>
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

export default App;
