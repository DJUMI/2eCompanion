import React, { useContext } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Colors from '../../constants/Colors';
import { Context } from '../../context/RollContext';

const Numbers = () => {
    const { addDigit, addOpenParen, addClosedParen } = useContext(Context);

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

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: '10rem',
        borderColor: Colors.lightBlue,
        borderTopWidth: '1rem',
    },
    row: {
        flex: 1,
        flexDirection: 'row',
    },
    itemContainer: {
        flex: 1,
        borderColor: Colors.lightBlue,
        borderBottomWidth: '1rem',
        borderRightWidth: '1rem',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '5rem',
        marginTop: '5rem',
    },
    lastItemContainer: {
        flex: 1,
        borderColor: Colors.lightBlue,
        borderBottomWidth: '1rem',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '5rem',
        marginTop: '5rem',
    },
    bottomContainer: {
        flex: 1,
        borderColor: Colors.lightBlue,
        borderRightWidth: '1rem',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '5rem',
        marginTop: '5rem',
    },
    lastBottomContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '5rem',
        marginTop: '5rem',
    },
    itemText: {
        color: Colors.lightBlue,
        fontSize: '20rem',
    }
});
