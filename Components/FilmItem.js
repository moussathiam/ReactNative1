import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

class FilmItem extends React.Component{
    render(){
        const film = this.props.film;
        return(
            <View style={ styles.main_container }>
                <View style={{ flex: 1, borderColor:'red', borderWidth: 1}}>
                    <Text>Image</Text>
                </View>
                <View style={{ flex: 2, borderColor:'red', borderWidth: 1}}>
                    <View style={{ flex: 1, borderColor:'red', borderWidth: 1, flexDirection: 'row'}}>
                        <View style={{ flex: 2, borderColor:'red', borderWidth: 1}}>
                            <Text>{ film.title }</Text>
                        </View>
                        <View style={{ flex: 1, borderColor:'red', borderWidth: 1}}>
                            <Text>{ film.vote }</Text>
                        </View>
                    </View>
                    <View style={{ flex: 3, borderColor:'red', borderWidth: 1}}>
                        <Text  numberOfLines={5}> 
                            { film.des }
                        </Text>
                    </View>
                    <View style={{ flex: 1, borderColor:'red', borderWidth: 1}}>
                        <Text>Sorti le ...</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        height: 190,
        flexDirection: 'row',
        marginBottom: 5,
    },
    title_text: {

    }
})

export default FilmItem