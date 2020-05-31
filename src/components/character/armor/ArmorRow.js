import React from 'react';
import { Text, View, FlatList } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { ModCard, StatCircle } from '../../common';

const ArmorRow = ({mods, stat}) => {
    return (
        <View style={styles.row}>
            <FlatList
                horizontal
                data={mods}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => {
                    return <ModCard title={item.title} value={item.value} />
                }}
                contentContainerStyle={styles.modContainer}
            />
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
