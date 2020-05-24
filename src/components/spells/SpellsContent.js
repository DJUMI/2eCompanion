import React from 'react';
import { StyleSheet, View } from 'react-native';

import Cantrip from './Cantrip';
import Focus from './Focus';
import Innate from './Innate';
import Spells from './Spells';
import SpellMod from './SpellMod';
import SpellSlots from './SpellSlots';
import Tradition from './Tradition';

const SpellsContent = () => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Tradition />
                <SpellMod />
            </View>
            <SpellSlots />
            <Innate />
            <Focus />
            <Cantrip />
            <Spells />
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
