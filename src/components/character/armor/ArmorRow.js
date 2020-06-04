import React from 'react';
import { Text, View, FlatList } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { ModCard, StatCircle } from '../../common';

const ArmorRow = ({ mods, stat }) => (
    <View style={styles.row}>
        <FlatList
            horizontal
            data={mods}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => {
                return <ModCard title={item.title} value={item.value} />
            }}
            scrollEnabled='false'
            contentContainerStyle={styles.modContainer}
        />
        <Text style={styles.text}>=</Text>
        <StatCircle
            title={stat.title}
            value={stat.value}
        />
    </View>
);

export default ArmorRow;

const styles = EStyleSheet.create({
    row: {
        flexDirection: 'row',
        paddingVertical: '5rem',
    },
    modContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        paddingRight: '10rem',
    },
    text: {
        color: 'white',
        fontSize: '20rem',
        paddingRight: '5rem',
        alignSelf: 'center',
    },
});
