import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../constants/Colors';

const StatCircle = ({title, value}) => {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.text}>{title}</Text>
            </View>
            <View style={styles.bottom}>
                <Text style={styles.text}>{value}</Text>
            </View>
        </View>
    );
};

export default StatCircle;

const styles = StyleSheet.create({
    container: {
        height: 80,
        width: 80,
        backgroundColor: Colors.darkBrown,
        borderRadius: 40,
        borderWidth: 3,
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
        width: 80,
        height: 37,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 20,
    }
});
