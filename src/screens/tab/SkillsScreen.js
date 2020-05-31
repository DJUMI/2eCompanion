import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import SkillsContent from '../../components/skills/SkillsContent';
import { Header } from '../../components/common';

const SkillsScreen = ({ navigation }) => {
    return (
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
};

export default SkillsScreen;

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
