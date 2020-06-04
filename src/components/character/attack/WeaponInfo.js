import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Colors from '../../../constants/Colors';

const WeaponInfo = ({ title, value }) => (
    <View style={styles.container}>
        <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{title}</Text>
        </View>
        <View style={styles.valueContainer}>
            <Text style={styles.valueText}>{value}</Text>
        </View>
    </View>
);

export default WeaponInfo;

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: '5rem',
    },
    titleContainer: {
        backgroundColor: Colors.darkBrown,
        alignSelf: 'center',
        paddingHorizontal: '5rem',
        paddingTop: '5rem',
        borderTopLeftRadius: '5rem',
        borderTopRightRadius: '5rem',
    },
    titleText: {
        color: 'white',
        fontSize: '14rem',
    },
    valueContainer: {
        borderColor: Colors.darkBrown,
        borderWidth: '1rem',
        backgroundColor: 'white',
        padding: '5rem',
        alignItems: 'center',
    },
    valueText: {
        fontSize: '14rem',
    },
});
