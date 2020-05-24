import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import InventoryContent from '../components/inventory/InventoryContent';

const InventoryScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    Inventory
                </Text>
            </View>
            <InventoryContent />
        </ScrollView>
    );
};

export default InventoryScreen;

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
