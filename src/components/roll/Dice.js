import React, { useContext } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Context } from '../../context/RollContext';

const Dice = () => {
    const { addDie } = useContext(Context);

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
                <MaterialCommunityIcons name="dice-d10" size={EStyleSheet.value('50rem')} color='#EDADC7' />
            </TouchableOpacity>
            <TouchableOpacity style={styles.d6} onPress={() => onPress(6)}>
                <MaterialCommunityIcons name="dice-d6" size={EStyleSheet.value('50rem')} color='#F1BF98' />
            </TouchableOpacity>
            <TouchableOpacity style={styles.d12} onPress={() => onPress(12)}>
                <MaterialCommunityIcons name="dice-d12" size={EStyleSheet.value('50rem')} color='#3392FF' />
            </TouchableOpacity>
            <TouchableOpacity style={styles.d4} onPress={() => onPress(4)}>
                <MaterialCommunityIcons name="dice-d4" size={EStyleSheet.value('50rem')} color='#8B95C9' />
            </TouchableOpacity>
            <TouchableOpacity style={styles.d20} onPress={() => onPress(20)}>
                <MaterialCommunityIcons name="dice-d20" size={EStyleSheet.value('50rem')} color='#9368B7' />
            </TouchableOpacity>
            <TouchableOpacity style={styles.d8} onPress={() => onPress(8)}>
                <MaterialCommunityIcons name="dice-d8" size={EStyleSheet.value('50rem')} color='#B4DC7F' />
            </TouchableOpacity> 
        </View>
    );
};

export default Dice;

const styles = EStyleSheet.create({
    container: {
        flex: 1,
    },
    row: {
        flex: 3,
        flexDirection: 'row',
    },
    bagContainer: {
        flex: 3,
        paddingLeft: '20rem',
        paddingTop: '10rem',

    },
    image: {
        height: '100rem',
        width: '100rem',
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
    d10: {
        position: 'absolute',
        left: '125rem',
        bottom: '120rem',
        transform: [{ rotate: '350deg' }],
    },
    d6: {
        position: 'absolute',
        left: '30rem',
        bottom: '10rem',
        transform: [{ rotate: '5deg' }],
    },
    d12: {
        position: 'absolute',
        left: '180rem',
        bottom: '95rem',
        transform: [{ rotate: '20deg' }],
    },
    d4: {
        position: 'absolute',
        left: '95rem',
        bottom: '20rem',
        transform: [{ rotate: '350deg' }],
    },
    d20: {
        position: 'absolute',
        left: '175rem',
        bottom: '10rem',
        transform: [{ rotate: '5deg' }],
    },
    d8: {
        position: 'absolute',
        left: '140rem',
        bottom: '55rem',
    },
});