import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { ModCard } from './ModCard';
import { CircleBtn } from './CircleBtn';

const ModRow = ({mods, stat}) => {
    return (
        <View style={styles.row}>
            <View style={styles.modContainer}>
                {mods.map((mod) => (
                    <ModCard title={mod.title} value={mod.value}/>
                ))}
            </View>
            <Text style={styles.text}>=</Text>
            <CircleBtn
                title={stat.title}
                value={stat.value}
            />
        </View>
    );
};

export { ModRow };

const styles = EStyleSheet.create({
    row: {
        flexDirection: 'row',
        marginBottom: 5,
    },
    modContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        paddingRight: 10,
    },
    text: {
        color: 'white',
        fontSize: 20,
        paddingRight: 5,
        alignSelf: 'center',
    },
});
