import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import SkillsContent from '../../components/skills/SkillsContent';
import { EditHeader } from '../../components/common';

const EditSkillsScreen = () => {
    return (
        <View style={styles.container}>
            <EditHeader />
            <ScrollView >
                <SkillsContent />
            </ScrollView>
        </View>

    );
};

export default EditSkillsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'tan'
    },
});