import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Data from '../../constants/DetailsData';
import DetailCard from './DetailCard';
import Colors from '../../constants/Colors';

const DetailsContent = () => {
    return (
        <View style={styles.container}>
            <DetailCard title='Name' value={Data.name} />

            <DetailCard title='Ancestry and Heritage' value={Data.ancestry} />

            <View style={styles.row}>
                <DetailCard title='Class' value={Data.class} />
                <DetailCard title='Background' value={Data.background} />
            </View>

            <View style={styles.row}>
                <DetailCard title='Size' value={Data.size} />
                <DetailCard title='Alignment' value={Data.alignment} />
                <DetailCard title='Deity' value={Data.deity} />
            </View>

            <View style={styles.row}>
                <DetailCard title='Ethnicity' value={Data.ethnicity} />
                <DetailCard title='Nationality' value={Data.nationality} />
            </View>

            <View style={styles.row}>
                <DetailCard title='Birthplace' value={Data.birthplace} />
                <DetailCard title='Age' value={Data.age} />
            </View>

            <View style={styles.row}>
                <DetailCard title='Gender' value={Data.gender} />
                <DetailCard title='Height' value={Data.height} />
                <DetailCard title='Weight' value={Data.weight} />
            </View>

            <DetailCard title='Appearance' value={Data.appearance} />

            <View style={styles.header}>
                <Text style={styles.headerText}>Personality</Text>
            </View>

            <DetailCard title='Attitude' value={Data.attitude} />
            <DetailCard title='Beliefs' value={Data.beliefs} />
            <DetailCard title='Likes' value={Data.likes} />
            <DetailCard title='Dislikes' value={Data.dislikes} />
            <DetailCard title='Catchphrases' value={Data.catchphrases} />

            <View style={styles.header}>
                <Text style={styles.headerText}>Campaign Notes</Text>
            </View>

            <View style={styles.notesContainer}>
                <Text style={styles.noteText}>{Data.notes}</Text>
            </View>
        </View>
    );
};

export default DetailsContent;

const styles = StyleSheet.create({
    container: {
        padding: 5,
    },
    row: {
        flexDirection: 'row',
    },
    header: {
        backgroundColor: Colors.darkBrown,
        padding: 5,
        alignItems: 'center',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        marginBottom: 5,
        borderRadius: 5,
    },
    headerText: {
        color: 'white',
        fontSize: 18,
    },
    notesContainer: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: Colors.darkBrown,
        borderRadius: 5,
        padding: 5,
        minHeight: 200,
    }
});
