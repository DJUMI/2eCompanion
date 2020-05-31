import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { Btn, Input, Padder, Spinner } from '../common';
import { Context } from '../../context/UserContext';

const SignUpForm = () => {
    const { state, emailChanged, passwordChanged, signUp } = useContext(Context);

    const renderButton = () => {
        if (state.loading) {
            return <Spinner />
        }
        return (
            <Btn
                title='Register'
                onPress={() => signUp({ email: state.email, password: state.password })}
            />
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Input
                    placeholder='Email'
                    icon='email-outline'
                    value={state.email}
                    onChangeText={email => emailChanged(email)}
                />
                <Padder />
                <Padder />
                <Input
                    secureTextEntry={true}
                    placeholder='Password'
                    icon='lock-outline'
                    value={state.password}
                    onChangeText={password => passwordChanged(password)}
                />
            </View>
            <View style={styles.errorContainer}>
                {state.error ?
                    <Text style={styles.error}>Authentication Failed!</Text> :
                    null
                }
            </View>
            <View style={styles.btnContainer}>
                {renderButton()}
            </View>
        </View>
    );
};

export default SignUpForm;

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        padding: '20rem',
    },
    inputContainer: {
    },
    errorContainer: {
        flex: 2,
        justifyContent: 'flex-end',
    },
    error: {
        fontSize: '20rem',
        color: 'white',
    },
    btnContainer: {
        marginVertical: '16rem',
        flex: 3,
    },
});