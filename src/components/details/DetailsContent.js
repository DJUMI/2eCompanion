import React, { useContext } from 'react';
import { Image, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Colors from '../../constants/Colors';
import DetailCard from './DetailCard';
import LevelBtn from './LevelBtn';
import { Context } from '../../context/CharacterContext';


const DetailsContent = () => {
    const { state } = useContext(Context);
    const data = state.characters[state.current].details;
        
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.imageContainer}>
                    <Image
                        source={require('../../../assets/images/Besh.png')}
                        style={styles.image}
                    /> 
                </View>
                <View style={styles.levelContainer}>
                    <LevelBtn level={data.level}/>
                </View>
            </View>
            <DetailCard title='Name' value={data.name} />

            <DetailCard title='Ancestry and Heritage' value={data.ancestry} />

            <View style={styles.row}>
                <DetailCard title='Class' value={data.class} />
                <DetailCard title='Background' value={data.background} />
            </View>

            <View style={styles.row}>
                <DetailCard title='Size' value={data.size} />
                <DetailCard title='Alignment' value={data.alignment} />
                <DetailCard title='Deity' value={data.deity} />
            </View>

            <View style={styles.row}>
                <DetailCard title='Ethnicity' value={data.ethnicity} />
                <DetailCard title='Nationality' value={data.nationality} />
            </View>

            <View style={styles.row}>
                <DetailCard title='Birthplace' value={data.birthplace} />
                <DetailCard title='Age' value={data.age} />
            </View>

            <View style={styles.row}>
                <DetailCard title='Gender' value={data.gender} />
                <DetailCard title='Height' value={data.height} />
                <DetailCard title='Weight' value={data.weight} />
            </View>

            <DetailCard title='Appearance' value={data.appearance} />

            <View style={styles.header}>
                <Text style={styles.headerText}>Personality</Text>
            </View>

            <DetailCard title='Attitude' value={data.attitude} />
            <DetailCard title='Beliefs' value={data.beliefs} />
            <DetailCard title='Likes' value={data.likes} />
            <DetailCard title='Dislikes' value={data.dislikes} />
            <DetailCard title='Catchphrases' value={data.catchphrases} />

            <View style={styles.header}>
                <Text style={styles.headerText}>Campaign Notes</Text>
            </View>

            <View style={styles.notesContainer}>
                <Text style={styles.noteText}>{data.notes}</Text>
            </View>
        </View>
    );
};

export default DetailsContent;

const styles = EStyleSheet.create({
    container: {
        padding: 5,
    },
    row: {
        flexDirection: 'row',
    },
    imageContainer: {
        borderWidth: 1,
        borderColor: Colors.darkBrown,
        marginBottom: 5,
        marginRight: 5,
    },
    image: {
        height: '350rem',
        width: '250rem'
    },
    levelContainer: {
        flex: 1,
        justifyContent: 'center',
        padding: 10,
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
