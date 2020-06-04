import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import SkillsContent from '../../components/skills/SkillsContent';
import { Header } from '../../components/common';

const SkillsScreen = ({ navigation }) => (
    <View style={styles.container}>
        <Header navigation={navigation} />
        <ScrollView>
            <View style={styles.header}>
                <Text style={styles.headerText}>Skills</Text>
            </View>
            <SkillsContent />
        </ScrollView>
    </View>
);

export default SkillsScreen;

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
