import React from 'react';
import { Text, View, FlatList } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Colors from '../../../constants/Colors';

const SensesList = ({ data }) => (
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

export default SensesList;

const styles = EStyleSheet.create({
    container: {
        flex: 3,
    },
    titleContainer: {
        alignItems: 'center',
    },
    title: {
        color: 'white',
        fontSize: '18rem',
    },
    itemContainer: {
        marginHorizontal: '5rem',
        marginTop: '5rem',
        borderBottomWidth: '1rem',
        borderBottomColor: Colors.darkBrown,

    },
    text: {
        color: 'white',
        paddingBottom: '1rem',
    },
});
