import React from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { ModRow } from '../../common';
import WeaponInfo from './WeaponInfo';

const Weapon = ({ item: { dmg, dmgType, item, mod, name, notes, prof, temp, traits } }) => {
    const total = mod.value + prof.value + item + temp;

    return (
        <View style={styles.container}>
            <ModRow
                mods={[
                    { title: mod.title, value: mod.value },
                    { title: 'PROF', value: `${prof.title}${prof.value}` },
                    { title: 'ITEM', value: item },
                    { title: 'TEMP', value: temp },
                ]}
                stat={{ title: `${name} Attack`, mod: total }}
            />
            <View style={styles.row}>
                <WeaponInfo title='Weapon' value={name} />
                <WeaponInfo title='DMG' value={`${dmg} ${dmgType.join(', ')}`} />
                <WeaponInfo title='Traits' value={traits.join(', ')} />
            </View>
        </View>
    );
};

export default Weapon;

const styles = EStyleSheet.create({
    container: {
        paddingTop: '10rem',
    },
    row: {
        flexDirection: 'row',
        paddingBottom: '10rem',
        paddingTop: '5rem',
    },
});
