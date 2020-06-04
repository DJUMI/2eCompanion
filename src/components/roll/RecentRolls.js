import React, { useContext } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Colors from '../../constants/Colors';
import { Context } from '../../context/RollContext';

const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer}>
        <Text style={styles.itemText}>{item}</Text>
    </TouchableOpacity>
);

const RecentRolls = () => {
    const { state } = useContext(Context);

    return (
        <View style={styles.container}>
            <View style={styles.listContainer}>
                <FlatList
                    data={state.recentRolls}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderItem}
                />
            </View>
            <View style={styles.footer}>
                <Text style={styles.footerText}>
                    {state.customRollText}
                </Text>
            </View>
        </View>
    );
};

export default RecentRolls;

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        padding: '10rem',
    },
    listContainer: {
        flex: 1,
    },
    itemContainer: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: '1rem',
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        borderColor: Colors.lightBlue,
        borderWidth: '1rem',
        margin: '5rem',
        padding: '10rem',
        borderRadius: '5rem',
        backgroundColor: 'white',
    },
    itemText: {
        color: Colors.lightBlue,
        fontSize: '20rem',

    },
    footer: {
        borderColor: Colors.lightBlue,
        borderTopWidth: '1rem',
        padding: '10rem',
    },
    footerText: {
        color: Colors.lightBlue,
        fontSize: '20rem',
    },
});