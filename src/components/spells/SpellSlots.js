import React from 'react';
import { Text, TouchableOpacity, View, FlatList } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import EStyleSheet from 'react-native-extended-stylesheet';

import { Card } from '../common';
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
                    <Text style={styles.valueText}>{slot.current}/{slot.max}</Text>
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

const SpellSlots = ({ data }) => {
    return (
        <View style={styles.container}>
            {data.length ?
                <Card title='Spell Slots'>
                    <View style={styles.contentContainer}>
                        <View style={styles.row}>
                            <FlatList
                                data={data.slice(0, 5)}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({ item, index }) => renderItem(item, index)}
                                horizontal
                                contentContainerStyle={styles.list}
                            />
                        </View>
                        <View style={styles.row}>
                            <FlatList
                                data={data.slice(5)}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({ item, index }) => renderItem(item, index)}
                                horizontal
                                contentContainerStyle={styles.list}
                            />
                        </View>
                    </View>
                </Card> :
                <Card title='Spell Slots' empty />
            }
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
    list: {
        flex: 1,
        justifyContent: 'center'
    }
});
