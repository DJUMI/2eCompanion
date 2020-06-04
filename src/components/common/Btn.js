import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Colors from '../../constants/Colors';

const Btn = ({ title, onPress }) => (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
        <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
);

export { Btn };

const styles = EStyleSheet.create({
    btn: {
        flex: 1,
        backgroundColor: Colors.blue,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: '1rem',
        borderColor: 'white',
    },
    btnText: {
        color: 'white',
        fontSize: '18rem',
    }
});
