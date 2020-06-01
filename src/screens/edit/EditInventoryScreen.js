import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import InventoryContent from '../../components/inventory/InventoryContent';
import { EditHeader } from '../../components/common';

const EditInventoryScreen = () => {
    return (
        <View style={styles.container}>
            <EditHeader />
            <ScrollView>
                <InventoryContent />
            </ScrollView>
        </View>

    );
};

export default EditInventoryScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'tan'
    },
});