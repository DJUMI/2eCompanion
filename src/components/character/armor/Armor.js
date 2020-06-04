import React from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import ArmorRow from './ArmorRow';
import { Card, Separator } from '../../common';

const Armor = ({ data: { armor, shield } }) => {
    const total = armor.mod.value + armor.prof.value + armor.item + armor.temp + 10;

    return (
        <View style={styles.container}>
            <Card title='Armor Class'>
                <View style={styles.contentContainer}>
                    <ArmorRow
                        mods={[
                            { title: armor.mod.title, value: armor.mod.value },
                            { title: 'PROF', value: `${armor.prof.title}${armor.prof.value}` },
                            { title: 'ITEM', value: armor.item },
                            { title: 'TEMP', value: armor.temp },
                        ]}
                        stat={{ title: 'AC', value: total }}
                    />
                    <Separator />
                    <ArmorRow
                        mods={[
                            { title: 'Bonus', value: shield.bonus },
                            { title: 'TEMP', value: shield.temp },
                            { title: 'HARD', value: shield.hardness },
                            { title: 'BT', value: shield.bt },
                        ]}
                        stat={{ title: 'Shield', value: `${shield.hp.current}/${shield.hp.max}` }}
                    />
                </View>
            </Card>
        </View>
    );
};

export default Armor;

const styles = EStyleSheet.create({
    container: {
        paddingHorizontal: '10rem',
    },
    contentContainer: {
        paddingHorizontal: '5rem',
    }
});
