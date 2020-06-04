import React, { useContext } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Colors from '../../constants/Colors';
import { Context } from '../../context/RollContext';
import { FontAwesome5 } from '@expo/vector-icons';

const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer}>
        <Text style={styles.itemText}>{item.title}</Text>
        <Text style={styles.itemText}>{item.roll}</Text>
    </TouchableOpacity>
);

const renderAdd = () => (
    <View style={styles.addContainer}>
        <TouchableOpacity style={styles.addBtn}>
            <FontAwesome5
                name='plus'
                size={30}
                color={Colors.lightBlue}
            />
        </TouchableOpacity>
    </View>
);

const SavedRolls = () => {
    const { state } = useContext(Context);

    return (
        <View style={styles.container}>
            <View style={styles.listContainer}>
                <FlatList
                    data={state.savedRolls}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderItem}
                    ListFooterComponent={renderAdd}
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

export default SavedRolls;

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
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 1,
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
    addContainer: {
        alignItems: 'flex-end',
        padding: '10rem',
    },
    addBtn: {
        backgroundColor: 'white',
        padding: '5rem',
        borderWidth: '1rem',
        borderColor: Colors.lightBlue,
        borderRadius: '5rem',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: '1rem',
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 1,
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