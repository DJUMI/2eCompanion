import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import EStyleSheet from 'react-native-extended-stylesheet';


import Card from '../Card';
import Colors from '../../constants/Colors';

const renderItem = (slot, i) => {
    return (
        <View style={styles.itemContainer}>
            <Text style={styles.levelText}>Level {i + 1}</Text>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.topBtn}>
                    <FontAwesome5
                        name='caret-up'
                        color='white'
                        size={18}
                    />
                </TouchableOpacity>
                <View style={styles.valueContainer}>
                    <Text style={styles.valueText}>{slot.curr}/{slot.max}</Text>
                </View>
                <TouchableOpacity style={styles.bottomBtn}>
                    <FontAwesome5
                        name='caret-down'
                        color='white'
                        size={18}
                    />
                </TouchableOpacity>
            </View>

        </View>
    );
};

const renderContent = () => {
    const SLOTS = [
        { max: 3, curr: 3 },
        { max: 2, curr: 2 },
        { max: 0, curr: 0 },
        { max: 0, curr: 0 },
        { max: 0, curr: 0 },
        { max: 0, curr: 0 },
        { max: 0, curr: 0 },
        { max: 0, curr: 0 },
        { max: 0, curr: 0 },
        { max: 0, curr: 0 },
    ];
    return (
        <View style={styles.contentContainer}>
            <View style={styles.row}>
                {SLOTS.slice(0, 5).map((slot, i) => (
                    slot.max ?
                        renderItem(slot, i) :
                        null
                ))}
            </View>
            <View style={styles.row}>
                {SLOTS.slice(5).map((slot, i) => (
                    slot.max ?
                        renderItem(slot, i + 5) :
                        null
                ))}
            </View>
        </View>
    );
};

const SpellSlots = () => {
    return (
        <View style={styles.container}>
            <Card title='Spell Slots' renderContent={renderContent} />
        </View>
    );
};

export default SpellSlots;

const styles = EStyleSheet.create({
    container: {
        paddingBottom: 10,
    },
    contentContainer: {
        marginBottom: 5,
    },
    itemContainer: {
        margin: 5,
        width: '60rem',
    },
    levelText: {
        color: 'white',
        alignSelf: 'center',
    },
    btnContainer: {
        paddingTop: 5,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    topBtn: {
        backgroundColor: Colors.blue,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        paddingVertical: 2,
        alignItems: 'center',
    },
    bottomBtn: {
        backgroundColor: Colors.blue,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        paddingVertical: 2,
        alignItems: 'center',
    },
    valueContainer: {
        backgroundColor: 'white',
        paddingVertical: 5,
    },
    valueText: {
        alignSelf: 'center',
        fontSize: 18,
    },
    row: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
    },
});
