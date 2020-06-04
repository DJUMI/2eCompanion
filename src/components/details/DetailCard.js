import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Colors from '../../constants/Colors';

const DetailCard = ({ title, value }) => (
    <View style={styles.row}>
        <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{title}</Text>
        </View>
        <View style={styles.valueContainer}>
            <Text style={styles.valueText}>{value}</Text>
        </View>
    </View>
);

export default DetailCard;

const styles = EStyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'row',
        borderWidth: '1rem',
        borderColor: Colors.darkBrown,
        borderRadius: '5rem',
        backgroundColor: 'white',
        marginBottom: '3rem',
        marginRight: '3rem',
    },
    titleContainer: {
        padding: '5rem',
        backgroundColor: Colors.blue,
        borderRightWidth: '1rem',
        borderColor: Colors.darkBrown,
    },
    titleText: {
        color: 'white',
    },
    valueContainer: {
        flex: 1,
        padding: '5rem',
    },
    valueText: {
    },
});
