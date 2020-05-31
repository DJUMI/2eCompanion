import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import SpellsContent from '../../components/spells/SpellsContent';
import { Header } from '../../components/common';

const SpellsScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Header navigation={navigation} />
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.headerText}>
                        Spells
                </Text>
                </View>
                <SpellsContent />
            </ScrollView>
        </View>
    );
};

export default SpellsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'tan'
    },
    header: {
        justifyContent: 'center',
        marginTop: 30,
        alignItems: 'center',
    },
    headerText: {
        color: 'white',
        fontSize: 24,
    },
});