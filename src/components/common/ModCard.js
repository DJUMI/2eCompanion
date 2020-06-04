import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Colors from '../../constants/Colors';

const ModCard = ({ title, value }) => (
    <View style={styles.container}>
        <View style={styles.top}>
            <Text style={styles.text}>{title}</Text>
        </View>
        <View style={styles.bottom}>
            <Text style={styles.text}>{value}</Text>
        </View>
    </View>
);

export { ModCard };

const styles = EStyleSheet.create({
    container: {
        justifyContent: 'center',
        alignSelf: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: '1rem',
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    top: {
        backgroundColor: Colors.darkBrown,
        padding: '5rem',
        borderTopLeftRadius: '5rem',
        borderTopRightRadius: '5rem',
    },
    bottom: {
        backgroundColor: Colors.mediumBrown,
        padding: '5rem',
        borderBottomLeftRadius: '5rem',
        borderBottomRightRadius: '5rem',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: '16rem',
    },
});
