import React, { useContext } from 'react';
import { FlatList } from 'react-native';

import SkillCard from './SkillCard';
import { Context } from '../../context/CharacterContext';

const SkillsContent = () => {
    const { state } = useContext(Context);
    const { skills } = state.characters[state.current];

    return (
        <>
            <FlatList
                data={skills}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => {
                    return <SkillCard skill={item}/>
                }}
            />
        </>
    );
};

export default SkillsContent;
