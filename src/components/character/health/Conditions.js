import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Accordion, Card } from '../../common';

const renderAccordionContent = ({ description }) => {
    return (
        <View style={styles.contentContainer}>
            <Text style={styles.contentText}>{description}</Text>
        </View>

    );
};

const renderAccordionHeader = ({ title, level }) => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>{title}</Text>
            <Text style={styles.headerText}>{level}</Text>
        </View>
    );
};

const Conditions = ({ conditions }) => {
    return (
        conditions.length ?
            <Card title='Conditions'>

                <Accordion
                    data={conditions}
                    renderContent={renderAccordionContent}
                    renderHeader={renderAccordionHeader}
                />
            </Card > :
            <Card title='Conditions' empty />

    );
};

export default Conditions;

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
    },
    headerText: {
        color: 'white',
        fontSize: 16,
    },
    contentContainer: {
        padding: 5
    },
    contentText: {
        color: 'white',
    },
});
