import React from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';


import HP from './HP';
import Status from './Status';

const Health = () => {
    return (
        <View style={styles.container}>
            <View style={styles.HPContainer}>
                <HP />
            </View>
            <View style={styles.statusContainer}>
                <Status />
            </View>
        </View>
    );
};

export default Health;

const styles = EStyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    HPContainer: {
        flex: 2,
        padding: 15,
    },
    statusContainer: {
        flex: 3,
    }
});
