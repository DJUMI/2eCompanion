import React, { useContext } from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Cantrip from './Cantrip';
import Focus from './focus/Focus';
import Innate from './Innate';
import Spells from './Spells';
import SpellMod from './SpellMod';
import SpellSlots from './SpellSlots';
import Tradition from './Tradition';
import { Context } from '../../context/CharacterContext';

const SpellsContent = () => {
    const { state } = useContext(Context);
    const { 
        tradition, 
        casterType, 
        key, 
        prof, 
        slots,
        innate,
        focus,
        cantrips,
        spells,
        item 
    } = state.characters[state.current].spells;

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Tradition data={{ tradition, casterType }}/>
                <SpellMod data={{ key, prof }}/>
            </View>
            <SpellSlots data={slots}/>
            <Innate data={innate} />
            <Focus data={focus}/>
            <Cantrip data={cantrips}/>
            <Spells data={spells}/>
        </View>
    );
};

export default SpellsContent;

const styles = EStyleSheet.create({
    container: {
        padding: '10rem',
    },
    row: {
        flexDirection: 'row',
    },
});
