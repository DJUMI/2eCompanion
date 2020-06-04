import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import HP from './HP';
import Status from './Status';

const Health = ({ data: { hp, xp, dying, wounded, conditions } }) => (
    <View style={styles.container}>
        <View style={styles.HPContainer}>
            <HP hp={hp} />
            <View style={styles.xpContainer}>
                <Text style={styles.xpText}>{xp}/1000 XP</Text>
            </View>
        </View>
        <View style={styles.statusContainer}>
            <Status data={{ dying, wounded, conditions }} />
        </View>
    </View>
);

export default Health;

const styles = EStyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    HPContainer: {
        padding: '15rem',
    },
    statusContainer: {
        flex: 1,
    },
    xpContainer: {
        flex: 1,
        paddingTop: '5rem',
        alignItems: 'center',
    },
    xpText: {
        fontSize: '16rem'
    }
});
