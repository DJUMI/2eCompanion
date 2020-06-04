import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Colors from '../../constants/Colors';

const EditHeader = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.iconLeftContainer}
                onPress={() => navigation.navigate('Tabs')}
            >
                <Feather name="x" size={30} color="white" />
            </TouchableOpacity>
            <View style={styles.textContainer}>
                <Text style={styles.text}>EDIT MODE</Text>
            </View>
            <TouchableOpacity 
                style={styles.iconRightContainer}
                onPress={() => navigation.navigate('Tabs')}
            >
                <Feather name="check" size={30} color="white" />
            </TouchableOpacity>
        </View>
    );
};

export { EditHeader };

const styles = EStyleSheet.create({
    container: {
        backgroundColor: Colors.crimson,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: '30rem',
        paddingBottom: '10rem',
    },
    iconLeftContainer: {
        flex: 1,
        paddingLeft: '20rem',
    },
    textContainer: {
        flex: 2,
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: '24rem',
    },
    iconRightContainer: {
        flex: 1,
        alignItems: 'flex-end',
        paddingRight: '20rem',
    }
});
