import React,{Component} from "react";
import {Text, View, StyleSheet} from 'react-native';
import BotonSaludar from "../../Components/BotonSaludar/BotonSaludar";
import Contador from "../../Components/Contador/Contador";

class Home extends Component{
    render(){
        return(
            <View style={styles.container} >
                <Text> Hola Mundo! </Text>
                <BotonSaludar/>
                <Contador/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        padding: 10
    },
})

export default Home;