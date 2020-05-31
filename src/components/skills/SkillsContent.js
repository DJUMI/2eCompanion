import React, { useContext } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import SkillCard from './SkillCard';
import { Context } from '../../context/CharacterContext';

const SkillsContent = () => {
    const { state } = useContext(Context);
    const { skills } = state.characters[state.current];

    const SKILLS = [
        { title: 'Acrobatics', mod: '1', prof: '0', item: '-', temp: '-', total: '1' }, 
        { title: 'Arcana', mod: '1', prof: '0', item: '-', temp: '-', total: '1' }, 
        { title: 'Athletics', mod: '0', prof: 'T5', item: '-', temp: '-', total: '5' }, 
        { title: 'Crafting', mod: '1', prof: '0', item: '-', temp: '-', total: '1' }, 
        { title: 'Deception', mod: '2', prof: 'T5', item: '-', temp: '-', total: '7' }, 
        { title: 'Diplomacy', mod: '2', prof: 'T5', item: '-', temp: '-', total: '7' }, 
        { title: 'Intimidation', mod: '2', prof: '0', item: '-', temp: '-', total: '2' }, 
        { title: 'Medicine', mod: '4', prof: 'E7', item: '-', temp: '-', total: '11' },
        { title: 'Nature', mod: '4', prof: 'T5', item: '-', temp: '-', total: '9' },
        { title: 'Occultism', mod: '1', prof: 'T5', item: '-', temp: '-', total: '6' },
        { title: 'Performance', mod: '2', prof: '0', item: '-', temp: '-', total: '2' },
        { title: 'Religion', mod: '4', prof: '0', item: '-', temp: '-', total: '4' },
        { title: 'Society', mod: '1', prof: '0', item: '-', temp: '-', total: '1' },
        { title: 'Stealth', mod: '1', prof: '0', item: '-', temp: '-', total: '1' },
        { title: 'Survival', mod: '4', prof: '0', item: '-', temp: '-', total: '4' },
        { title: 'Thievery', mod: '1', prof: '0', item: '-', temp: '-', total: '1' },
        { title: 'Lore', mod: '1', prof: 'T5', item: '-', temp: '-', total: '6' },
    ];

    return (
        <View>
            <FlatList
                data={skills}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => {
                    return <SkillCard skill={item}/>
                }}
            />

            {/* {SKILLS.map(skill => (
                <SkillCard skill={skill} />
            ))} */}
        </View>
    );
};

export default SkillsContent;

const styles = StyleSheet.create({});
