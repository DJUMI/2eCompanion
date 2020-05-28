import React from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { ModRow } from '../../common';
import WeaponInfo from './WeaponInfo';

const Weapon = ({ item: { mod, prof, itemBonus, temp, name, dmg, traits } }) => {
    const MODS = [
        { title: 'MOD', value: mod },
        { title: 'PROF', value: prof },
        { title: 'ITEM', value: itemBonus },
        { title: 'TEMP', value: temp },
    ];

    return (
        <View style={styles.container}>
            <ModRow mods={MODS} stat={{ title: `${name} Attack`, value: 6 }}/>
            <View style={styles.row}>
                <WeaponInfo title='Weapon' value={name}/>
                <WeaponInfo title='DMG' value={dmg}/>
                <WeaponInfo title='Traits' value={traits}/>
            </View>
        </View>
    );
};

export default Weapon;

const styles = EStyleSheet.create({
    container: {
        paddingTop: 10,
    },
    row: {
        flexDirection: 'row',
        paddingBottom: 10,
        paddingTop: 5,
    },
});
