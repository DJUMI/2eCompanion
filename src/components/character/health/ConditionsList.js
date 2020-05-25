import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

import Colors from '../../../constants/Colors';

const ConditionsList = () => {
    const CONDITIONS = ['Poisoned', 'Enfeebled', 'Frightened', 'Slowed'];
    return (
        <View style={styles.container}>
            <ScrollView>
                {CONDITIONS.map(condition => (
                    <View style={styles.itemContainer}>
                        <Text style={styles.text}>{condition}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

export default ConditionsList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.mediumBrown,
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
