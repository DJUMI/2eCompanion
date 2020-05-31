import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import InventoryContent from '../../components/inventory/InventoryContent';
import { EditHeader } from '../../components/common';

const EditInventoryScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <EditHeader />
            <InventoryContent />
        </ScrollView>
    );
};

export default EditInventoryScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'tan'
    },
});