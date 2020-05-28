import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Card, StatCircle } from '../common';

const renderContent = () => {
    return (
        <View style={styles.contentContainer}>
            <StatCircle title={5} value={10} />
        </View>
    );
};

const Bulk = () => {
    return (
        <View style={styles.container}>
            <Card title='Bulk'>
                {renderContent()}
            </Card>
        </View>
    );
};

export default Bulk;

const styles = StyleSheet.create({
    container: {
        marginRight: 10,
    },
    contentContainer: {
        padding: 10,
        alignItems: 'center',
    },
});
