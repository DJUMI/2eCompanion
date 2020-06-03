import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import { Accordion, Card } from '../common';
import Colors from '../../constants/Colors';

const renderAccordionContent = ({ type, level, traits, trigger, description }) => {
    return (
        <View style={styles.contentContainer}>
            <View style={styles.topContainer}>
                <View style={styles.row}>
                    <Text style={styles.type}>{type}</Text>
                    <Text style={styles.level}>{level}</Text>
                </View>
                <View style={styles.traitsContainer}>
                    <FlatList
                        horizontal
                        data={traits}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.trait}>
                                    <Text style={styles.traitText}>{item}</Text>
                                </View>
                            );
                        }}
                    />
                </View>
                {trigger ?
                    <Text style={styles.triggerText}>
                        <Text style={styles.triggerTitle}>Trigger </Text>
                        {trigger}
                    </Text> :
                    null
                }
            </View>
            <Text style={styles.descriptionText}>{description}</Text>
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

const FeatCard = ({ name, feats }) => {
    return (
        <View style={styles.container}>
            {feats.length ?
                <Card title={name}>
                    <Accordion
                        data={feats}
                        renderContent={renderAccordionContent}
                        renderHeader={renderAccordionHeader}
                    />
                </Card> :
                <Card title={name} empty />
            }
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
    }, level: {
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
