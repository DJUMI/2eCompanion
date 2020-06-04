import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { Accordion, Card } from '../../common';

const renderAccordionContent = ({ description }) => (
    <View style={styles.contentContainer}>
        <Text style={styles.contentText}>{description}</Text>
    </View>
);

const renderAccordionHeader = ({ title, level }) => (
    <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{title}</Text>
        <Text style={styles.headerText}>{level}</Text>
    </View>
);

const Conditions = ({ conditions }) => (
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

export default Conditions;

const styles = EStyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '5rem',
    },
    headerText: {
        color: 'white',
        fontSize: '16rem',
    },
    contentContainer: {
        padding: '5rem'
    },
    contentText: {
        color: 'white',
    },
});
