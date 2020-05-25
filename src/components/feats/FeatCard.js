import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Accordion from '../Accordion';
import Card from '../Card';
import Colors from '../../constants/Colors';

const renderAccordionContent = (feat) => {
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

const renderAccordionHeader = ({ name, action }) => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>{name}</Text>
            <Text style={styles.headerText}>{action}</Text>
        </View>
    );
};

const renderContent = (data) => {
    return (
        <View>
            <Accordion data={data} renderContent={renderAccordionContent} renderHeader={renderAccordionHeader} />
        </View>
    );
}
const FeatCard = ({ name, feats }) => {
    return (
        <View style={styles.container}>
            <Card data={feats} title={name} renderContent={renderContent}/>
        </View>
    );
};

export default FeatCard;

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        paddingHorizontal: 10,
    },
    contentContainer: {
        padding: 5,
    },
    topContainer: {
        borderBottomWidth: 1,
        borderBottomColor: Colors.darkBrown,
    },
    row: {
        flexDirection: 'row',
    },
    type: {
        color: 'white',
        paddingBottom: 3,
        paddingRight: 5,
    },level: {
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
    },
    descriptionText: {
        color: 'white',
        paddingTop: 3,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
    },
    headerText: {
        color: 'white',
        fontSize: 18,
    },
});
