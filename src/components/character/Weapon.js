import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import ModCard from './ModCard';
import Colors from '../../constants/Colors';

const Weapon = ({ item: { mod, prof, itemBonus, temp, weapon, dmg, traits } }) => {
    return (
        <View>
            <View style={styles.row}>
                <View style={styles.modContainer}>
                    <ModCard
                        title='MOD'
                        value={mod}
                    />
                    <ModCard
                        title='PROF'
                        value={prof}
                    />
                    <ModCard
                        title='ITEM'
                        value={itemBonus}
                    />
                    <ModCard
                        title='TEMP'
                        value={temp}
                    />
                </View>
                <Text style={styles.text}>=</Text>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => console.log(`Roll Perception`)}
                >
                    <Text style={styles.value}>6</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row2}>
                <View style={styles.infoContainer}>
                    <View style={styles.title}>
                        <Text style={styles.titleText}>Weapon</Text>
                    </View>
                    <View style={styles.info}>
                        <Text style={styles.infoText}>{weapon}</Text>
                    </View>
                </View>
                <View style={styles.infoContainer}>
                    <View style={styles.title}>
                        <Text style={styles.titleText}>DMG</Text>
                    </View>
                    <View style={styles.info}>
                        <Text style={styles.infoText}>{dmg}</Text>
                    </View>
                </View>
                <View style={styles.infoContainer}>
                    <View style={styles.title}>
                        <Text style={styles.titleText}>Traits</Text>
                    </View>
                    <View style={styles.info}>
                        <Text style={styles.infoText}>{traits}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default Weapon;

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    row2: {
        flexDirection: 'row',
        borderColor: Colors.darkBrown,
        paddingBottom: 10,
        borderBottomWidth: 1,
    },
    btn: {
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
    infoContainer: {
        flex: 1,
        paddingHorizontal: 5,
    },
    title: {
        backgroundColor: Colors.darkBrown,
        alignSelf:'center',
        paddingHorizontal: 5,
        paddingTop: 5,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    titleText: {
        color: 'white',
    },
    info: {
        borderColor: Colors.darkBrown,
        borderWidth: 1,
        backgroundColor: 'white',
    },
    infoText: {
        padding: 5,
    },
});
