import React from 'react';
import { Text, TouchableOpacity, View, FlatList } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import EStyleSheet from 'react-native-extended-stylesheet';

import { Card } from '../common';
import Colors from '../../constants/Colors';

const renderItem = (slot, i) => (
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

const SpellSlots = ({ data }) => (
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

export default SpellSlots;

const styles = EStyleSheet.create({
    container: {
        paddingBottom: '10rem',
    },
    contentContainer: {
        marginBottom: '5rem',
    },
    itemContainer: {
        margin: '5rem',
        width: '60rem',
    },
    levelText: {
        color: 'white',
        alignSelf: 'center',
    },
    btnContainer: {
        paddingTop: '5rem',
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: '2rem',
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    topBtn: {
        backgroundColor: Colors.blue,
        borderTopLeftRadius: '5rem',
        borderTopRightRadius: '5rem',
        paddingVertical: '2rem',
        alignItems: 'center',
    },
    bottomBtn: {
        backgroundColor: Colors.blue,
        borderBottomLeftRadius: '5rem',
        borderBottomRightRadius: '5rem',
        paddingVertical: '2rem',
        alignItems: 'center',
    },
    valueContainer: {
        backgroundColor: 'white',
        paddingVertical: '5rem',
    },
    valueText: {
        alignSelf: 'center',
        fontSize: '18rem',
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
