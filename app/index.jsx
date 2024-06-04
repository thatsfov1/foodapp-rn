import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'

const App = () => {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-3xl">Food App</Text>
      <StatusBar />
      <Link href="/home" >Go to home</Link>
    </View>
  )
}

export default App