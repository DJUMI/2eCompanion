import React from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Colors from '../../constants/Colors';

const Separator = () => (
    <View style={styles.separator} />
);

export { Separator };

const styles = EStyleSheet.create({
    separator: {
        borderBottomColor: Colors.darkBrown,
        borderBottomWidth: '1rem',
        marginHorizontal: '5rem',
    }
});
