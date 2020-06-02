import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const Modal = ({ navigation, children }) => (
    <TouchableWithoutFeedback onPress={() => navigation.pop()}>
        <View style={styles.container}>
            <TouchableWithoutFeedback>
                <View style={styles.inner}>
                    {children}
                </View>
            </TouchableWithoutFeedback>
        </View>
    </TouchableWithoutFeedback>
);

export { Modal };

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        padding: '30rem',
        paddingVertical: '100rem',
    },
    inner: {
        flex: 1,
    },
});