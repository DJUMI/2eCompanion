import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Colors from '../../constants/Colors';

const CircleBtn = ({ title, value }) => {
    return (
        <TouchableOpacity
            style={styles.btn}
            onPress={() => console.log(`Roll ${title}`)}
        >
            <Text style={styles.value}>{value}</Text>
        </TouchableOpacity>
    );
};

export { CircleBtn };

const styles = EStyleSheet.create({
    btn: {
        backgroundColor: Colors.mediumBrown,
        borderColor: Colors.darkBrown,
        borderWidth: 3,
        height: 80,
        width: 80,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    value: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
