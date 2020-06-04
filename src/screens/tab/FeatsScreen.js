import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import FeatsContent from '../../components/feats/FeatsContent';
import { Header } from '../../components/common';

const FeatsScreen = ({ navigation }) => (
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

export default FeatsScreen;

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
