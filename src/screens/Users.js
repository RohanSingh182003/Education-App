import { StyleSheet, Text, View , SafeAreaView, FlatList, Image } from 'react-native'
import React from 'react'
import Students from '../api/Students'

const Users = () => {
  return (
    <SafeAreaView>
      <Text className="text-center text-3xl my-2">Our Students</Text>
      <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={Students}
      keyExtractor={(key)=> key.id}
      renderItem={({item})=>{
        return (
          <View className="flex items-center w-64 p-4 border rounded-lg mx-5">
            <Image
            source={{uri : item.img}}
            className="w-60 rounded-lg h-auto aspect-square"
            />
            <Text className="mt-1 text-xl">{item.name}</Text>
            <Text className="mt-1 text-sm px-3 text-slate-600">{item.desc}</Text>
            <Text className="mt-1">{item.age}</Text>
            <Text className="mt-1">{item.institute}</Text>
          </View>
        )
      }}
      />
    </SafeAreaView>
  )
}

export default Users

const styles = StyleSheet.create({})