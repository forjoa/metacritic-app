import { StatusBar } from 'expo-status-bar'
import {
  Image,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
} from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='light' />
      <Image
        source={{
          uri: 'https://www.metacritic.com/a/img/catalog/provider/6/3/6-1-4763-13.jpg',
        }}
        style={styles.image}
      />
      <Text style={styles.text}>zeldaa!</Text>
      <Button title='Click' onPress={() => alert('Hola')} />
      <TouchableHighlight
        underlayColor={'#09f'}
        onPress={() => alert('hola')}
        style={{ padding: 10, backgroundColor: '#07d', borderRadius: 10 }}
      >
        <Text style={styles.text}>clickkkk</Text>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
  },
  image: {
    width: 215,
    height: 294,
  },
})
