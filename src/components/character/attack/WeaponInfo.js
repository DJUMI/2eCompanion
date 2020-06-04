import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Colors from '../../../constants/Colors';

const WeaponInfo = ({ title, value }) => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>{title}</Text>
            </View>
            <View style={styles.valueContainer}>
                <Text style={styles.valueText}>{value}</Text>
            </View>
        </View>
    );
};

export default WeaponInfo;

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 5,
    },
    titleContainer: {
        backgroundColor: Colors.darkBrown,
        alignSelf:'center',
        paddingHorizontal: 5,
        paddingTop: 5,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    titleText: {
        color: 'white',
        fontSize: '14rem',
    },
    valueContainer: {
        borderColor: Colors.darkBrown,
        borderWidth: 1,
        backgroundColor: 'white',
        padding: 5,
        alignItems: 'center',
    },
    valueText: {
        fontSize: '14rem',
    },
});
