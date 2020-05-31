import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const HP = ({ hp: { current, max } }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{current}/{max}</Text>
        </View>
    );
};

export default HP;

const styles = EStyleSheet.create({
    container: {
        backgroundColor: '#8D0000',
        height: 150,
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 75,
        borderWidth: 5,
        borderColor: '#5E1D0E',
    },
    text: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 18,
    }
});
