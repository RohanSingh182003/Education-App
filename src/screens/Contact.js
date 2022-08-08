import { Alert, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const Contact = ({navigation}) => {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [query, setQuery] = useState("")
  const handleSubmit = () => {
    if(!name && !phone && !email && !query){
      Alert.alert("Please Enter All The Fields")
    }
    else{
      Alert.alert(`Welcome ${name}`)
      navigation.navigate('Home')
    }
  }
  return (
    <SafeAreaView>
      <Text className="text-xl text-center">Enter Your Query</Text>
      <Text className="text-gray-600 px-4 text-center">Your quary solved by uus soon please keep some patience.</Text>
      <View className="px-16 mt-4">
        <Text className="text-lg">Enter Your Name</Text>
        <TextInput value={name} onChangeText={(name)=> setName(name)} className="border rounded-sm mt-1 h-8"/>
      </View>
      <View className="px-16 mt-4">
        <Text className="text-lg">Enter Your Phone Number</Text>
        <TextInput value={phone} onChangeText={(ph)=> setPhone(ph)}  className="border rounded-sm mt-1 h-8"/>
      </View>
      <View className="px-16 mt-4">
        <Text className="text-lg">Enter Your Email</Text>
        <TextInput value={email} onChangeText={(em)=> setEmail(em)}  className="border rounded-sm mt-1 h-8"/>
      </View>
      <View className="px-16 mt-4">
        <Text className="text-lg">Enter Your Query</Text>
        <TextInput value={query} onChangeText={(qr)=> setQuery(qr)}  className="border rounded-sm mt-1 h-24"/>
      </View>
      <TouchableOpacity className="flex items-center mt-4" onPress={()=>{handleSubmit()}}>
        <Text className="w-20 p-2 bg-blue-600 text-white text-center font-semibold">Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Contact

const styles = StyleSheet.create({})