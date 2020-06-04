import React, { useContext, useEffect, useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Feather, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { Context } from '../../context/RollContext';

import Colors from '../../constants/Colors';
import CustomRoll from './CustomRoll';
import SavedRolls from './SavedRolls';
import RecentRolls from './RecentRolls';

const RollMenu = ({ navigation }) => {
    const { clearCustomRoll } = useContext(Context);
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
        borderRadius: '15rem',
    },
    header: {
        flexDirection: 'row'
    },
    tabContainer:{
        paddingHorizontal: '10rem',
        paddingTop: '10rem',
        paddingBottom: '5rem',
        borderBottomWidth: '1rem',
        borderColor: Colors.lightBlue,
    },
    selectedTabContainer:{
        paddingHorizontal: '10rem',
        paddingTop: '10rem',
        paddingBottom: '5rem',
    },
    closeBtn: {
        flex: 1,
        alignItems: 'flex-end',
        paddingHorizontal: '10rem',
        paddingTop: '10rem',
        paddingBottom: '5rem',
        borderBottomWidth: '1rem',
        borderColor: Colors.lightBlue,
    },
});
