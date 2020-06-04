import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import SignUpForm from '../../components/auth/SignUpForm';
import Colors from '../../constants/Colors';

const SignUpScreen = ({ navigation }) => (
    <View style={styles.container}>
        <View style={styles.card}>
            <SignUpForm />
            <View style={styles.signUpContainer}>
                <Text style={styles.text}>Already have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                    <Text style={styles.link}>Sign In!</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
);

export default SignUpScreen;

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
