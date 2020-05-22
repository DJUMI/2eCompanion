import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import FeatsContent from '../components/feats/FeatsContent';

const FeatsScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    Feats
                </Text>
            </View>
            <FeatsContent />
        </ScrollView>
    );
};

export default FeatsScreen;

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
