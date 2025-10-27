import React, {Component} from "react";
import {Text, View, StyleSheet, Pressable, TextInput} from 'react-native';
import { db, auth } from '../firebase/config';

class Register extends Component{
    constructor(props){
        super(props)
        this.state = {email: '', username: '', password: '', registered: false, error: ''}
    }

    onSubmit(){
        console.log(this.state.email);
        
        auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then( response => {
            this.setState({registered: true}) 
            this.props.navigation.navigate('Login')
            
            db.collection('users').add({
                owner: auth.currentUser.email,
                username: this.state.username,
                email: this.state.email,
                createdAt: Date.now()

            })
            .then(res => console.log(res))
            .catch(error => console.log(error))
        })

        .catch( error => console.log(error))

    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.titulo}> Formulario de Register </Text>
                <TextInput keyboardType="email-address" 
                            placeholder="email" 
                            onChangeText={text => this.setState({email: text})} 
                            value={this.state.email} 
                            style={styles.input}/>
                        
                <TextInput keyboardType="default"
                            placeholder="username"
                            onChangeText={text => this.setState({username: text})}
                            value={this.state.username} 
                            style={styles.input}/>

                <TextInput keyboardType="default"
                            placeholder="password"
                            onChangeText={text => this.setState({password: text})}
                            value={this.state.password}
                            secureTextEntry={true} 
                            style={styles.input}/>
                        
                <Pressable style={styles.boton} onPress={() => this.onSubmit()}>
                    <Text style={styles.textoBoton}>Enviar</Text>
                </Pressable>


                <Pressable style={styles.login} onPress={() => this.props.navigation.navigate('Login')}>
                    <Text style={styles.text} >Ir a login</Text>
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

    login: {
        padding: 4,
        backgroundColor: 'grey',
        marginBottom: 4,
        borderCurve: 4,
        width: 150,
        marginTop: 10
    },
    text: {
        textAlign: "center"
    },

    input: {
        height: 20,
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderStyle: 'solid',
        borderCurve: 6,
        marginVertical: 10
    },
    boton: {
        backgroundColor:'#28a745',
        paddingHorizontal: 10,
        paddingVertical: 6,
        textAlign: 'center',
        borderCurve: 4,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#28a745',
        width: 70
    },
    textoBoton: {
        color: '#fff'
    }
})

export default Register;