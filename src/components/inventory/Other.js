import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { FontAwesome5 } from '@expo/vector-icons';

import { Accordion, Card, Padder } from '../common';
import Colors from '../../constants/Colors';

const renderAccordionContent = ({ title, description }) => (
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

const renderAccordionHeader = ({ title, bulk, qty }) => (
    <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{title}</Text>
        <Text style={styles.headerText}>{bulk}</Text>
        <Text style={styles.headerText}>{qty}</Text>
    </View>
);

const Other = ({ data }) => (
    <View style={styles.container}>
        <Card title='Other Items'>
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

export default Other;

const styles = EStyleSheet.create({
    container: {
        paddingBottom: '10rem',
    },
    contentContainer: {
        backgroundColor: Colors.mediumBrown,
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
    accordionContentContainer: {
        padding: '5rem',
        backgroundColor: Colors.lightBrown,
    },
    descriptionText: {
        color: 'white',
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: '5rem',
    },
    btn: {
        flex: 1,
        backgroundColor: Colors.blue,
        borderColor: 'white',
        borderWidth: '1rem',
        padding: '5rem',
        alignItems: 'center',
    },
    btnText: {
        color: 'white',
        fontSize: '16rem',
    },
    addBtnContainer: {
        alignItems: 'flex-end',
        padding: '5rem',
        paddingRight: '20rem',
        backgroundColor: Colors.darkBrown,
    },
    addBtn: {
        backgroundColor: Colors.blue,
        borderColor: 'white',
        borderWidth: '1rem',
        padding: '5rem',
        alignItems: 'center',
        justifyContent: 'center',
    },
});