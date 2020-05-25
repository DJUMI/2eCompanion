import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import ModCard from '../../ModCard';
import StatCircle from '../../StatCircle';

const ArmorRow = ({mods, stat}) => {
    return (
        <View style={styles.row}>
            <View style={styles.modContainer}>
                {mods.map((mod) => (
                    <ModCard title={mod.title} value={mod.value}/>
                ))}
            </View>
            <Text style={styles.text}>=</Text>
            <StatCircle
                title={stat.title}
                value={stat.value}
            />
        </View>
    );
};

export default ArmorRow;

const styles = EStyleSheet.create({
    row: {
        flexDirection: 'row',
        paddingVertical: 5,
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