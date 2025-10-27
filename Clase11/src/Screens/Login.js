import React, {Component} from "react";
import {Text, View, StyleSheet, Pressable, TextInput} from 'react-native'
import { auth } from '../firebase/config';

class Login extends Component{
    constructor(props){
        super(props)
        this.state = {email: '', password: '', loggedIn: false, error: ''}
    }

    onSubmit(){
        console.log(this.state.email, this.state.password)

        if (!this.state.email.includes('@')){
            this.setState({error: "Email mal formateado"})
            return
        } 
        if (this.state.password.length < 6){
            this.setState({error:" La password debe tener una longitud mínima de 6 caracteres"})
            return
        } 

        auth.signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((response) => {
            this.setState({loggedIn: true});}, this.props.navigation.navigate("HomeMenu", {screen: "Home"}))
        .catch(error => {
            this.setState({error: 'Credenciales inválidas.'})})
        
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.titulo}> Ingresar </Text>

                <TextInput style={styles.input} 
                            keyboardType="email-address" 
                            placeholder="email" 
                            onChangeText={text => this.setState({email: text})} 
                           value={this.state.email} />

                <TextInput keyboardType="default"
                                            placeholder="password"
                                            onChangeText={text => this.setState({password: text})}
                                            value={this.state.password}
                                            secureTextEntry={true} 
                                            style={styles.input}/>

                <Text>{this.state.error}</Text>

                <Pressable style={styles.boton} onPress={() => this.onSubmit()}>
                                    <Text style={styles.textoBoton}>Enviar</Text>
                </Pressable>

                <Pressable style={styles.register} onPress={() => this.props.navigation.navigate('Register')}>
                    <Text style={styles.text}>No tengo cuenta</Text>
                </Pressable>

                <Pressable style={styles.home} onPress={ ()=> this.props.navigation.navigate('HomeMenu', {screen: 'Home'})}>
                    <Text style={styles.text}>Entrar en la app</Text>
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

    register: {
        padding: 4,
        backgroundColor: 'grey',
        marginBottom: 4,
        borderCurve: 4,
        width: 150,
        marginTop: 10
    },

    home: {
        padding: 4,
        backgroundColor: 'pink',
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

export default Login;