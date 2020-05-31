import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import Colors from '../../../constants/Colors';

const SensesList = ({ data }) => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Senses</Text>
            </View>
            <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.itemContainer}>
                            <Text style={styles.text}>{item}</Text>
                        </View>
                    );
                }}
            />
        </View>
    );
};

export default SensesList;

const styles = StyleSheet.create({
    container: {
        flex: 3,
    },
    titleContainer: {
        alignItems: 'center',
    },
    title: {
        color: 'white',
        fontSize: 18,
    },
    itemContainer: {
        marginHorizontal: 5,
        marginTop: 5,
        borderBottomWidth: 1,
        borderBottomColor: Colors.darkBrown,

    },
    text: {
        color: 'white',
        paddingBottom: 1,
    },
});
