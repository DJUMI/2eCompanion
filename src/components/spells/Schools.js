import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Colors from '../../constants/Colors';

const Schools = ({ tradition }) => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.schoolContainer}>
                    <Text style={styles.schoolText}>Arcane</Text>
                </View>
                <View style={styles.schoolContainer}>
                    <Text style={styles.schoolText}>Occult</Text>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.schoolContainer}>
                    <Text style={styles.schoolText}>Primal</Text>
                </View>
                <View style={styles.schoolContainer}>
                    <Text style={styles.schoolText}>Divine</Text>
                </View>
            </View>
        </View>
    );
};

export default Schools;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'tan',
    },
    row: {
        flexDirection: 'row',
    },
    schoolContainer: {
        flex: 1,
        padding: 5,
        borderColor: Colors.darkBrown,
        borderWidth: 1,
    },
    schoolText: {
        color: Colors.crimson,
    },
});
