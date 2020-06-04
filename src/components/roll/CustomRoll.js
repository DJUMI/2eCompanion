import React, { useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import EStyleSheet from 'react-native-extended-stylesheet';

import Colors from '../../constants/Colors';
import Dice from './Dice';
import Numbers from './Numbers';
import Operators from './Operators';
import { Context } from '../../context/RollContext';

const CustomRoll = () => {
    const { state, clearCustomRoll } = useContext(Context); 

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>{state.customRollText.join('')}</Text>
                {state.customRollText.length ?
                    <TouchableOpacity onPress={clearCustomRoll}>
                        <Feather name="delete" size={28} color={Colors.lightBlue} />
                    </TouchableOpacity> :
                    null
                }
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.numberDiceContainer}>
                    <View style={styles.diceContainer}>
                        <Dice />
                    </View>
                    <View style={styles.numberContainer}>
                        <Numbers/>
                    </View>
                </View>
                <Operators />
            </View>
        </View>
    );
};

export default CustomRoll;

const styles = EStyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        flex: 1,
        paddingTop: '20rem',
        marginHorizontal: '10rem',
        marginTop: '10rem',
        padding: '5rem',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: '1rem',
        borderColor: Colors.lightBlue,
    },
    headerText: {
        alignSelf: 'center',
        color: Colors.lightBlue,
        fontSize: '20rem',
    },
    contentContainer: {
        flex: '15rem',
        flexDirection: 'row',
    },
    numberDiceContainer: {
        flex: 4,
    },
    diceContainer: {
        flex: 1,
    },
    numberContainer: {
        flex: 1,
    },
});
