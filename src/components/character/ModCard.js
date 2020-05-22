import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../constants/Colors';

const ModCard = ({ title, value }) => {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.text}>{title}</Text>
            </View>
            <View style={styles.bottom}>
                <Text style={styles.text}>{value}</Text>
            </View>
        </View>
    );
};

export default ModCard;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignSelf: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    top: {
        backgroundColor: Colors.darkBrown,
        padding: 5,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    bottom: {
        backgroundColor: Colors.mediumBrown,
        padding: 5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 16,
    },
});
