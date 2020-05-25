import React from 'react';
import { StyleSheet, View } from 'react-native';

import Card from '../Card';
import ActionsList from './ActionsList';
import ModRow from '../ModRow';

const renderContent = ({ mod, prof, item, temp, name, total }) => {
    return (
        <View>
            <View style={styles.contentContainer}>
                <ModRow
                    mods={[
                        { title: 'MOD', value: mod },
                        { title: 'PROF', value: prof },
                        { title: 'ITEM', value: item },
                        { title: 'TEMP', value: temp }
                    ]}
                    stat={{ title: name, value: total }}
                />
            </View>
            <ActionsList />
        </View>
    );
};

const SkillCard = ({ skill }) => {
    return (
        <View style={styles.container}>
            <Card data={skill} title={skill.name} renderContent={renderContent} />
        </View>
    );
};

export default SkillCard;

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        paddingHorizontal: 10,
    },
    contentContainer: {
        padding: 5,
    },
});
