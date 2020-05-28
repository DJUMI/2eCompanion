import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Card, CircleBtn, ModCard, StatCircle } from '../common';

const renderAttack = () => {
    return (
        <View style={styles.row}>
            <ModCard title='KEY' value='4' />
            <ModCard title='PROF' value='T5' />
            <Text style={styles.text}>=</Text>
            <CircleBtn title='Spell Attack' value={9} />
        </View>
    );
};

const renderDC = () => {
    return (
        <View style={styles.row}>
            <ModCard title='KEY' value='4' />
            <ModCard title='PROF' value='T5' />
            <Text style={styles.text}>=</Text>
            <StatCircle title='DC' value={19} />
        </View>
    );
};

const SpellMod = () => {
    return (
        <View style={styles.container}>
            <View style={styles.attackContainer}>
                <Card title='Spell Attck Roll'>
                    {renderAttack()}
                </Card>
            </View>
            <Card title='Spell DC'>
                {renderDC()}
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
