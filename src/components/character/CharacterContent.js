import React, { useContext } from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import AbilityScores from './ability/AbilityScores';
import Health from './health/Health';
import Armor from './armor/Armor';
import Saves from './saves/Saves';
import Perception from './perception/Perception';
import Melee from './attack/Melee';
import Ranged from './attack/Ranged';
import WeaponProf from './attack/WeaponProf';
import { Context } from '../../context/CharacterContext';

const CharacterContent = () => {
    const { state } = useContext(Context);
    const { 
        abilityScores, 
        armor, 
        conditions, 
        dying, 
        hp, 
        melee,
        perception,
        ranged,
        saves,
        shield,
        weaponProf,
        wounded
    } = state.characters[state.current].character;
    return (
        <View style={styles.container} >
            <Health data={{ hp, dying, wounded, conditions }} />
            <AbilityScores data={abilityScores} />
            <Armor data={{ armor, shield }} />
            <Saves data={saves} />
            <Perception data={perception} />
            <WeaponProf data={weaponProf} />
            <Melee data={melee} />
            <Ranged data={ranged} />
        </View>
    );
};

export default CharacterContent;

const styles = EStyleSheet.create({
    container: {
        marginBottom: 20,
    },
});
