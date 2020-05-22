import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Colors from '../constants/Colors';

const renderContent = (feat) => {
    return (
        <View style={styles.contentContainer}>
            <Text style={styles.descriptionText}>{feat.description}</Text>
        </View>
    );
};



const Accordion = ({ data }) => {
    const [selected, setSelected] = useState(undefined);

    const onPress = i => {
        selected === i ?
        setSelected(undefined) :
        setSelected(i)
     };

    return (
        <View style={styles.container}>
            {data.map((feat, i) => (
                <View>
                    <View style={styles.nameContainer}>
                        <TouchableOpacity onPress={() => onPress(i)}>
                            <Text style={styles.name}>{feat.name}</Text>
                        </TouchableOpacity>
                    </View>
                    {selected === i ?
                        renderContent(feat) :
                        null
                    }
                </View>
            ))}
        </View>
    );
};

export default Accordion;

const styles = StyleSheet.create({
    container: {
    },
    nameContainer: {
        borderBottomColor: Colors.darkBrown,
        borderBottomWidth: 1,
        marginHorizontal: 5,
        marginTop: 5,
        paddingBottom: 5,
    },
    name: {
        color: 'white',
        fontSize: 16,
    },
    contentContainer: {
        backgroundColor: Colors.lightBrown,
        padding: 5,
    },
    descriptionText: {
        color: 'white',
    }
});
