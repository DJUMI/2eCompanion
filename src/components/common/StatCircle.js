import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Colors from '../../constants/Colors';

const StatCircle = ({ title, value }) => (
    <View style={styles.container}>
        <View style={styles.top}>
            <Text style={styles.text}>{title}</Text>
        </View>
        <View style={styles.bottom}>
            <Text style={styles.text}>{value}</Text>
        </View>
    </View>
);

export { StatCircle };

const styles = EStyleSheet.create({
    container: {
        height: '80rem',
        width: '80rem',
        backgroundColor: Colors.darkBrown,
        borderRadius: '40rem',
        borderWidth: '3rem',
        borderColor: Colors.darkBrown,
        alignItems: 'center',
        overflow: 'hidden',
    },
    top: {
        flex: 1,
        justifyContent: 'center',
    },
    bottom: {
        backgroundColor: Colors.mediumBrown,
        width: '80rem',
        height: '37rem',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: '20rem',
    }
});
