import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import { Modal } from '../../components/common';
import SaveRoll from '../../components/roll/SaveRoll';
import RollMenu from '../../components/roll/RollMenu';

const RollScreen = ({ route, navigation }) => {
    return (
        <Modal navigation={navigation}>
            {route.params.menu ?
                <RollMenu navigation={navigation} bonus={0} /> :
                <SaveRoll navigation={navigation} params={route.params} />}
        </Modal>
    );
};

export default RollScreen;

const styles = EStyleSheet.create({
});
