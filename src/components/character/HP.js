import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HP = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>35/55</Text>
        </View>
    );
};

export default HP;

const styles = StyleSheet.create({
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
