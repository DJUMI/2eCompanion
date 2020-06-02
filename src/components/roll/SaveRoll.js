import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const SaveRoll = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}> Roll saving throw</Text>
        </View>
    );
};

export default SaveRoll;

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    text: {

    },
});
