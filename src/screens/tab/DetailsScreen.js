import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import DetailsContent from '../../components/details/DetailsContent';
import { Header } from '../../components/common';

const DetailsScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Header navigation={navigation} />
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.headerText}>
                        Details
                </Text>
                </View>
                <DetailsContent />
            </ScrollView>
        </View>
    );
};

export default DetailsScreen;

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
