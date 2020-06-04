import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { useNavigation } from '@react-navigation/native';

import Colors from '../../constants/Colors';

const CircleBtn = ({ title, prof, mod }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('Roll', { title, mod, bonus: 0 })}
        >
            <Text style={styles.value}>{prof}{mod}</Text>
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
