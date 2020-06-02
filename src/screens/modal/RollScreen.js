import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { Modal } from '../../components/common';
import SaveRoll from '../../components/roll/SaveRoll';

const RollScreen = ({ navigation }) => (
    <Modal navigation={navigation}>
        <SaveRoll />
    </Modal>
);

export default RollScreen;

const styles = EStyleSheet.create({
});
