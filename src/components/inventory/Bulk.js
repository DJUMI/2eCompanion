import React from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { Card, StatCircle } from '../common';

const Bulk = ({ data }) => (
    <View style={styles.container}>
        <Card title='Bulk'>
            <View style={styles.contentContainer}>
                <StatCircle title={data.current} value={data.max} />
            </View>
        </Card>
    </View>
);

export default Bulk;

const styles = EStyleSheet.create({
    container: {
        marginRight: '10rem',
    },
    contentContainer: {
        padding: '10rem',
        alignItems: 'center',
    },
});
