import React, {Component} from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";
import Card from "../Components/Card";

class ProductsAll extends Component{
    constructor(props){
        super(props)
        this.state = {data: []}
    };

    componentDidMount(){
    fetch("https://rickandmortyapi.com/api/character")
    .then( response => response.json() )
    .then( data => this.setState({data: data.results}))
    .catch( error => console.log(error) );}

    render(){
        return(
            <View style={styles.flatlist}>
                <FlatList data={this.state.data}
                        keyExtractor={item => item.id.toString()} 
                        renderItem={({item}) => <Card info={item}/>}/>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    flatlist: {
        width: '100%',
        flex: 1,
        marginLeft: 10
   }

})

export default ProductsAll;