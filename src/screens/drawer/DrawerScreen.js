import React from 'react';
import { Keyboard, KeyboardAvoidingView, StyleSheet, TouchableWithoutFeedback } from 'react-native';

import Colors from '../../constants/Colors';
import DrawerContent from '../../components/drawer/DrawerContent';

const DrawerScreen = ({ navigation }) => (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
            style={styles.container}
            behavior='padding'
        >
            <DrawerContent navigation={navigation} />
        </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
);

export default DrawerScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.blackBean,
        justifyContent: 'center',
    },
});
