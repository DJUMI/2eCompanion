import React from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const Padder = () => (
    <View style={styles.padder} />
);

export { Padder };

const styles = EStyleSheet.create({
    padder: {
        padding: '3rem'
    }
});
