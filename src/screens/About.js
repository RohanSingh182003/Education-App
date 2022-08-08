import { StyleSheet, Text, View , SafeAreaView, Image} from 'react-native'
import React from 'react'
import { AiFillLinkedin , AiFillGithub , AiOutlineInstagram } from 'react-icons/ai';

const About = () => {
  return (
    <SafeAreaView className="text-center">
      <View className="flex items-center mt-1">
        <Image
        source={{uri : 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}}
        className="h-64 w-64 aspect-square rounded-full object-cover object-center"
        />
      <Text className="text-4xl mt-1">Rohan Singh</Text>
      <View className="bg-blue-300 p-2 mt-10">
        <Text className="text-2xl font-medium">About Me</Text>
        <Text className="mt-2 px-2 text-slate-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, aperiam corporis itaque quaerat officiis temporibus!</Text>
      </View>
      <View className="flex flex-row justify-evenly items-center mt-6">
        <Text className="text-3xl text-blue-600"> <AiFillLinkedin/> </Text>
        <Text className="text-3xl"> <AiFillGithub/> </Text>
        <Text className="text-3xl text-red-600"> <AiOutlineInstagram /></Text>
      </View>
      </View>
    </SafeAreaView>
  )
}

export default About

const styles = StyleSheet.create({})