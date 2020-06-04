import React from 'react';
import { Text, View, FlatList } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { Accordion, Card } from '../common';
import Colors from '../../constants/Colors';

const renderAccordionContent = ({ type, level, traits, trigger, description }) => (
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

const renderAccordionHeader = ({ name, action }) => (
    <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{name}</Text>
        <Text style={styles.headerText}>{action}</Text>
    </View>
);

const FeatCard = ({ name, feats }) => (
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

export default FeatCard;

const styles = EStyleSheet.create({
    container: {
        marginTop: '10rem',
        paddingHorizontal: '10rem',
    },
    contentContainer: {
        padding: '5rem',
    },
    topContainer: {
        borderBottomWidth: '1rem',
        borderBottomColor: Colors.darkBrown,
    },
    row: {
        flexDirection: 'row',
    },
    type: {
        color: 'white',
        paddingBottom: '3rem',
        paddingRight: '5rem',
    }, level: {
        color: 'white',
        paddingBottom: '3rem',
    },
    traitsContainer: {
        flexDirection: 'row',
        paddingBottom: '3rem',
    },
    trait: {
        backgroundColor: Colors.crimson,
        borderWidth: '2rem',
        borderColor: Colors.gold,
        padding: '3rem',
        marginRight: '5rem',
    },
    traitText: {
        color: 'white',
    },
    triggerText: {
        color: 'white',
        paddingBottom: '3rem',
    },
    triggerTitle: {
        color: 'white',
        fontWeight: 'bold',
    },
    descriptionText: {
        color: 'white',
        paddingTop: '3rem',
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '5rem',
    },
    headerText: {
        color: 'white',
        fontSize: '18rem',
    },
});
