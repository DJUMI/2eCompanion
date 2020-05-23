import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Colors from '../../constants/Colors';
import Accordion from '../Accordion';

const FeatCard = ({ name, feats }) => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{name}</Text>
            </View>
            <View style={styles.itemContainer}>
                <Accordion data={feats}/>
            </View>
        </View>
    );
};

export default FeatCard;

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
        alignItems: 'center',
    },
    title: {
        color: 'white',
        fontSize: 20,
        padding: 5,
        paddingLeft: 10,
    },
    itemContainer: {
        backgroundColor: Colors.mediumBrown,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        overflow: 'hidden',
    },
});
