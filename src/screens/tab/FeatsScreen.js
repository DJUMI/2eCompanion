import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import FeatsContent from '../../components/feats/FeatsContent';
import { Header } from '../../components/common';

const FeatsScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Header navigation={navigation} />
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.headerText}>
                        Feats
                </Text>
                </View>
                <FeatsContent />
            </ScrollView>
        </View>
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
