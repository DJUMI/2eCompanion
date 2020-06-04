import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Colors from '../../constants/Colors';

const Loading = () => (
    <View style={styles.container}>
        <Text style={styles.text}>...</Text>
    </View>
);

export { Loading };

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.crimson,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: Colors.gold,
        fontSize: '24rem',
        fontWeight: 'bold',
    }
});
