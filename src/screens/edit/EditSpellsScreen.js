import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import SpellsContent from '../../components/spells/SpellsContent';
import { EditHeader } from '../../components/common';

const EditSpellsScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <EditHeader />
            <SpellsContent />
        </ScrollView>
    );
};

export default EditSpellsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'tan'
    },
});