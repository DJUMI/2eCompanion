import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { Accordion, Card } from '../common';
import SpellInfo from './SpellInfo';

const renderAccordionContent = (item) => (
    <SpellInfo data={item} />
);

const renderAccordionHeader = ({ title, level }) => (
    <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{title}</Text>
        <Text style={styles.headerText}>Level {level}</Text>
    </View>
);

const Innate = ({ data }) => (
    <View style={styles.container}>
        {data.length ?
            <Card title='Innate Spells'>
                <Accordion
                    data={data}
                    renderContent={renderAccordionContent}
                    renderHeader={renderAccordionHeader}
                />
            </Card> :
            <Card title='Innate Spells' empty />
        }
    </View>
);

export default Innate;

const styles = EStyleSheet.create({
    container: {
        paddingBottom: '10rem',
    },
    accordionContainer: {
        padding: '5rem',
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