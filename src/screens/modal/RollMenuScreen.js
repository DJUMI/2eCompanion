import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import { Modal } from '../../components/common';
import SaveRoll from '../../components/roll/SaveRoll';

const RollMenuScreen = ({ route, navigation }) => {
    return (
        <Modal navigation={navigation}>
            <SaveRoll navigation={navigation} bonus={0} params={route.params}/>
        </Modal>
    );
};

export default RollMenuScreen;

const styles = EStyleSheet.create({
});
