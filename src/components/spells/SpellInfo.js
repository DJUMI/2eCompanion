import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Padder, Separator } from '../common';
import Colors from '../../constants/Colors';

const SpellInfo = ({
    data: {
        title,
        action,
        traits,
        cast,
        range,
        target,
        save,
        duration,
        description,
        castDescription,
        heightened
    }
}) => {
    return (
        <View style={styles.accordionContainer}>
            <View style={styles.traitsContainer}>
                <FlatList
                    horizontal
                    data={traits}
                    keyExtractor={(item, index) => index.toString()}
                    listKey={Math.random()}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.trait}>
                                <Text style={styles.traitText}>{item}</Text>
                            </View>
                        );
                    }}
                />
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

            <FlatList
                data={castDescription}
                keyExtractor={(item, index) => index.toString()}
                listKey={Math.random()}
                renderItem={({ item }) => {
                    return (
                        <Text style={styles.descriptionText}>
                            <Text style={styles.titleText}>{item.title}</Text>
                            {item.info}
                        </Text>
                    );
                }}
            />

            {heightened.length ?
                <View>
                    <Padder />
                    <Separator />
                    <FlatList
                        data={heightened}
                        keyExtractor={(item, index) => index.toString()}
                        listKey={Math.random()}
                        renderItem={({ item }) => {
                            return (
                                <Text style={styles.descriptionText}>
                                    <Text style={styles.titleText}>{item.title}</Text>
                                    {item.info}
                                </Text>
                            );
                        }}
                    />
                </View> :
                null
            }

            <TouchableOpacity
                style={styles.castBtn}
                onPress={() => console.log(`Cast ${title}`)}
            >
                <Text style={styles.castBtnText}>CAST</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SpellInfo;

const styles = StyleSheet.create({
    accordionContainer: {
        padding: 5,
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
    },
});
