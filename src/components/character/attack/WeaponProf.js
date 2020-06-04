import React from 'react';
import { View, FlatList } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { Card } from '../../common';
import WeaponInfo from './WeaponInfo';

const WeaponProf = ({ data }) => (
    <View style={styles.container}>
        <Card title='Weapon Proficiencies'>
            <View style={styles.row}>
                <WeaponInfo title='Simple' value={data.simple} />
                <WeaponInfo title='Martial' value={data.martial} />
                <WeaponInfo title='Unarmed' value={data.unarmed} />
            </View>
            {data.other.length ?
                <View style={styles.row}>
                    <FlatList
                        horizontal
                        data={data.other}
                        contentContainerStyle={styles.list}
                        keyExtractor={(item, index) => index.toString()}
                        scrollEnabled={false}
                        renderItem={({ item }) => (
                            <View style={styles.itemContainer}>
                                <WeaponInfo title={item.title} value={item.value} />
                            </View>
                        )}
                    />
                </View> :
                null
            }
        </Card>
    </View>
);

export default WeaponProf;

const styles = EStyleSheet.create({
    container: {
        paddingHorizontal: '10rem',
        paddingTop: '10rem',
    },
    row: {
        flexDirection: 'row',
        paddingVertical: '15rem',
        alignItems: 'center',
    },
    list: {
        justifyContent: 'center',
        flex: 1
    },
    itemContainer: {
        width: '118rem',
    },
});
