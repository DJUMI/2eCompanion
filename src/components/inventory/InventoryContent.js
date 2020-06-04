import React, { useContext } from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Bulk from './Bulk';
import Money from './Money';
import Other from './Other';
import Readied from './Readied';
import Worn from './Worn';
import { Context } from '../../context/CharacterContext';

const InventoryContent = () => {
    const { state } = useContext(Context);
    const { bulk, money, readied, worn, other } = state.characters[state.current].inventory;

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Bulk data={bulk}/>
                <Money data={money}/>
            </View>
            <Readied data={readied}/>
            <Worn data={worn}/>
            <Other data={other}/>
        </View>
    );
};

export default InventoryContent;

const styles = EStyleSheet.create({
    container: {
        padding: '5rem',
    },
    row: {
        flexDirection: 'row',
        paddingBottom: '10rem',
    }
});
