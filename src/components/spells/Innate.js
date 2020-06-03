import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Accordion, Card } from '../common';
import Colors from '../../constants/Colors';
import SpellInfo from './SpellInfo';

const renderAccordionContent = (item) => {
    return <SpellInfo data={item} />;
};

const renderAccordionHeader = ({ title, level }) => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>{title}</Text>
            <Text style={styles.headerText}>Level {level}</Text>
        </View>
    );
};

const Innate = ({ data }) => {
    return (
        <View style={styles.container}>
            {data.length ?
                <Card title='Innate Spells'>
                    <Accordion
                        data={data}
                        renderContent={renderAccordionContent}
                        renderHeader={renderAccordionHeader}
                    />
                </Card> :
                <Card title='Innate Spells' empty/>
            }
        </View>
    );
};

export default Innate;

const styles = StyleSheet.create({
    container: {
        paddingBottom: 10,
    },
    accordionContainer: {
        padding: 5,
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