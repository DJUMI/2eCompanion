import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Card, ModCard } from '../common';

const Money = ({ data: { cp, sp, gp, pp } }) => {
    return (
        <View style={styles.container}>
            <Card title='Money'>
                <View style={styles.contentContainer}>
                    <ModCard title='CP' value={cp} />
                    <ModCard title='SP' value={sp} />
                    <ModCard title='GP' value={gp} />
                    <ModCard title='PP' value={pp} />
                </View>
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