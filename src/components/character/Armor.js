import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import StatCircle from '../StatCircle';
import ModCard from '../ModCard';
import Colors from '../../constants/Colors';

const Armor = () => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Armor Class</Text>
            </View>
            <View style={styles.itemContainer}>
                <View style={styles.row}>
                    <View style={styles.modContainer}>
                        <ModCard
                            title='MOD'
                            value={1}
                        />
                        <ModCard
                            title='PROF'
                            value='T5'
                        />
                        <ModCard
                            title='ITEM'
                            value={1}
                        />
                        <ModCard
                            title='TEMP'
                            value={0}
                        />
                    </View>
                    <Text style={styles.text}>=</Text>
                    <StatCircle
                        title='AC'
                        value={17}
                    />
                </View>
                <View style={styles.row2}>
                    <View style={styles.modContainer}>
                        <ModCard
                            title='Bonus'
                            value={2}
                        />
                        <ModCard
                            title='TEMP'
                            value={1}
                        />
                        <ModCard
                            title='HARD'
                            value={3}
                        />
                        <ModCard
                            title='BT'
                            value={3}
                        />
                    </View>
                    <Text style={styles.text}>=</Text>
                    <StatCircle
                        title='Shield'
                        value={15}
                    />
                </View>
            </View>
        </View>
    );
};

export default Armor;

const styles = StyleSheet.create({
    container: {
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
        paddingBottom: 5,
        padding: 5,
    },
    row: {
        flexDirection: 'row',
        marginBottom: 5,
    },
    row2: {
        flexDirection: 'row',
        borderTopWidth: 1,
        borderColor: Colors.darkBrown,
        paddingTop: 5,
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
