import React, { useContext } from 'react';
import { TouchableOpacity, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { FontAwesome5 } from '@expo/vector-icons';

import Colors from '../../constants/Colors';
import { Context } from '../../context/RollContext';

const Operators = () => {
    const { 
        addDivide, 
        addTimes, 
        addMinus, 
        addPlus, 
        rollCustom 
    } = useContext(Context);

    return (
        <View style={styles.operatorContainer}>
            <TouchableOpacity
                style={styles.operator}
                onPress={addDivide}
            >
                <FontAwesome5
                    name='divide'
                    size={28}
                    color={Colors.lightBlue}
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.operator}
                onPress={addTimes}
            >
                <FontAwesome5
                    name='times'
                    size={28}
                    color={Colors.lightBlue}
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.operator}
                onPress={addMinus}
            >
                <FontAwesome5
                    name='minus'
                    size={28}
                    color={Colors.lightBlue}
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.operator}
                onPress={addPlus}
            >
                <FontAwesome5
                    name='plus'
                    size={28}
                    color={Colors.lightBlue}
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.roll}
                onPress={rollCustom}
            >
                <FontAwesome5
                    name='dice-d20'
                    size={28}
                    color={Colors.lightBlue}
                />
            </TouchableOpacity>
        </View>
    );
};

export default Operators;

const styles = EStyleSheet.create({
    operatorContainer: {
        flex: 1,
        paddingRight: '10rem',
        marginBottom: '10rem',
        borderColor: Colors.lightBlue,
        borderLeftWidth: '1rem',
    },
    operator: {
        flex: 1,
        borderBottomWidth: '1rem',
        borderColor: Colors.lightBlue,
        alignItems: 'center',
        justifyContent: 'center',
    },
    roll: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
