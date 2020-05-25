import React from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Card from '../../Card';
import Separator from '../../Separator';
import Weapon from './Weapon';

const renderContent = () => {
    return (
        <View style={styles.contentContainer}>
            <Weapon
                item={{
                    mod: '1',
                    prof: 'T5',
                    itemBonus: '0',
                    temp: '0',
                    name: 'Staff',
                    dmg: '1d6+1',
                    traits: ''
                }}
            />
            <Separator />
            <Weapon
                item={{
                    mod: '1',
                    prof: 'T5',
                    itemBonus: '0',
                    temp: '0',
                    name: 'Unarmed',
                    dmg: '1d4+1',
                    traits: 'agile'
                }}
            />
        </View>
    );
};

const Melee = () => {
    return (
        <View style={styles.container}>
            <Card title='Melee Strikes' renderContent={renderContent} />
        </View>
    );
};

export default Melee;

const styles = EStyleSheet.create({
    container: {
        marginTop: 10,
        paddingHorizontal: 10,
    },
    contentContainer: {
        paddingHorizontal: 5,
    },
});
