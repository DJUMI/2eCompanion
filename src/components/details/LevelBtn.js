import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Colors from '../../constants/Colors';

const LevelBtn = ({ level }) => (
    <TouchableOpacity onPress={() => console.log('Level Up!')}>
        <View style={styles.top}>
            <Text style={styles.text}>Level</Text>
        </View>
        <View style={styles.bottom}>
            <Text style={styles.text}>{level}</Text>
        </View>
    </TouchableOpacity>
);

export default LevelBtn;

const styles = EStyleSheet.create({
    top: {
        backgroundColor: Colors.darkBrown,
        padding: '5rem',
        paddingVertical: '10rem',
        alignItems: 'center',
        borderTopLeftRadius: '5rem',
        borderTopRightRadius: '5rem',
    },
    bottom: {
        backgroundColor: Colors.mediumBrown,
        padding: '5rem',
        paddingVertical: '10rem',
        alignItems: 'center',
        borderBottomLeftRadius: '5rem',
        borderBottomRightRadius: '5rem',
    },
    text: {
        color: 'white',
        fontSize: '24rem',
    },
});
