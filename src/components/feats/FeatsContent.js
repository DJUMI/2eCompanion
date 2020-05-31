import React, { useContext } from 'react';
import { View } from 'react-native';

import FeatCard from './FeatCard';
import { Context } from '../../context/CharacterContext';

const FeatsContent = () => {
    const { state } = useContext(Context);
    const { ancestry, general, skill } = state.characters[state.current].feats;

    return (
        <View>
            <FeatCard name='Ancestry Feats and Abilities' feats={ancestry} />
            <FeatCard name='Class Feats and Abilities' feats={state.characters[state.current].feats.class} />
            <FeatCard name='General Feats' feats={general} />
            <FeatCard name='Skill Feats' feats={skill} />
        </View>
    );
};

export default FeatsContent;
