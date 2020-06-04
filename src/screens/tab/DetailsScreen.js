import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import DetailsContent from '../../components/details/DetailsContent';
import { Header } from '../../components/common';

const DetailsScreen = ({ navigation }) => (
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

export default DetailsScreen;

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
