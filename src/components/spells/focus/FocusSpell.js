import React, { useContext } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { Padder, RoundBtn, Separator } from '../../common';
import Colors from '../../../constants/Colors';
import { Context as SpellsContext } from '../../../context/SpellsContext';

const FocusSpell = ({
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
    const {
        state: {
            focus: {
                points: { current, max }
            }
        }, castFocus, refocus } = useContext(SpellsContext);

    return (
        <View style={styles.accordionContainer}>
            <View style={styles.traitsContainer}>
                <FlatList
                    horizontal
                    data={traits}
                    keyExtractor={(item, index) => index.toString()}
                    listKey={Math.random()}
                    renderItem={({ item }) => (
                        <View style={styles.trait}>
                            <Text style={styles.traitText}>{item}</Text>
                        </View>
                    )}
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
                renderItem={({ item }) => (
                    <Text style={styles.descriptionText}>
                        <Text style={styles.titleText}>{item.title}</Text>
                        {item.info}
                    </Text>
                )}
            />

            {heightened.length ?
                <View>
                    <Padder />
                    <Separator />
                    <FlatList
                        data={heightened}
                        keyExtractor={(item, index) => index.toString()}
                        listKey={Math.random()}
                        renderItem={({ item }) => (
                            <Text style={styles.descriptionText}>
                                <Text style={styles.titleText}>{item.title}</Text>
                                {item.info}
                            </Text>
                        )}
                    />
                </View> :
                null
            }
            <View style={styles.btnContainer}>
                {current ?
                    <RoundBtn title='CAST' onPress={() => castFocus()} /> :
                    <RoundBtn title='REFOCUS' onPress={() => refocus(current, max)} />
                }
            </View>
        </View>
    );
}

export default FocusSpell;

const styles = EStyleSheet.create({
    accordionContainer: {
        padding: '5rem',
    },
    traitsContainer: {
        flexDirection: 'row',
        paddingBottom: '3rem',
    },
    trait: {
        backgroundColor: Colors.crimson,
        borderWidth: '2rem',
        borderColor: Colors.gold,
        padding: '3rem',
        marginRight: '5rem',
    },
    traitText: {
        color: 'white',
    },
    row: {
        flexDirection: 'row',
    },
    contentText: {
        color: 'white',
        paddingRight: '5rem',
    },
    titleText: {
        color: 'white',
        fontWeight: 'bold',
    },
    descriptionText: {
        color: 'white',
        paddingTop: '3rem',
    },
    btnContainer: {
        paddingTop: '10rem',
        paddingBottom: '5rem',
        paddingHorizontal: '125rem',
    },
    castBtn: {
        backgroundColor: Colors.blue,
        alignSelf: 'center',
        padding: '5rem',
        borderWidth: '1rem',
        borderColor: 'white',
        borderRadius: '5rem',
        marginBottom: '5rem',
        marginTop: '10rem',
    },
    castBtnText: {
        color: 'white',
        fontSize: '20rem',
    },
});
