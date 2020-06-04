import React from 'react';
import { Text, View, FlatList } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';


import { Accordion, Card } from '../common';
import SpellInfo from './SpellInfo';

const renderAccordionContent = (item) => (
    <SpellInfo data={item} />
);

const renderAccordionHeader = ({ name, casts }) => (
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>{name}</Text>
            <Text style={styles.headerText}>Casts {casts}</Text>
        </View>
    );

const renderItem = ({ item }) => (
        <Accordion
            title={`Level ${item.level}`}
            data={item.spells}
            renderContent={renderAccordionContent}
            renderHeader={renderAccordionHeader}
        />
    );

const Spells = ({ data }) => (
        <View style={styles.container}>
            {data.length ?
                <Card title='Spells'>
                    <View>
                        <FlatList
                            data={data}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={item => renderItem(item)}
                        />
                    </View>
                </Card> :
                <Card title='Spells' empty/>
            }
        </View>
    );

export default Spells;

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