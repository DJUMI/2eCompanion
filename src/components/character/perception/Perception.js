import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { Card, ModRow } from '../../common';
import Colors from '../../../constants/Colors';
import SensesList from './SensesList';

const PERC = [
    { title: 'MOD', value: 4 },
    { title: 'PROF', value: 'E7' },
    { title: 'ITEM', value: 0 },
    { title: 'TEMP', value: 0 },
];

const renderContent = () => {
    return (
        <View style={styles.itemContainer}>
            <ModRow mods={PERC} stat={{ title: 'Perception', value: 'E11' }} />
            <View style={styles.row}>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>Initiative</Text>
                </TouchableOpacity>
                <SensesList />
            </View>
        </View>
    );
}

const Perception = () => {
    return (
        <View style={styles.container}>
            <Card title='Perception'>
                {renderContent()}
            </Card>
        </View>
    );
};

export default Perception;

const styles = EStyleSheet.create({
    container: {
        marginTop: 10,
        paddingHorizontal: 10,
    },
    itemContainer: {
        padding: 5,
        paddingBottom: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    btn: {
        flex: 2,
        backgroundColor: Colors.blue,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'white',
    },
    btnText: {
        color: 'white',
        fontSize: 18,
    }
});
