import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native'

const Spinner = ({ size }) => (
    <View style={styles.container}>
        <ActivityIndicator size={size || 'large'} />
    </View>
);

export { Spinner };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
