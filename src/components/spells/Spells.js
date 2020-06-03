import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import { Accordion, Card } from '../common';
import Colors from '../../constants/Colors';
import SpellInfo from './SpellInfo';

const renderAccordionContent = (item) => {
    return <SpellInfo data={item} />;
};

const renderAccordionHeader = ({ name, casts }) => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>{name}</Text>
            <Text style={styles.headerText}>Casts {casts}</Text>
        </View>
    );
};

const renderItem = ({ item }) => {
    return (
        <Accordion
            title={`Level ${item.level}`}
            data={item.spells}
            renderContent={renderAccordionContent}
            renderHeader={renderAccordionHeader}
        />
    );
}

const Spells = ({ data }) => {
    return (
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
};

export default Spells;

const styles = StyleSheet.create({
    container: {
        paddingBottom: 10,
    },
    accordionContainer: {
        padding: 5,
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
});