import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Colors from '../../constants/Colors';

const Schools = ({ tradition }) => (
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

export default Schools;

const styles = EStyleSheet.create({
    container: {
        backgroundColor: 'tan',
    },
    row: {
        flexDirection: 'row',
    },
    schoolContainer: {
        flex: 1,
        padding: '5rem',
        borderColor: Colors.darkBrown,
        borderWidth: '1rem',
    },
    schoolText: {
        color: Colors.crimson,
    },
});
