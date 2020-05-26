import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import Accordion from '../Accordion';
import Card from '../Card';
import Colors from '../../constants/Colors';
import Data from '../../constants/InventoryData';
import Padder from '../Padder';
import Separator from '../Separator';

const renderAccordionContent = ({ name, description }) => {
    return (
        <View style={styles.accordionContentContainer}>
            <Text style={styles.descriptionText}>{description}</Text>
            <View style={styles.btnContainer}>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => console.log(`Sell 1 ${name}`)}
                >
                    <Text style={styles.btnText}>Sell 1</Text>
                </TouchableOpacity>
                <Padder />
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => console.log(`Discard 1 ${name}`)}
                >
                    <Text style={styles.btnText}>Discard 1</Text>
                </TouchableOpacity>
                <Padder />
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => console.log(`Add 1 ${name}`)}
                >
                    <Text style={styles.btnText}>Add 1</Text>
                </TouchableOpacity>
                <Padder />
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => console.log(`Buy 1 ${name}`)}
                >
                    <Text style={styles.btnText}>Buy 1</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const renderAccordionHeader = ({ name, bulk, quantity }) => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>{name}</Text>
            <Text style={styles.headerText}>{bulk}</Text>
            <Text style={styles.headerText}>{quantity}</Text>
        </View>
    );
};

const renderContent = () => {
    return (
        <View style={styles.contentContainer}>
            <Accordion
                data={Data.OTHER}
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
    );
};

const Other = () => {
    return (
        <View style={styles.container}>
            <Card title='Other Items'>
                {renderContent()}
            </Card>
        </View>
    );
};

export default Other;

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