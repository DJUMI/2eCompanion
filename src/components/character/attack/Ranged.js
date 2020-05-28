import React from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { Card, Separator } from '../../common';
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
                    name: 'Longbow',
                    dmg: '1d6+1',
                    traits: ''
                }}
            />
        </View>
    );
};

const Ranged = () => {
    return (
        <View style={styles.container}>
            <Card title='Ranged Strikes'>
                {renderContent()}
            </Card>
        </View>
    );
};

export default Ranged;

const styles = EStyleSheet.create({
    container: {
        marginTop: 10,
        paddingHorizontal: 10,
    },
    contentContainer: {
        paddingHorizontal: 5,
    },
});
