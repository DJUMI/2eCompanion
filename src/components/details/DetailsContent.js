import React, { useContext, useState } from 'react';
import { KeyboardAvoidingView, Image, Platform, Text, TextInput, View, FlatList, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Colors from '../../constants/Colors';
import DetailCard from './DetailCard';
import LevelBtn from './LevelBtn';
import { Context } from '../../context/CharacterContext';
import { MaterialIcons } from '@expo/vector-icons';

const renderNote = ({ item }) => (
    <View style={styles.noteContainer}>
        <Text style={styles.noteText}>{item}</Text>
    </View>
);



const DetailsContent = () => {
    const { state, editCharacter } = useContext(Context);
    const [addingNote, setAddingNote] = useState(false);
    const [note, setNote] = useState('');
    const data = state.characters[state.current].details;

    const renderAddNote = () => (
        <View style={styles.noteFooter}>
            {addingNote ?
                <View>
                    <TextInput
                        style={styles.input}
                        value={note}
                        onChangeText={(text) => setNote(text)}
                    />
                    <View style={styles.editContainer}>
                        <TouchableOpacity
                            style={styles.editBtnContainer}
                            onPress={() => {
                                setNote('');
                                setAddingNote(false);
                            }}
                        >
                            <MaterialIcons
                                name='close'
                                size={40}
                                color='red'
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.editBtnContainer}
                            onPress={() => {
                                editCharacter(note, data, data.notes);
                                setAddingNote(false);
                            }}
                        >
                            <MaterialIcons
                                name='check'
                                size={40}
                                color='green'
                            />
                        </TouchableOpacity>
                    </View>
                </View> :
                <TouchableOpacity
                    style={styles.btnContainer}
                    onPress={() => setAddingNote(true)}
                >
                    <MaterialIcons
                        name='note-add'
                        size={40}
                        color={Colors.blue}
                    />
                </TouchableOpacity>
            }
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.imageContainer}>
                    {data.image === '' ?
                        <Image
                            source={require('../../../assets/images/default-profile.png')}
                            style={styles.image}
                        /> : <Image
                            source={{ uri: data.image }}
                            style={styles.image}
                            resizeMode='contain'
                        />}
                </View>
                <View style={styles.levelContainer}>
                    <LevelBtn level={data.level} />
                </View>
            </View>
            <DetailCard title='Name' value={data.name} />

            <DetailCard title='Ancestry and Heritage' value={`${data.heritage} ${data.ancestry}`} />

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
                <FlatList
                    data={data.notes}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderNote}
                    ListFooterComponent={renderAddNote}
                />
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
    noteContainer: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: Colors.darkBrown,
        borderRadius: 5,
        padding: 5,
        marginBottom: 10,
    },
    noteFooter: {
    },
    btnContainer: {
        padding: 5,
        paddingRight: 15,
        alignSelf: 'flex-end',
    },
    input: {
        padding: 5,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: Colors.lightBlue,
        borderRadius: 5,
    },
    editContainer: {
        padding: 5,
        flexDirection: 'row',
        alignSelf: 'flex-end',
        height: 300,
    },
    editBtnContainer: {
        padding: 5,
        paddingRight: 15,
    },
});
