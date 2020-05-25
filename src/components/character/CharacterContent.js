import React from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Health from './health/Health';
import Armor from './armor/Armor';
import Saves from './saves/Saves';
import Perception from './perception/Perception';
import Melee from './attack/Melee';
import Ranged from './attack/Ranged';

const CharacterContent = () => {

    return (
        <View style={styles.container} >
            <Health />
            <Armor />
            <Saves />
            <Perception />
            <Melee />
            <Ranged />
        </View>
    );
};

export default CharacterContent;

const styles = EStyleSheet.create({
    container: {
        marginBottom: 20,
    },
});
