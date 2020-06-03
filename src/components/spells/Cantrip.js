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

const renderContentHeader = () => {
    return (
        <View style={styles.contentHeaderContainer}>
            <Text style={styles.contentHeaderText}>Cantrip Level</Text>
            <View style={styles.pointsContainer}>
                <Text style={styles.pointsText}>2</Text>
            </View>
        </View>
    );
};

const Cantrip = ({ data }) => {
    return (
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
                <Card title='Cantrips' empty/>
            }
        </View>
    );
};

export default Cantrip;

const styles = StyleSheet.create({
    container: {
        paddingBottom: 10,
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
    contentHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 5,
        backgroundColor: Colors.darkBrown,
    },
    contentHeaderText: {
        color: 'white',
        fontSize: 20,
        paddingRight: 15,
        alignSelf: 'center'
    },
    pointsContainer: {
        backgroundColor: 'white',
        padding: 5,
        marginRight: 20,
        justifyContent: 'center',
        borderRadius: 2,
    },
    pointsText: {
        fontSize: 18
    },
});