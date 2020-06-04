import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import SpellsContent from '../../components/spells/SpellsContent';
import { Header } from '../../components/common';

const SpellsScreen = ({ navigation }) => (
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


export default SpellsScreen;

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'tan'
    },
    header: {
        justifyContent: 'center',
        marginTop: '30rem',
        alignItems: 'center',
    },
    headerText: {
        color: 'white',
        fontSize: '24rem',
    },
});