import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { Accordion, Card, RoundBtn } from '../../common';
import Colors from '../../../constants/Colors';
import FocusSpell from './FocusSpell';
import { Context } from '../../../context/SpellsContext';

const renderAccordionHeader = ({ title, level }) => (
    <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{title}</Text>
        <Text style={styles.headerText}>Level {level}</Text>
    </View>
);

const Focus = ({ data }) => {
    const { state, refocus } = useContext(Context);

    const renderAccordionContent = (item) => (
        <FocusSpell data={item} />
    );

    const renderContentHeader = ({ current, max }) => (
        <View style={styles.contentHeaderContainer}>
            <View style={styles.headerTitleContainer}>
                <Text style={styles.contentHeaderText}>Focus Points</Text>
            </View>
            <View style={styles.pointsContainer}>
                <Text style={styles.pointsText}>{current}/{max}</Text>
            </View>
            <View style={styles.headerBtnContainer}>
                <RoundBtn title='REFOCUS' onPress={() => refocus(current, max)} />
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            {data.spells.length ?
                <Card title='Focus Spells'>
                    <View>
                        {renderContentHeader(state.focus.points)}
                        <Accordion
                            data={data.spells}
                            renderContent={renderAccordionContent}
                            renderHeader={renderAccordionHeader}
                        />
                    </View>
                </Card> :
                <Card title='Focus Spells' empty />
            }
        </View>
    );
};

export default Focus;

const styles = EStyleSheet.create({
    container: {
        paddingBottom: '10rem',
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
    contentHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: '5rem',
        backgroundColor: Colors.darkBrown,
    },
    headerTitleContainer: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    contentHeaderText: {
        color: 'white',
        fontSize: '20rem',
    },
    headerBtnContainer: {
        flex: 1,
        alignItems: 'flex-start',
    },
    contentBtn: {
        backgroundColor: Colors.blue,
        borderWidth: '1rem',
        borderColor: 'white',
        borderRadius: '5rem',
        padding: '10rem',
    },
    btnText: {
        color: 'white',
        fontWeight: 'bold',
    },
    pointsContainer: {
        backgroundColor: 'white',
        padding: '5rem',
        justifyContent: 'center',
        borderRadius: '2rem',
        marginHorizontal: '15rem',
    },
    pointsText: {
        fontSize: '18rem'
    },
});