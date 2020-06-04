import React from 'react';
import { TextInput, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';

const Input = ({ icon, value, onChangeText, placeholder, secureTextEntry }) => (
    <View style={styles.container}>
        <MaterialCommunityIcons name={icon} size={20} color={Colors.gold} />
        <TextInput
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            placeholderTextColor={'gray'}
            autoCorrect={false}
            style={styles.input}
            value={value}
            onChangeText={onChangeText}
        />
    </View>
);

export { Input };

const styles = EStyleSheet.create({
    container: {
        height: '40rem',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: Colors.gold,

    },
    input: {
        paddingHorizontal: '10rem',
        fontSize: '18rem',
        lineHeight: '23rem',
        color: Colors.gold,
        flex: 2,
    },
});
