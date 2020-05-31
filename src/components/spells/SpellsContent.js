import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';

import Cantrip from './Cantrip';
import Focus from './Focus';
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
            <Innate data={innate}/>
            <Focus data={focus}/>
            <Cantrip data={cantrips}/>
            <Spells data={spells}/>
        </View>
    );
};

export default SpellsContent;

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    row: {
        flexDirection: 'row',
    },
});
