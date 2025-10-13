import React, {Component} from "react";
import { Text, View, StyleSheet, Image } from "react-native-web";

function Card(props){
    return(
        <View>
            <Text>{props.info.title}</Text>
            <Text>{props.info.price}</Text>
            <Text>{props.info.description}</Text>
            <Text>{props.info.category}</Text>
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