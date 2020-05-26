import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Card from '../Card';
import Schools from './Schools';
import Colors from '../../constants/Colors';

const renderContent = () => {
    return (
        <View style={styles.contentContainer}>
            <Schools />
            <Text style={styles.text}>Prepared</Text>
        </View>
    );
}

const Tradition = () => {
    return (
        <View style={styles.container}>
            <Card title='Tradition'>
                {renderContent()}
            </Card>
        </View>
    );
};

export default Tradition;

const styles = StyleSheet.create({
    container: {
        flex: 3,
        marginRight: 5,
        paddingBottom: 10,
    },
    contentContainer: {
        padding: 5,
    },
    text: {
        color: 'white',
        backgroundColor: Colors.blue,
        alignSelf: 'center',
        marginTop: 5,
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderColor: 'white',
        borderWidth: 1,
    },
});
