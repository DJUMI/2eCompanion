import React, { useContext, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Context } from '../../context/RollContext';

import Colors from '../../constants/Colors';

const SaveRoll = ({ navigation, params }) => {
    const { title, mod, bonus } = params;
    const { state, roll } = useContext(Context);
    const arrSum = arr => arr.reduce((a,b) => a + b, 0)
    var rollTotal = arrSum(state.rolls.slice(-1)[0].results);
    var total = rollTotal + mod + bonus;

    useEffect(() => {
        roll(20, 1, mod, bonus);
    }, []);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => { navigation.pop() }} style={styles.closeBtn}>
                <Feather name="x" size={30} color={Colors.lightBlue} />
            </TouchableOpacity>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>{title}</Text>
            </View>
            <View style={styles.iconContainer}>
                <View style={styles.shadow}>
                    <FontAwesome5 name="dice-d20" size={80} color={Colors.lightBlue} />
                </View>
            </View>
            <View style={styles.infoContainer}>
                <View style={styles.itemContainer}>
                    <Text style={styles.text}>Die</Text>
                    <Text style={styles.text}>1d20</Text>
                    <View style={styles.valueContainer}>
                        <Text style={styles.value}>{rollTotal}</Text>
                    </View>
                </View>
                <View style={styles.operatorContainer}>
                    <Text style={styles.operator}>+</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.text}>Mod</Text>
                    <View style={styles.valueContainer}>
                        <Text style={styles.value}>{mod}</Text>
                    </View>
                </View>
                <View style={styles.operatorContainer}>
                    <Text style={styles.operator}>+</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.text}>Bonus</Text>
                    <View style={styles.valueContainer}>
                        <Text style={styles.value}>{bonus}</Text>
                    </View>
                </View>
                <View style={styles.operatorContainer}>
                    <Text style={styles.operator}>=</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.text}>Total</Text>
                    <View style={styles.valueContainer}>
                        <Text style={styles.value}>{total}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default SaveRoll;

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 15,
    },
    closeBtn: {
        alignItems: 'flex-end',
        padding: 10
    },
    titleContainer: {
        alignItems: 'center',
        padding: 10,
    },
    titleText: {
        color: Colors.lightBlue,
        fontSize: 24,
    },
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 3,
    },
    shadow: {
        borderBottomWidth: 1,
        borderColor: Colors.lightBlue,
        padding: 20,
        elevation: 5,
        shadowColor: Colors.lightBlue,
        shadowOffset: {
            width: -5,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    infoContainer: {
        flex: 2,
        flexDirection: 'row',
    },
    itemContainer: {
        flex: 1,
        alignItems: 'center',
    },
    text: {

    },
    operatorContainer: {
        justifyContent: 'flex-end',
        paddingBottom: 58
    },
    operator: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.lightBlue
    },
    valueContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 50
    },
    value: {
        fontSize: 30,
        fontWeight: 'bold',
        color: Colors.lightBlue
    },
});
