import React, { useContext } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Colors from '../../constants/Colors';
import { Context } from '../../context/RollContext';

const Dice = () => {
    const { state, addDie } = useContext(Context);

    const onPress = (die) => {
        addDie(die);
    };

    return (
        <View style={styles.container}>
            <View style={styles.bagContainer}>
                <Image
                    style={styles.image}
                    source={require('../../../assets/icons/leather-pouch.png')}
                    resizeMode='contain'
                />
            </View>
            <TouchableOpacity style={styles.d10} onPress={() => onPress(10)}>
                <MaterialCommunityIcons name="dice-d10" size={50} color='#EDADC7' />
            </TouchableOpacity>
            <TouchableOpacity style={styles.d6} onPress={() => onPress(6)}>
                <MaterialCommunityIcons name="dice-d6" size={50} color='#F1BF98' />
            </TouchableOpacity>
            <TouchableOpacity style={styles.d12} onPress={() => onPress(12)}>
                <MaterialCommunityIcons name="dice-d12" size={50} color='#3392FF' />
            </TouchableOpacity>
            <TouchableOpacity style={styles.d4} onPress={() => onPress(4)}>
                <MaterialCommunityIcons name="dice-d4" size={50} color='#8B95C9' />
            </TouchableOpacity>
            <TouchableOpacity style={styles.d20} onPress={() => onPress(20)}>
                <MaterialCommunityIcons name="dice-d20" size={50} color='#9368B7' />
            </TouchableOpacity>
            <TouchableOpacity style={styles.d8} onPress={() => onPress(8)}>
                <MaterialCommunityIcons name="dice-d8" size={50} color='#B4DC7F' />
            </TouchableOpacity> 
        </View>
    );
};

export default Dice;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    row: {
        flex: 3,
        flexDirection: 'row',
    },
    bagContainer: {
        flex: 3,
        paddingLeft: 20,
        paddingTop: 10,

    },
    image: {
        height: 100,
        width: 100,
        transform: [{ rotate: '120deg' }],
    },
    topContainer: {
        flex: 2,
    },
    diceContainer: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    d10Container: {

        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    d10: {
        position: 'absolute',
        left: 125,
        bottom: 120,
        transform: [{ rotate: '350deg' }],
    },
    d6Container: {

    },
    d6: {
        position: 'absolute',
        left: 30,
        bottom: 10,
        transform: [{ rotate: '5deg' }],
    },
    d12Container: {

    },
    d12: {
        position: 'absolute',
        left: 180,
        bottom: 95,
        transform: [{ rotate: '20deg' }],
    },
    d14Container: {

    },
    d4: {
        position: 'absolute',
        left: 95,
        bottom: 20,
        transform: [{ rotate: '350deg' }],
    },
    d20Container: {

    },
    d20: {
        position: 'absolute',
        left: 175,
        bottom: 10,
        transform: [{ rotate: '5deg' }],
    },
    d8Container: {

    },
    d8: {
        position: 'absolute',
        left: 140,
        bottom: 55,
    },
});