import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                autoCorrect={false}
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    );
};

export { Input };

const styles = StyleSheet.create({
    container: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1, 
    },
    label: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1,
    },
    input: {
        paddingHorizontal: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2,
    },
});
