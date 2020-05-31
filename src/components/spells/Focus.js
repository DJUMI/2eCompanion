import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

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

const renderContentHeader = ({ current, max }) => {
    return (
        <View style={styles.contentHeaderContainer}>
            <View style={styles.headerTitleContainer}>
                <Text style={styles.contentHeaderText}>Focus Points</Text>
            </View>
            <View style={styles.pointsContainer}>
                <Text style={styles.pointsText}>{current}/{max}</Text>
            </View>
            <View style={styles.headerBtnContainer}>
                <TouchableOpacity style={styles.contentBtn}>
                    <Text style={styles.btnText}>REFOCUS</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const Focus = ({ data }) => {
    return (
        <View style={styles.container}>
            <Card title='Focus Spells'>
                <View>
                    {renderContentHeader(data.points)}
                    {data.spells.length ?
                        <Accordion
                            data={data.spells}
                            renderContent={renderAccordionContent}
                            renderHeader={renderAccordionHeader}
                        /> :
                        null
                    }
                </View>
            </Card>
        </View>
    );
};

export default Focus;

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
    headerTitleContainer: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    contentHeaderText: {
        color: 'white',
        fontSize: 20,
    },
    headerBtnContainer: {
        flex: 1,
        alignItems: 'flex-start',
    },
    contentBtn: {
        backgroundColor: Colors.blue,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 5,
        padding: 10,
    },
    btnText: {
        color: 'white',
        fontWeight: 'bold',
    },
    pointsContainer: {
        backgroundColor: 'white',
        padding: 5,
        justifyContent: 'center',
        borderRadius: 2,
        marginHorizontal: 15,
    },
    pointsText: {
        fontSize: 18
    },
});