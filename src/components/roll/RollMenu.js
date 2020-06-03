import React, { useContext, useEffect, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Feather, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { Context } from '../../context/RollContext';

import Colors from '../../constants/Colors';
import CustomRoll from './CustomRoll';
import SavedRolls from './SavedRolls';
import RecentRolls from './RecentRolls';

const RollMenu = ({ navigation, bonus, params }) => {
    const { state, roll, clearCustomRoll } = useContext(Context);
    const [selected, setSelected] = useState(0);

    useEffect(() => {
       clearCustomRoll();
    }, []);

    const renderContent = () => {
        if (!selected) {
            return <CustomRoll />
        } else if (selected == 1) {
            return <SavedRolls />
        }
        return <RecentRolls />
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity 
                    style={!selected ? styles.selectedTabContainer : styles.tabContainer}
                    onPress={() => setSelected(0)}
                >
                    <FontAwesome5 name="dice-d20" size={24} color={Colors.lightBlue} />
                </TouchableOpacity>
                <TouchableOpacity 
                    style={selected == 1 ? styles.selectedTabContainer : styles.tabContainer}
                    onPress={() => setSelected(1)}
                >
                    <FontAwesome name="star" size={24} color={Colors.lightBlue} />
                </TouchableOpacity>
                <TouchableOpacity 
                    style={selected == 2 ? styles.selectedTabContainer : styles.tabContainer}
                    onPress={() => setSelected(2)}
                >
                    <FontAwesome5 name="history" size={24} color={Colors.lightBlue} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { navigation.pop() }} style={styles.closeBtn}>
                    <Feather name="x" size={28} color={Colors.lightBlue} />
                </TouchableOpacity>
            </View>
            {renderContent()}
        </View>
    );
};

export default RollMenu;

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 15,
    },
    header: {
        flexDirection: 'row'
    },
    tabContainer:{
        paddingHorizontal: 10,
        paddingTop: 10,
        paddingBottom: 5,
        borderBottomWidth: 1,
        borderColor: Colors.lightBlue,
    },
    selectedTabContainer:{
        paddingHorizontal: 10,
        paddingTop: 10,
        paddingBottom: 5,
    },
    closeBtn: {
        flex: 1,
        alignItems: 'flex-end',
        paddingHorizontal: 10,
        paddingTop: 10,
        paddingBottom: 5,
        borderBottomWidth: 1,
        borderColor: Colors.lightBlue,
    },
    titleContainer: {
        alignItems: 'center',
        padding: 10,
    },
    titleText: {
        color: Colors.lightBlue,
        fontSize: 24,
    },
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 3,
    },
    shadow: {
        borderBottomWidth: 1,
        borderColor: Colors.lightBlue,
        padding: 20,
        elevation: 5,
        shadowColor: Colors.lightBlue,
        shadowOffset: {
            width: -5,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    infoContainer: {
        flex: 2,
        flexDirection: 'row',
    },
    itemContainer: {
        flex: 1,
        alignItems: 'center',
    },
    text: {

    },
    operatorContainer: {
        justifyContent: 'flex-end',
        paddingBottom: 58
    },
    operator: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.lightBlue
    },
    valueContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 50
    },
    value: {
        fontSize: 30,
        fontWeight: 'bold',
        color: Colors.lightBlue
    },
});
