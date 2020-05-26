import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Accordion from '../Accordion';
import Card from '../Card';
import Colors from '../../constants/Colors';
import Data from '../../constants/SpellsData';
import Padder from '../Padder';
import Separator from '../Separator';

const renderAccordionContent = (
    {
        name,
        traits,
        cast,
        range,
        target,
        save,
        duration,
        description,
        castDescription,
        heightened
    }) => {
    return (
        <View style={styles.accordionContainer}>
            <View style={styles.traitsContainer}>
                {traits.map(trait => (
                    <View style={styles.trait}>
                        <Text style={styles.traitText}>{trait}</Text>
                    </View>
                ))}
            </View>

            {cast.length ?
                <Text style={styles.contentText}>
                    <Text style={styles.titleText}>Cast </Text>
                    {cast.join(', ')}
                </Text> :
                null
            }

            <Text style={styles.contentText}>
                <Text style={styles.titleText}>{range.title} </Text>
                {range.info}
            </Text>

            {target ?
                <Text style={styles.contentText}>
                    <Text style={styles.titleText}>{target.title} </Text>
                    {target.info}
                </Text> :
                null
            }

            {save ?
                <Text style={styles.contentText}>
                    <Text style={styles.titleText}>{save.title} </Text>
                    {save.info}
                </Text> :
                null
            }

            {duration ?
                <Text style={styles.contentText}>
                    <Text style={styles.titleText}>{duration.title} </Text>
                    {duration.info}
                </Text> :
                null
            }

            <Padder />
            <Separator />

            <Text style={styles.descriptionText}>
                {description}
            </Text>

            {castDescription.map((item) => (
                <Text style={styles.descriptionText}>
                    <Text style={styles.titleText}>{item.title}</Text>
                    {item.info}
                </Text>
            ))}

            {heightened.length ?
                <View>
                    <Padder />
                    <Separator />
                    {heightened.map((item) => (
                        <Text style={styles.descriptionText}>
                            <Text style={styles.titleText}>{item.title}</Text>
                            {item.info}
                        </Text>
                    ))}
                </View> :
                null
            }

            <TouchableOpacity
                style={styles.castBtn}
                onPress={() => console.log(`Cast ${name}`)}
            >
                <Text style={styles.castBtnText}>CAST</Text>
            </TouchableOpacity>
        </View>
    );
};

const renderAccordionHeader = ({ name, level }) => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>{name}</Text>
            <Text style={styles.headerText}>Level {level}</Text>
        </View>
    );
};

const renderContent = () => {
    return (
        <Accordion
            data={Data.INNATE}
            renderContent={renderAccordionContent}
            renderHeader={renderAccordionHeader}
        />
    );
}
const Innate = () => {
    return (
        <View style={styles.container}>
            <Card title='Innate Spells'>
                {renderContent()}
            </Card>
        </View>
    );
};

export default Innate;

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
    traitsContainer: {
        flexDirection: 'row',
        paddingBottom: 3,
    },
    trait: {
        backgroundColor: Colors.crimson,
        borderWidth: 2,
        borderColor: Colors.gold,
        padding: 3,
        marginRight: 5,
    },
    traitText: {
        color: 'white',
    },
    row: {
        flexDirection: 'row',
    },
    contentText: {
        color: 'white',
        paddingRight: 5,
    },
    titleText: {
        color: 'white',
        fontWeight: 'bold',
    },
    padder: {
        padding: 3,
    },
    descriptionText: {
        color: 'white',
        paddingTop: 3,
    },
    castBtn: {
        backgroundColor: Colors.blue,
        alignSelf: 'center',
        padding: 5,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 5,
        marginBottom: 5,
        marginTop: 10,
    },
    castBtnText: {
        color: 'white',
        fontSize: 20,
    }
});