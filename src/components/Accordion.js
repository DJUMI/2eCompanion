import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Colors from '../constants/Colors';

const renderContent = (feat) => {
    return (
        <View style={styles.contentContainer}>
            <View style={styles.topContainer}>
                <View style={styles.row}>
                    <Text style={styles.type}>{feat.type}</Text>
                    <Text style={styles.level}>{feat.level}</Text>
                </View>
                <View style={styles.traitsContainer}>
                    {feat.traits.map(trait => (
                        <View style={styles.trait}>
                            <Text style={styles.traitText}>{trait}</Text>
                        </View>
                    ))}
                </View>
                {feat.trigger ?
                    <Text style={styles.triggerText}>
                        <Text style={styles.triggerTitle}>Trigger </Text>
                        {feat.trigger}
                    </Text> :
                    null
                }
            </View>
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
                        <TouchableOpacity
                            style={styles.nameRow}
                            onPress={() => onPress(i)}
                        >
                            <Text style={styles.name}>{feat.name}</Text>
                            <Text style={styles.name}>{feat.action}</Text>
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
    row: {
        flexDirection: 'row',
    },
    nameRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    name: {
        color: 'white',
        fontSize: 18,
    },
    contentContainer: {
        backgroundColor: Colors.lightBrown,
        padding: 5,
    },
    topContainer: {
        borderBottomWidth: 1,
        borderBottomColor: Colors.darkBrown,
    },
    descriptionText: {
        color: 'white',
        paddingTop: 3,
    },
    type: {
        color: 'white',
        paddingBottom: 3,
        paddingRight: 5,
    },
    level: {
        color: 'white',
        paddingBottom: 3,
    },
    traitsContainer: {
        flexDirection: 'row',
        paddingBottom: 3,
    },
    trait: {
        backgroundColor: Colors.crimson,
        borderWidth: 2,
        borderColor: Colors.gold,
        padding: 3,
        marginRight: 5,
    },
    traitText: {
        color: 'white',
    },
    triggerText: {
        color: 'white',
        paddingBottom: 3,
    },
    triggerTitle: {
        color: 'white',
        fontWeight: 'bold',
    }
});
