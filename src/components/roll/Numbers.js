import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

import Colors from '../../constants/Colors';
import { Context } from '../../context/RollContext';

const Numbers = () => {
    const { state, addDigit, addOpenParen, addClosedParen } = useContext(Context);

    const onDigitPress = (number) => {
        addDigit(number);
    };

    const renderRow = (data) => (
        <View style={styles.row}>
            <TouchableOpacity
                style={styles.itemContainer}
                onPress={() => onDigitPress(data[0])}
            >
                <Text style={styles.itemText}>{data[0]}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.itemContainer}
                onPress={() => onDigitPress(data[1])}
            >
                <Text style={styles.itemText}>{data[1]}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.lastItemContainer}
                onPress={() => onDigitPress(data[2])}
            >
                <Text style={styles.itemText}>{data[2]}</Text>
            </TouchableOpacity>
        </View>
    );

    const renderBottomRow = (data) => (
        <View style={styles.row}>
            <TouchableOpacity
                style={styles.bottomContainer}
                onPress={() => onDigitPress(data[0])}
            >
                <Text style={styles.itemText}>{data[0]}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.bottomContainer}
                onPress={addOpenParen}
            >
                <Text style={styles.itemText}>{data[1]}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.lastBottomContainer}
                onPress={addClosedParen}
            >
                <Text style={styles.itemText}>{data[2]}</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            {renderRow(['7', '8', '9'])}
            {renderRow(['4', '5', '6'])}
            {renderRow(['1', '2', '3'])}
            {renderBottomRow(['0', '(', ')'])}
        </View>
    );
};

export default Numbers;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 10,
        borderColor: Colors.lightBlue,
        borderTopWidth: 1,
    },
    row: {
        flex: 1,
        flexDirection: 'row',
    },
    itemContainer: {
        flex: 1,
        borderColor: Colors.lightBlue,
        borderBottomWidth: 1,
        borderRightWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
        marginTop: 5,
    },
    lastItemContainer: {
        flex: 1,
        borderColor: Colors.lightBlue,
        borderBottomWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
        marginTop: 5,
    },
    bottomContainer: {
        flex: 1,
        borderColor: Colors.lightBlue,
        borderRightWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
        marginTop: 5,
    },
    lastBottomContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
        marginTop: 5,
    },
    itemText: {
        color: Colors.lightBlue,
        fontSize: 20,
    }
});
