import React from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import ArmorRow from './ArmorRow';
import { Card, Separator } from '../../common';

const ARMOR = [
    { title: 'MOD', value: 1 },
    { title: 'PROF', value: 'T5' },
    { title: 'ITEM', value: 1 },
    { title: 'TEMP', value: 0 },
];

const SHIELD = [
    { title: 'Bonus', value: 2 },
    { title: 'TEMP', value: 1 },
    { title: 'HARD', value: 3 },
    { title: 'BT', value: 3 },
];

const renderContent = () => {
    return (
        <View style={styles.contentContainer}>
            <ArmorRow mods={ARMOR} stat={{ title: 'AC', value: 17 }} />
            <Separator />
            <ArmorRow mods={SHIELD} stat={{ title: 'Shield', value: 19 }} />
        </View>
    );
};

const Armor = () => {
    return (
        <View style={styles.container}>
            <Card title='Armor Class'>
                {renderContent()}
            </Card>
        </View>
    );
};

export default Armor;

const styles = EStyleSheet.create({
    container: {
        paddingHorizontal: 10,
    },
    contentContainer: {
        paddingHorizontal: 5,
    }
});
