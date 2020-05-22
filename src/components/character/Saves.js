import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Colors from '../../constants/Colors';
import SaveCard from './SaveCard';

const Saves = () => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Saving Throws</Text>
            </View>
            <View style={styles.itemContainer}>
                <SaveCard 
                    title='Fortitude'
                    value='E8'
                />
                <SaveCard 
                    title='Reflex'
                    value='T6'
                />
                <SaveCard 
                    title='Will'
                    value='E11'
                />
            </View>
        </View>
    );
};

export default Saves;

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
        flexDirection: 'row',
        backgroundColor: Colors.lightBrown,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        padding: 5,
        paddingHorizontal: 15,
        justifyContent: 'space-between',
    },
});
