import React from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { Card, ModRow } from '../common';
import ActionsList from './ActionsList';

const SkillCard = ({ skill: { title, mod, prof, item, temp, total } }) => (
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
                        stat={{ title: `${title} Check`, mod: total }}
                    />
                </View>
                <ActionsList />
            </View>
        </Card>
    </View>
);

export default SkillCard;

const styles = EStyleSheet.create({
    container: {
        marginTop: '10rem',
        paddingHorizontal: '10rem',
    },
    contentContainer: {
        padding: '5rem',
    },
});
