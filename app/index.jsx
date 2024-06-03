import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Food App</Text>
      <StatusBar style="auto" />
      <Link href="/profile" style={{color:'red'}}>Go to profile</Link>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    display: 'flex',
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})