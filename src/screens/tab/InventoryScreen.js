import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import InventoryContent from '../../components/inventory/InventoryContent';
import { Header } from '../../components/common';

const InventoryScreen = ({ navigation }) => (
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

export default InventoryScreen;

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
