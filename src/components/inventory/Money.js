import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Card from '../Card';
import ModCard from '../ModCard';

const renderContent = () => {
    return (
        <View style={styles.contentContainer}>
            <ModCard title='CP' value={5} />
            <ModCard title='SP' value={4} />
            <ModCard title='GP' value={17} />
            <ModCard title='PP' value={0} />
        </View>
    );
};

const Money = () => {
    return (
        <View style={styles.container}>
            <Card title='Money'>
                {renderContent()}
            </Card>
        </View>
    );
};

export default Money;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        paddingHorizontal: 40,
    }
});