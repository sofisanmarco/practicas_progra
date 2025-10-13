import React, {Component} from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

class Contador extends Component{
    constructor(props){
        super(props)
        this.state = {cantidad: 0}
    }

    click(){
        this.setState({
            cantidad: this.state.cantidad + 1
        })
    }

    render(){
        return(
            <View style={styles.container}>
                <Text>Cantidad de Clicks: {this.state.cantidad}</Text>
                <Pressable style={styles.contador} onPress={() => this.click()}>
                            <Text style={styles.text}> Click aqui para contar </Text>
                </Pressable>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 5
    },
    contador: {
        padding: 7,
        backgroundColor: 'rgba(0, 255, 0, 0.5)',
        marginBottom: 10,
        borderCurve: 4
    },
    text: {
        fontWeight: 'bold'
    }
})

export default Contador;