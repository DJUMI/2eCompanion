import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Colors from '../../constants/Colors';

const DetailCard = ({ title, value }) => {
    return (
        <View style={styles.row}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>{title}</Text>
            </View>
            <View style={styles.valueContainer}>
                <Text style={styles.valueText}>{value}</Text>
            </View>
        </View>
    );
};

export default DetailCard;

const styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: Colors.darkBrown,
        borderRadius: 5,
        backgroundColor: 'white',
        marginBottom: 3,
        marginRight: 3,
    },
    titleContainer: {
        padding: 5,
        backgroundColor: Colors.blue,
        borderRightWidth: 1,
        borderColor: Colors.darkBrown,
    },
    titleText: {
        color: 'white',
    },
    valueContainer: {
        padding: 5,
    },
    valueText: {
    },
});
