import React, {Component} from "react";
import {Text, View, StyleSheet} from 'react-native'
import DynamicForm from "../Components/DynamicForm";

class Home extends Component{

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.titulo}> Home </Text>
                <DynamicForm/>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
        marginTop: 20,
        paddingHorizontal: 10
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export default Home;