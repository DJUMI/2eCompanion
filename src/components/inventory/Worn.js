import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import { Accordion, Card, Padder } from '../common';
import Colors from '../../constants/Colors';

const renderAccordionContent = ({ title, description }) => {
    return (
        <View style={styles.accordionContentContainer}>
            <Text style={styles.descriptionText}>{description}</Text>
            <View style={styles.btnContainer}>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => console.log(`Sell 1 ${title}`)}
                >
                    <Text style={styles.btnText}>Sell 1</Text>
                </TouchableOpacity>
                <Padder />
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => console.log(`Discard 1 ${title}`)}
                >
                    <Text style={styles.btnText}>Discard 1</Text>
                </TouchableOpacity>
                <Padder />
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => console.log(`Add 1 ${title}`)}
                >
                    <Text style={styles.btnText}>Add 1</Text>
                </TouchableOpacity>
                <Padder />
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => console.log(`Buy 1 ${title}`)}
                >
                    <Text style={styles.btnText}>Buy 1</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const renderAccordionHeader = ({ title, bulk }) => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>{title}</Text>
            <Text style={styles.headerText}>{bulk}</Text>
        </View>
    );
};

const Worn = ({ data }) => {
    return (
        <View style={styles.container}>
            <Card title='Worn Items'>
                <View style={styles.contentContainer}>
                    <Accordion
                        data={data}
                        renderContent={renderAccordionContent}
                        renderHeader={renderAccordionHeader}
                    />
                    <View style={styles.addBtnContainer}>
                        <TouchableOpacity style={styles.addBtn}>
                            <FontAwesome5
                                name='plus'
                                color='white'
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </Card>
        </View>
    );
};

export default Worn;

const styles = StyleSheet.create({
    container: {
        paddingBottom: 10,
    },
    contentContainer: {
        backgroundColor: Colors.mediumBrown,
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
    accordionContentContainer: {
        padding: 5,
        backgroundColor: Colors.lightBrown,
    },
    descriptionText: {
        color: 'white',
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 5,
    },
    btn: {
        flex: 1,
        backgroundColor: Colors.blue,
        borderColor: 'white',
        borderWidth: 1,
        padding: 5,
        alignItems: 'center',
    },
    btnText: {
        color: 'white',
        fontSize: 16,
    },
    addBtnContainer: {
        alignItems: 'flex-end',
        padding: 5,
        paddingRight: 20,
        backgroundColor: Colors.darkBrown,
    },
    addBtn: {
        backgroundColor: Colors.blue,
        borderColor: 'white',
        borderWidth: 1,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
});