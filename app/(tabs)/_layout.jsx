import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import {icons} from '../../constants'

const TabIcon = ({icon, color,name, focused}) =>{
    return (
        <View className="items-center justify-center gap-2">
            <Image 
                source={icon}
                resizeMode='contain'
                tintColor={color}
                className="w-6 h-6"
            />
            <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`}>
                {name}
            </Text>
        </View>
    )
}

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
            tabBarShowLabel:false,
            tabBarActiveTintColor: "#00b906",
            tabBarInactiveTintColor: "#CDCDE0",
            tabBarStyle: {
                backgroundColor: "#fff"
            }
        }}
      >
        <Tabs.Screen  name="home" options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({color,focused}) =>(
                <TabIcon icon={icons.home} color={color} 
                focused={focused} name="Home"/>
            )
        }}/>
        <Tabs.Screen  name="create" options={{
            title: 'create',
            headerShown: false,
            tabBarIcon: ({color,focused}) =>(
                <TabIcon icon={icons.plus} color={color} 
                focused={focused} name="Create"/>
            )
        }}/>
        <Tabs.Screen  name="profile" options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({color,focused}) =>(
                <TabIcon icon={icons.profile} color={color} 
                focused={focused} name="Profile"/>
            )
        }}/>
        </Tabs>
    </>
  )
}

export default TabsLayout