import React from 'react';
import { StyleSheet, View } from 'react-native';

import Bulk from './Bulk';
import Money from './Money';
import Other from './Other';
import Readied from './Readied';
import Worn from './Worn';

const InventoryContent = () => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Bulk />
                <Money />
            </View>
            <Readied />
            <Worn />
            <Other />
        </View>
    );
};

export default InventoryContent;

const styles = StyleSheet.create({
    container: {
        padding: 5,
    },
    row: {
        flexDirection: 'row',
        paddingBottom: 10,
    }
});
