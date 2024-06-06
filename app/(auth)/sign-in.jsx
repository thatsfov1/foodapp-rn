import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link } from 'expo-router'

const SignIn = () => {

  const [form, setForm] = useState({
    email: "",
    password: "",
  })

  const [isSubmitting, setisSubmitting] = useState(false)

  const submit = () => { }
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center h-full px-4 my-6">
          <Text
            className="text-secondary font-psemibold text-4xl  w-[115px] h-[35px]"
          >Foody</Text>
          <Text className="text-2xl text-secondary text-semibold mt-10 font-psemibold" >
            Log in to Foody
          </Text>

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({
              ...form,
              email: e
            })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({
              ...form,
              password: e
            })}
            otherStyles="mt-7"
          />

          <CustomButton
            title="Sign in"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="flex-row gap-2 justify-center pt-5">
            <Text className="font-pregular text-base text-[#838383]">
              Don't have an account?
            </Text>
            <Link className='text-secondary text-base font-psemibold' href="sign-up">
              Sign up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn