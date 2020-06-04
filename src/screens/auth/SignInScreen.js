import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import SignInForm from '../../components/auth/SignInForm';
import Colors from '../../constants/Colors';

const SignInScreen = ({ navigation }) => (
    <View style={styles.container}>
        <View style={styles.card}>
            <SignInForm />
            <View style={styles.signUpContainer}>
                <Text style={styles.text}>Don't have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <Text style={styles.link}>Sign Up!</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
);

export default SignInScreen;

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'tan',
        justifyContent: 'center',
        padding: '10rem',
    },
    card: {
        height: '300rem',
        backgroundColor: Colors.crimson,
        borderWidth: '2rem',
        borderColor: Colors.gold,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: '2rem',
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    signUpContainer: {
        flexDirection: 'row',
        paddingBottom: '20rem',
        alignSelf: 'center',
    },
    text: {
        color: 'white'
    },
    link: {
        color: Colors.gold,
        fontWeight: 'bold',
    },
});
