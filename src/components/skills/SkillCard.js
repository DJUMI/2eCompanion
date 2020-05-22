import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import ModCard from '../character/ModCard';
import Colors from '../../constants/Colors';
import ActionsList from './ActionsList';

const SkillCard = ({ skill: { name, mod, prof, item, temp, total } }) => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{name}</Text>
            </View>
            <View style={styles.itemContainer}>
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
                            value={item}
                        />
                        <ModCard
                            title='TEMP'
                            value={temp}
                        />
                    </View>
                    <Text style={styles.text}>=</Text>
                    <TouchableOpacity
                        style={styles.info}
                        onPress={() => console.log(`Roll ${name}`)}
                    >
                        <Text style={styles.total}>{total}</Text>
                    </TouchableOpacity>
                </View>
                <ActionsList />
            </View>
        </View>
    );
};

export default SkillCard;

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
        fontSize: 20,
        padding: 5,
        paddingLeft: 10,
    },
    itemContainer: {
        backgroundColor: Colors.lightBrown,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 5,
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
    total: {
        color: 'white',
        fontSize: 28,
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
