import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ProductsList from './src/Screens/ProductsList';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Probando FlatLists</Text>
      <ProductsList/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 20,
  }
});
