import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../../constants/Colors';

const SaveCard = ({title, value}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity 
                style={styles.info}
                onPress={() => console.log(`Roll ${title} save`)}
            >
                <Text style={styles.value}>{value}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SaveCard;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    title: {
        color: 'white',
        fontSize: 18,
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
    value: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
