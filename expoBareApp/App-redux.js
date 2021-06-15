import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import { createStore } from 'redux'

//reducer
function CommentsReducer(comment = { like: 0, dislike: 10 }, action) {
    switch (action.type) {
        case 'LIKE':
            //Write like logic: must be immutable
            return Object.assign({}, comment, { like: comment.like + 1 })
        case 'DISLIKE':
            //Write dislike logic
            return Object.assign({}, comment, { dislike: comment.dislike + 1 })
        default:
            //default value
            return comment;
    }
}
//create store object
const store = createStore(CommentsReducer)

//subscribe for new state
store.subscribe(function () {
    console.log(store.getState())
})
//send request
const likeaction = {
    type: 'LIKE'
}
const dislikeaction = {
    type: 'DISLIKE'
}
store.dispatch(likeaction)
store.dispatch(likeaction)
store.dispatch(likeaction)
store.dispatch(dislikeaction)
store.dispatch(dislikeaction)
store.dispatch(dislikeaction)




const App = () => {

    return <View style={styles.container}>
        <Text>Redux</Text>
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