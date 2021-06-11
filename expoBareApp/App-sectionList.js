import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, SectionList } from 'react-native';
import { DISHES } from './mock-data/dishes'

const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);
const App = () => {
    return <SectionList
        sections={DISHES}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item title={item} />}
        renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
        )}
    />
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        marginHorizontal: 16
    },
    item: {
        backgroundColor: "#f9c2ff",
        padding: 20,
        marginVertical: 8
    },
    header: {
        fontSize: 32,
        backgroundColor: "#fff"
    },
    title: {
        fontSize: 24
    }
});