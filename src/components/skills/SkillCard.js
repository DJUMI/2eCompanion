import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Card, ModRow } from '../common';
import ActionsList from './ActionsList';

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
            <Card title={skill.name}>
                {renderContent(skill)}
            </Card>
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
