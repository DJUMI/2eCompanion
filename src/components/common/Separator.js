import React from 'react';
import { View } from 'react-native';

import Colors from '../../constants/Colors';

const Separator = () => {
    return (
        <View
            style={{
                borderBottomColor: Colors.darkBrown,
                borderBottomWidth: 1,
                marginHorizontal: 5,
            }} 
        />
    );
};

export { Separator };
