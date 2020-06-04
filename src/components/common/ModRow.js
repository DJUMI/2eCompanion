import React from 'react';
import { Text, View, FlatList } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { ModCard } from './ModCard';
import { CircleBtn } from './CircleBtn';

const ModRow = ({ mods, stat }) => (
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
        {stat ?
            <View style={styles.btnContainer}>
                <Text style={styles.text}>=</Text>
                <CircleBtn
                    title={stat.title}
                    prof={stat.prof}
                    mod={stat.mod}
                />
            </View> :
            null
        }
    </View>
);

export { ModRow };

const styles = EStyleSheet.create({
    row: {
        flexDirection: 'row',
        marginBottom: '5rem',
    },
    modContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
    },
    btnContainer: {
        flexDirection: 'row',
        paddingLeft: '10rem',
    },
    text: {
        color: 'white',
        fontSize: '20rem',
        paddingRight: '5rem',
        alignSelf: 'center',
    },
});
