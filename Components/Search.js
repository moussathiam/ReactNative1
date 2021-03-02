import React from 'react'
import {StyleSheet, View, Text, Button, TextInput, FlatList } from 'react-native'
import films from '../Helpers/FilmsData'
import FilmItem from './FilmItem'

class Search extends React.Component {
    render(){
        return (
            <View style={ styles.view }>
                <TextInput  style={ styles.textInput } placeholder='Titre du film'/>
                <Button title='Rechercher' onPress={ () => { alert('moussa')} }/>
                <FlatList
                    data={films}
                    keyExtractor={ (item) => item.id.toString()}
                    renderItem={({item}) => <FilmItem film={item}/> }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        marginTop: 30,
        flex: 1
    },
    textInput: {
        height: 50,
        borderColor: '#aaa',
        borderWidth: 1,
        paddingLeft: 10
    }
});
export default Search