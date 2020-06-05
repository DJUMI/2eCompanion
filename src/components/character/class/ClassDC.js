import React from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { Card } from '../../common';
import ArmorRow from '../armor/ArmorRow';
import WeaponInfo from '../attack/WeaponInfo';
import MovementList from './MovementList';

const ClassDC = ({ data: { classDC, movement } }) => {
    const total = classDC.mod.value + classDC.prof.value + classDC.item + classDC.temp + 10;

    return (
        <View style={styles.container}>
            <Card title='Class DC'>
                <View style={styles.contentContainer}>
                    <ArmorRow
                        mods={[
                            { title: classDC.mod.title, value: classDC.mod.value },
                            { title: 'PROF', value: `${classDC.prof.title}${classDC.prof.value}` },
                            { title: 'ITEM', value: classDC.item },
                            { title: 'TEMP', value: classDC.temp },
                        ]}
                        stat={{ title: 'DC', value: total }}
                    />
                    <View style={styles.movementContainer}>
                        <View style={styles.speedContainer}>
                            <WeaponInfo title='Speed' value={`${movement.speed} feet`} />
                        </View>

                        <View style={styles.moveListContainer}>
                            <MovementList data={movement.types}/>
                        </View>
                    </View>
                </View>
            </Card>
        </View>
    );
};

export default ClassDC;

const styles = EStyleSheet.create({
    container: {
        paddingHorizontal: '10rem',
        marginBottom: '10rem',
    },
    contentContainer: {
        paddingHorizontal: '5rem',
        paddingBottom: '10rem',
    },
    movementContainer: {
        flexDirection: 'row',

    },
    speedContainer: {
        flex: 1,
    },
    moveListContainer: {
        flex: 2,
    },
});
