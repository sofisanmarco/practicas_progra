import React, {Component} from "react";
import { Pressable, Text } from "react-native";
import { StyleSheet } from "react-native";

class BotonSaludar extends Component{

    click(){
        console.log("Me clickearon")
    }

    render(){
        return(
            <Pressable style={styles.click}  onPress={() => this.click()}>
                <Text style={styles.text}> Clickear </Text>
            </Pressable>
        )
    }
};

const styles = StyleSheet.create({
    click: {
        padding: 4,
        backgroundColor: "#ccc",
        marginBottom: 4,
        borderCurve: 4,
    },
    text: {
        fontWeight: "bold",
        textAlign: "center"
    }
})

export default BotonSaludar;