import { StatusBar } from 'expo-status-bar'
import { ScrollView, Text, View, Image } from 'react-native'
import { Redirect, router } from 'expo-router'
import { SafeAreaView } from 'react-native'
import { images } from "../constants"
import CustomButton from '../components/CustomButton'


const App = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center h-full px-4">
          <Text className="text-secondary font-psemibold text-4xl text-center">
            Foody
          </Text>
          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[300px] " resizeMode="contain"
          />
          <View className="relative mt-5">
            <Text className="text-3xl text-black-100 font-bold text-center">
              Discover Endless Possibilities with {" "}
              <Text className="text-secondary">
                Foody
              </Text>
            </Text>
            <Image 
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-2 -right-6"
              resizeMode="contain" 
            />
          </View>

          <Text className="text-sm font-pregular text-black-100 mt-7 text-center">
          Where Creativity Meets Innovation: Embark on a Journey of Limitless Exploration with Foody
          </Text>

          <CustomButton title="Continue with email" handlePress={()=> router.push('/sign-in')} 
          containerStyles="w-full mt-7"/>
        </View>
      </ScrollView>

      <StatusBar backgroundColor='#161622' style='dark'/>
    </SafeAreaView>
  )
}

export default App