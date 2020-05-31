import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Card, StatCircle } from '../common';

const Bulk = ({ data }) => {
    return (
        <View style={styles.container}>
            <Card title='Bulk'>
                <View style={styles.contentContainer}>
                    <StatCircle title={data.current} value={data.max} />
                </View>
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
