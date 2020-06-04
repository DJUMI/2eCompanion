import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { Accordion, Card } from '../common';
import Colors from '../../constants/Colors';
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

const renderContentHeader = () => (
    <View style={styles.contentHeaderContainer}>
        <Text style={styles.contentHeaderText}>Cantrip Level</Text>
        <View style={styles.pointsContainer}>
            <Text style={styles.pointsText}>2</Text>
        </View>
    </View>
);

const Cantrip = ({ data }) => (
    <View style={styles.container}>
        {data.length ?
            <Card title='Cantrips'>
                <View>
                    {renderContentHeader()}
                    <Accordion
                        data={data}
                        renderContent={renderAccordionContent}
                        renderHeader={renderAccordionHeader}
                    />
                </View>
            </Card> :
            <Card title='Cantrips' empty />
        }
    </View>
);

export default Cantrip;

const styles = EStyleSheet.create({
    container: {
        paddingBottom: '10rem',
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
    contentHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: '5rem',
        backgroundColor: Colors.darkBrown,
    },
    contentHeaderText: {
        color: 'white',
        fontSize: '20rem',
        paddingRight: '15rem',
        alignSelf: 'center'
    },
    pointsContainer: {
        backgroundColor: 'white',
        padding: '5rem',
        marginRight: '20rem',
        justifyContent: 'center',
        borderRadius: '2rem',
    },
    pointsText: {
        fontSize: '18rem'
    },
});