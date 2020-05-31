import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Card, CircleBtn, ModCard, StatCircle } from '../common';

const SpellMod = ({ data: { key, prof } }) => {
    return (
        <View style={styles.container}>
            <View style={styles.attackContainer}>
                <Card title='Spell Attack Roll'>
                    <View style={styles.row}>
                        <ModCard title={key.title || 'KEY'} value={key.value} />
                        <ModCard title='PROF' value={`${prof.title}${prof.value}`} />
                        <Text style={styles.text}>=</Text>
                        <CircleBtn title='Spell Attack' value={key.value + prof.value} />
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
};

export default SpellMod;

const styles = StyleSheet.create({
    container: {
        flex: 5,
        paddingBottom: 10,
    },
    attackContainer: {
        marginBottom: 5,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5,
    },
    text: {
        color: 'white',
        fontSize: 20,
    },
});
