import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';


class App extends React.Component {
    // state = {
    //     value: '....',
    //     counter: 0
    // }
    state = {
        todos: []
    }
    constructor() {
        super()
        console.log('constructors are called')
    }

    render() {
        const { todos } = this.state;
        console.log('render is called')
        return <View style={styles.container}>
            {/* <Text style={{ fontSize: 50 }}>{this.state.value}</Text>
            <Text style={{ fontSize: 50 }}>{this.state.counter}</Text> */}
            <Text style={{ fontSize: 50 }}>Todos</Text>
            <FlatList
                keyExtractor={(item) => item.id}
                data={todos}
                renderItem={({ item }) => (
                    <Text style={styles.item}>{item.title}</Text>
                )} />
        </View>
    }

    delay() {
        setTimeout(() => {
            this.setState((oldstate) => {
                return Object.assign({}, oldstate, { value: 'Welcome' })
            })
        }, 10000)

        setInterval(() => {
            this.setState((oldstate) => {
                return Object.assign({}, oldstate, { counter: oldstate.counter + 1 })
            })
        }, 1000)
    }
    async componentDidMount() {
        console.log('Componented is mounted')
        //this.delay()
        const url = 'https://jsonplaceholder.typicode.com/todos'
        // fetch(url)
        //     .then(response => {
        //         return response.json()
        //     }).then(todos => {
        //         console.log(todos)
        //         this.setState(oldstate => {
        //             return Object.assign({}, oldstate, { todos })
        //         })
        //     })
        //     .catch(errs => {
        //         console.log(errs)
        //     })
        try {
            const response = await fetch(url);
            const todos = await response.json();
            this.setState(oldstate => {
                return Object.assign({}, oldstate, { todos })
            })
        }
        catch (err) {
            console.log(err)
        }

    }

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