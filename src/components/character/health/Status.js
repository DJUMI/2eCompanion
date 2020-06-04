import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { Padder, TinyCard } from '../../common';
import Conditions from './Conditions';

const Status = ({ data: { dying, wounded, conditions } }) => (
    <View style={styles.container}>
        <Conditions conditions={conditions} />
        <View style={styles.dyingWoundedContainer}>
            <TinyCard title='Dying'>
                <View style={styles.bottomContainer}>
                    <Text style={styles.text}>{dying}</Text>
                </View>
            </TinyCard>
            <Padder />
            <TinyCard title='Wounded'>
                <View style={styles.bottomContainer}>
                    <Text style={styles.text}>{wounded}</Text>
                </View>
            </TinyCard>
        </View>
    </View>
);

export default Status;

const styles = EStyleSheet.create({
    container: {
        padding: '10rem',
    },
    dyingWoundedContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: '10rem',
    },
    bottomContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: '16rem',
        padding: '5rem',
    },
});
