import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

//Steps
//1.Redux - Actions,Action constants Reducer,store, mapper function
//2.ReactNative -  Component
//3.ReactNative + Redux integration  = connect

//Action constants
const LIKE = 'LIKE'
const DISLIKE = 'DISLIKE';

//actions
const likeAction = {
    type: LIKE
}
const dislikeAction = {
    type: DISLIKE
}
//reducer
const CommentsReducer = (comment = { like: 10, dislike: 10 }, action) => {
    switch (action.type) {
        case LIKE:
            //Write like logic: must be immutable
            return Object.assign({}, comment, { like: comment.like + 1 })
        case DISLIKE:
            //Write dislike logic
            return Object.assign({}, comment, { dislike: comment.dislike + 1 })
        default:
            //default value
            return comment;
    }
}
const appStore = createStore(CommentsReducer)
/////////////////////////////////////////////////////////////////////////////////////
//Mapper function

function mapStateToProp(comment) {
    //must return object;mapper object 
    // key of the object will be prop to the component
    // value of the object would be state of the redux
    // return {
    //    comment:comment
    // }
    return {
        comment
    }
}
/////////////////////////////////////////////////////////////////////////////////////
//View Layer: ReactNative Component
const Comment = props => {
    const onIncrement = () => {
        props.dispatch(likeAction)
    }
    return <View style={styles.container}>
        <Text style={{ fontSize: 50, color: 'red' }}>
            Like {props.comment.like} Dislike {props.comment.dislike}
        </Text>
        <Button onPress={onIncrement} title="+" />
        <Button onPress={() => {
            props.dispatch(dislikeAction)
        }} title="-" />

    </View>
}

//integration redux mapper function with ReactNative component
const CommentContainer = connect(mapStateToProp)(Comment)

//App
const App = () => {
    return <Provider store={appStore}>
        <CommentContainer />
    </Provider>
}
export default App;

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


