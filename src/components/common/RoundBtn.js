import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Colors from '../../constants/Colors';

const RoundBtn = ({ title, onPress, fontSize }) => (
    <TouchableOpacity style={styles.contentBtn} onPress={onPress}>
        <Text style={styles.btnText} style={{ color: 'white', fontWeight: 'bold', fontSize }}>{title}</Text>
    </TouchableOpacity>
);

export { RoundBtn };

const styles = EStyleSheet.create({
    contentBtn: {
        flex: 1,
        backgroundColor: Colors.blue,
        borderWidth: '1rem',
        borderColor: 'white',
        borderRadius: '5rem',
        padding: '10rem',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnText: {
        color: 'white',
        fontWeight: 'bold',
    },
});
