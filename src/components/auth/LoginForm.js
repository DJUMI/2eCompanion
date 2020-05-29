import React, { useState } from 'react';
import firebase from 'firebase';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { Input, Padder, Spinner } from '../common';
import Colors from '../../constants/Colors';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const onLogin = () => {
        setLoading(true);
        setError('');
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(onLoginSuccess)
            .catch(onLoginFail);
    };

    const onLoginSuccess = () => {
        setEmail('');
        setPassword('');
        setLoading(false);
        setError('');
    };

    const onLoginFail = () => {
        setError('Authentication Failed');
        setLoading(false);
    };

    const renderButton = () => {
        if (loading) {
            return <Spinner />
        }
        return (
            <TouchableOpacity
                style={styles.btn}
                onPress={onLogin}
            >
                <Text style={styles.btnText}>Log In</Text>
            </TouchableOpacity>
        );
    }

    return (
        <View style={styles.container}>
            <Input
                placeholder='user@gmail.com'
                label='Email'
                value={email}
                onChangeText={email => setEmail(email)}
            />
            <Padder />
            <Input
                secureTextEntry={true}
                placeholder=''
                label='Password'
                value={password}
                onChangeText={password => setPassword(password)}
            />
            <Padder />
            {error ?
                <Text style={styles.error}>{error}</Text> :
                null
            }
            {renderButton()}
        </View>
    );
};

export default LoginForm;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    error: {
        fontSize: 20,
        color: 'red',
    },
    btn: {
        padding: 10,
        backgroundColor: Colors.blue,
    },
    btnText: {
        color: 'white',
        fontSize: 18,
    }
});
