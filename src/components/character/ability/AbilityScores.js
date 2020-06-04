import React from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { Card, ModRow } from '../../common';

const AbilityScores = ({ data }) => (
    <View style={styles.container}>
        <Card title='Ability Scores'>
            <View style={styles.contentContainer}>
                <ModRow mods={data} />
            </View>
        </Card>
    </View>
);

export default AbilityScores;

const styles = EStyleSheet.create({
    container: {
        paddingHorizontal: '10rem',
        marginBottom: '10rem',
    },
    contentContainer: {
        paddingHorizontal: '10rem',
        paddingVertical: '15rem',
    }
});
