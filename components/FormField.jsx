import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, {useState} from 'react'
import {icons} from '../constants'

const FormField = ({title,value, handleChangeText,
     otherStyles, placeholder, ...props}) => {

        const [showPassword, setShowPassword] = useState(false)
    return (
        <View className={`space-y-2 ${otherStyles}`}>
            <Text className="text-black-100 text-base">
                {title}
            </Text>
            <View className="w-full border-[1px] border-gray-200 h-16 px-4 bg-gray rounded-2xl
                focus:border-secondary focus:border-2 items-center flex-row
            ">
                <TextInput 
                    className="flex-1 text-black font-psemibold text-base"
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor="text-gray"
                    onChangeText={handleChangeText}
                    secureTextEntry={title === "Password" && !showPassword}
                />
                {title === "Password" && (
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <Image source={!showPassword ? icons.eye : icons.eyeHide} 
                        className="w-6 h-6" resizeMode="contain"/>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}

export default FormField