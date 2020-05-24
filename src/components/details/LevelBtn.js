import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Colors from '../../constants/Colors';

const LevelBtn = () => {
    return (
        <TouchableOpacity 
            style={styles.container}
            onPress={() => console.log('Level Up!')}
        >
            <View style={styles.top}>
                <Text style={styles.text}>Level</Text>
            </View>
            <View style={styles.bottom}>
                <Text style={styles.text}>3</Text>
            </View>
        </TouchableOpacity>
    );
};

export default LevelBtn;

const styles = StyleSheet.create({
    container: {

    },
    top: {
        backgroundColor: Colors.darkBrown,
        padding: 5,
        paddingVertical: 10,
        alignItems: 'center',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    bottom: {
        backgroundColor: Colors.mediumBrown,
        padding: 5,
        paddingVertical: 10,
        alignItems: 'center',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },
    text: {
        color: 'white',
        fontSize: 24,
    },
});
