import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Colors from '../../constants/Colors';

const SensesList = () => {
    const SENSES = ['Low-light Vision'];
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Senses</Text>
            </View>
            {SENSES.map(sense => (
                <View style={styles.itemContainer}>
                    <Text style={styles.text}>{sense}</Text>
                </View>
            ))}
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
