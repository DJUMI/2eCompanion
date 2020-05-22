import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SkillCard from './SkillCard';

const SkillsContent = () => {
    const SKILLS = [
        { name: 'Acrobatics', mod: '1', prof: '0', item: '-', temp: '-', total: '1' }, 
        { name: 'Arcana', mod: '1', prof: '0', item: '-', temp: '-', total: '1' }, 
        { name: 'Athletics', mod: '0', prof: 'T5', item: '-', temp: '-', total: '5' }, 
        { name: 'Crafting', mod: '1', prof: '0', item: '-', temp: '-', total: '1' }, 
        { name: 'Deception', mod: '2', prof: 'T5', item: '-', temp: '-', total: '7' }, 
        { name: 'Diplomacy', mod: '2', prof: 'T5', item: '-', temp: '-', total: '7' }, 
        { name: 'Intimidation', mod: '2', prof: '0', item: '-', temp: '-', total: '2' }, 
        { name: 'Medicine', mod: '4', prof: 'E7', item: '-', temp: '-', total: '11' },
        { name: 'Nature', mod: '4', prof: 'T5', item: '-', temp: '-', total: '9' },
        { name: 'Occultism', mod: '1', prof: 'T5', item: '-', temp: '-', total: '6' },
        { name: 'Performance', mod: '2', prof: '0', item: '-', temp: '-', total: '2' },
        { name: 'Religion', mod: '4', prof: '0', item: '-', temp: '-', total: '4' },
        { name: 'Society', mod: '1', prof: '0', item: '-', temp: '-', total: '1' },
        { name: 'Stealth', mod: '1', prof: '0', item: '-', temp: '-', total: '1' },
        { name: 'Survival', mod: '4', prof: '0', item: '-', temp: '-', total: '4' },
        { name: 'Thievery', mod: '1', prof: '0', item: '-', temp: '-', total: '1' },
        { name: 'Lore', mod: '1', prof: 'T5', item: '-', temp: '-', total: '6' },
    ];

    return (
        <View>
            {SKILLS.map(skill => (
                <SkillCard skill={skill} />
            ))}
        </View>
    );
};

export default SkillsContent;

const styles = StyleSheet.create({});
