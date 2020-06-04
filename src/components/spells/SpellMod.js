import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { Card, CircleBtn, ModCard, StatCircle } from '../common';

const SpellMod = ({ data: { key, prof } }) => (
    <View style={styles.container}>
        <View style={styles.attackContainer}>
            <Card title='Spell Attack Roll'>
                <View style={styles.row}>
                    <ModCard title={key.title || 'KEY'} value={key.value} />
                    <ModCard title='PROF' value={`${prof.title}${prof.value}`} />
                    <Text style={styles.text}>=</Text>
                    <CircleBtn title='Spell Attack' mod={key.value + prof.value} />
                </View>
            </Card>
        </View>
        <Card title='Spell DC'>
            <View style={styles.row}>
                <ModCard title={key.title || 'KEY'} value={key.value} />
                <ModCard title='PROF' value={`${prof.title}${prof.value}`} />
                <Text style={styles.text}>=</Text>
                <StatCircle title='DC' value={key.value + prof.value + 10} />
            </View>
        </Card>
    </View>
);

export default SpellMod;

const styles = EStyleSheet.create({
    container: {
        flex: 5,
        paddingBottom: '10rem',
    },
    attackContainer: {
        marginBottom: '5rem',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '5rem',
    },
    text: {
        color: 'white',
        fontSize: '20rem',
    },
});
