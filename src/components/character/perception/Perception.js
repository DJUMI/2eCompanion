import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { Card, ModRow } from '../../common';
import Colors from '../../../constants/Colors';
import SensesList from './SensesList';

const Perception = ({ data }) => {
    const total = data.mod.value + data.prof.value + data.item + data.temp;
    return (
        <View style={styles.container}>
            <Card title='Perception'>
                <View style={styles.itemContainer}>
                    <ModRow 
                        mods={[
                            { title: data.mod.title, value: data.mod.value },
                            { title: 'PROF', value: `${data.prof.title}${data.prof.value}` },
                            { title: 'ITEM', value: data.item },
                            { title: 'TEMP', value: data.temp },
                        ]}
                         stat={{ title: 'Perception Check', prof: data.prof.title, mod: total }} 
                    />
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.btnText}>Initiative</Text>
                        </TouchableOpacity>
                        <SensesList data={data.senses}/>
                    </View>
                </View>
            </Card>
        </View>
    );
};

export default Perception;

const styles = EStyleSheet.create({
    container: {
        marginTop: 10,
        paddingHorizontal: 10,
    },
    itemContainer: {
        padding: 5,
        paddingBottom: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    btn: {
        flex: 2,
        backgroundColor: Colors.blue,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'white',
    },
    btnText: {
        color: 'white',
        fontSize: 18,
    }
});
