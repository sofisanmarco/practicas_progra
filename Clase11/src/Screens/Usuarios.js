import React, {Component} from "react";
import {Text, View, Pressable, StyleSheet, FlatList} from 'react-native'
import { db, auth } from '../firebase/config';

class Usuarios extends Component{
    constructor(props){
        super(props)
        this.state = {usuarios: [], loading: true}
    }

    componentDidMount(){
        db.collection('users').onSnapshot(
            docs => {
                let users = []
                docs.forEach( doc => {
                    users.push({
                        id: doc.id,
			            data: doc.data()
                    })

                    this.setState({
                        usuarios: users,
                        loading: false
                    })
                })
        })
    };

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.titulo}> Usuarios </Text>
                <FlatList
                        style={styles.flatlist}
                        data = {this.state.usuarios}
                        keyExtractor={ item => item.id.toString() }
                        renderItem={ ({item}) => <Text>{item.data.username}, {item.data.email}</Text> }
                    />

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

    flatlist: {
    	width: '100%',
        flex: 1
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

export default Usuarios;