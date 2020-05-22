import React from 'react';
import { StyleSheet, View } from 'react-native';

import FeatCard from './FeatCard';
import Data from '../../constants/FeatsData';

const FeatsContent = () => {
    return (
        <View>
            <FeatCard name='Ancestry Feats and Abilities' feats={Data.A_FEATS} />
            <FeatCard name='Class Feats and Abilities' feats={Data.C_FEATS} />
            <FeatCard name='General Feats' feats={Data.G_FEATS} />
            <FeatCard name='Skill Feats' feats={Data.S_FEATS} />
        </View>
    );
};

export default FeatsContent;

const styles = StyleSheet.create({});
