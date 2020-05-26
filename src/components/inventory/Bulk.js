import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Card from '../Card';
import StatCircle from '../StatCircle';

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
