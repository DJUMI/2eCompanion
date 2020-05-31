import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import FeatsContent from '../../components/feats/FeatsContent';
import { EditHeader } from '../../components/common';

const EditFeatsScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <EditHeader />
            <FeatsContent />
        </ScrollView>
    );
};

export default EditFeatsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'tan'
    },
});