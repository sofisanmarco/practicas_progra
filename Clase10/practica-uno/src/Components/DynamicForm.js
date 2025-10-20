import React, {Component} from "react";
import {Text, TextInput, View, Pressable, StyleSheet} from 'react-native'

class DynamicForm extends Component{
    constructor(props){
        super(props)
        this.state = {comentario: ''}
    }

    onSubmit(){
        console.log(this.state.comentario)
    }

    render(){
        return(
            <View style={styles.container}>
                <Text>Comentario:</Text>
                <TextInput style={styles.input}
                            keyboardType="default"
                            placeholder="comentario"
                            onChangeText={text => this.setState({comentario: text})}
                            value={this.state.comentario}/>

                <Pressable style={styles.boton} onPress={() => this.onSubmit()}>
                    <Text style={styles.textoBoton}>Enviar</Text>
                </Pressable>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        paddingHorizontal: 10
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

export default DynamicForm;