import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import DetailsContent from '../../components/details/DetailsContent';
import { EditHeader } from '../../components/common';

const EditDetailsScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <EditHeader />
            <DetailsContent />
        </ScrollView>
    );
};

export default EditDetailsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'tan'
    },
});