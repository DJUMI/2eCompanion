import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import InventoryContent from '../../components/inventory/InventoryContent';
import { Header } from '../../components/common';

const InventoryScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Header navigation={navigation} />
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.headerText}>
                        Inventory
                </Text>
                </View>
                <InventoryContent />
            </ScrollView>
        </View>
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
