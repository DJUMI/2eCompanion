import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HP from './HP';
import Status from './Status';

const Health = () => {
    return (
        <View style={styles.container}>
            <View style={styles.HPContainer}>
                <HP />
            </View>
            <View style={styles.statusContainer}>
                <Status />
            </View>
        </View>
    );
};

export default Health;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    HPContainer: {
        flex: 2,
        padding: 15,
    },
    statusContainer: {
        flex: 3,
    }
});
