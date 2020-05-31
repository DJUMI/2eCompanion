import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import SkillsContent from '../../components/skills/SkillsContent';
import { EditHeader } from '../../components/common';

const EditSkillsScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <EditHeader />
            <SkillsContent />
        </ScrollView>
    );
};

export default EditSkillsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'tan'
    },
});