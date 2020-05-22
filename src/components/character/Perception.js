import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Colors from '../../constants/Colors';
import ModCard from './ModCard';
import SensesList from './SensesList';

const Perception = () => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Perception</Text>
            </View>
            <View style={styles.itemContainer}>
                <View style={styles.row}>
                    <View style={styles.modContainer}>
                        <ModCard
                            title='MOD'
                            value={4}
                        />
                        <ModCard
                            title='PROF'
                            value='E7'
                        />
                        <ModCard
                            title='ITEM'
                            value={0}
                        />
                        <ModCard
                            title='TEMP'
                            value={0}
                        />
                    </View>
                    <Text style={styles.text}>=</Text>
                    <TouchableOpacity
                        style={styles.info}
                        onPress={() => console.log(`Roll Perception`)}
                    >
                        <Text style={styles.value}>E11</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>Initiative</Text>
                    </TouchableOpacity>
                    <SensesList />
                </View>
            </View>
        </View>
    );
};

export default Perception;

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        paddingHorizontal: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    titleContainer: {
        backgroundColor: Colors.blue,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    title: {
        color: 'white',
        fontSize: 18,
        padding: 5,
        paddingLeft: 10,
    },
    itemContainer: {
        backgroundColor: Colors.lightBrown,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        padding: 5,
        paddingBottom: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    info: {
        backgroundColor: Colors.mediumBrown,
        borderColor: Colors.darkBrown,
        borderWidth: 3,
        height: 80,
        width: 80,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    value: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    text: {
        color: 'white',
        fontSize: 20,
        paddingRight: 5,
        alignSelf: 'center',
    },
    modContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        paddingRight: 10,
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
