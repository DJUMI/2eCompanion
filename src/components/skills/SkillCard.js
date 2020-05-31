import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Card, ModRow } from '../common';
import ActionsList from './ActionsList';

const SkillCard = ({ skill: { title, mod, prof, item, temp, total } }) => {
    return (
        <View style={styles.container}>
            <Card title={title}>
                <View>
                    <View style={styles.contentContainer}>
                        <ModRow
                            mods={[
                                { title: mod.title, value: mod.value },
                                { title: 'PROF', value: `${prof.title}${prof.value}` },
                                { title: 'ITEM', value: item },
                                { title: 'TEMP', value: temp }
                            ]}
                            stat={{ title: title, value: total }}
                        />
                    </View>
                    <ActionsList />
                </View>
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
