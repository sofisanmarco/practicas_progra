import React, {Component} from "react";
import { Text, View, StyleSheet, Image } from "react-native-web";

function Card(props){
    return(
        <View>
            <Text>{props.info.name}</Text>
            <Text>{props.info.species}</Text>
            <Text>{props.info.gender}</Text>
            <Image style={styles.image} 
                        source={{uri: props.info.image}}
                        resizeMode='contain'/>
        </View>
    )
}

const styles = StyleSheet.create({
  image: {
    height: 400,
    marginBottom: 10
  }
});


export default Card;