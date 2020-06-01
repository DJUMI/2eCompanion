import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import SpellsContent from '../../components/spells/SpellsContent';
import { EditHeader } from '../../components/common';

const EditSpellsScreen = () => {
    return (
        <View style={styles.container}>
            <EditHeader />
            <ScrollView>
                <SpellsContent />
            </ScrollView>
        </View>
    );
};

export default EditSpellsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'tan'
    },
});