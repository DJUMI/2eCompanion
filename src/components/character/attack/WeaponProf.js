import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import { Card } from '../../common';
import WeaponInfo from './WeaponInfo';
import { red } from 'react-native-redash';

const WeaponProf = ({ data }) => {
    return (
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
};

export default WeaponProf;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingTop: 10,
    },
    row: {
        flexDirection: 'row',
        paddingVertical: 15,
        alignItems: 'center',
    },
    list: {
        justifyContent: 'center',
        flex: 1
    },
    itemContainer: {
        width: 118,
    },
});
