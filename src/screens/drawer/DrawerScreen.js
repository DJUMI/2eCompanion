import React from 'react';
import { Keyboard, KeyboardAvoidingView, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

import Colors from '../../constants/Colors';
import DrawerContent from '../../components/drawer/DrawerContent';
import DrawerFooter from '../../components/drawer/DrawerFooter';

const DrawerScreen = ({ navigation }) => {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <KeyboardAvoidingView 
                    style={styles.container}
                    behavior='padding'
                >
                    <DrawerContent navigation={navigation} />
                    {/* <DrawerFooter /> */}
                </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
};

export default DrawerScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.blackBean,
        justifyContent: 'center',
        //alignItems: 'center',
        //paddingTop: 80,
    },
});
