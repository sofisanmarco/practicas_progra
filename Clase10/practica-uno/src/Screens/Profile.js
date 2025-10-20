import React, {Component} from "react";
import {Text, View, Pressable, StyleSheet} from 'react-native'

class Profile extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.titulo}> Profile </Text>
                <Pressable style={styles.boton} onPress={() => this.props.navigation.navigate('Login')}>
                    <Text style={styles.text}>Salir de la app</Text>
                </Pressable>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    titulo: {
        fontSize: 20,
        fontWeight: 'bold'
    }, 
    
    container: {
        marginLeft: 10,
        marginTop: 20,
        paddingHorizontal: 10
    },

    boton: {
        padding: 4,
        backgroundColor: 'grey',
        marginBottom: 4,
        borderCurve: 4,
        width: 150,
        marginTop: 10
    },
    text: {
        textAlign: "center"
    }
})

export default Profile;