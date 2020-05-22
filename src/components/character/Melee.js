import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Colors from '../../constants/Colors';
import Weapon from './Weapon';

const Melee = () => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Melee Strikes</Text>
            </View>
            <View style={styles.itemContainer}>
                <Weapon 
                    item={{
                        mod: '1',
                        prof: 'T5',
                        itemBonus: '0',
                        temp: '0',
                        weapon: 'Staff',
                        dmg: '1d6+1',
                        traits: ''
                    }} 
                />
                <Weapon
                    item={{
                        mod: '1',
                        prof: 'T5',
                        itemBonus: '0',
                        temp: '0',
                        weapon: 'Unarmed',
                        dmg: '1d4+1',
                        traits: 'agile'
                    }} 
                />
            </View>
        </View>
    );
};

export default Melee;

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
});
