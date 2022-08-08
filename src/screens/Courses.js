import { FlatList, Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CourseDetails from '../api/CourseDetails'

const Courses = () => {
  return (
    <SafeAreaView className="flex-1 items-center">
      <FlatList
        showsVerticalScrollIndicator={false}
        data={CourseDetails}
        keyExtractor={( key ) => key.id}
        renderItem={( { item } ) => {
          return (
            <View className="text-center w-64 mt-5 border shadow-lg shadow-transparent rounded-lg">
              <Image
                source={{uri: item.img}}
                className="w-64 aspect-square"
              />
              <Text className="font-semibold text-blue-600 text-xl">{item.name}</Text>
              <Text className="mt-2 text-gray-600 font-light text-sm">{item.Description}</Text>
              <TouchableOpacity className="flex items-center">
                <Text className="italic bg-green-600 text-cyan-50 px-2 py-1 mt-3 mb-1 rounded-md w-36">Explore More</Text>
              </TouchableOpacity>
            </View>
          )
        }}
      />
    </SafeAreaView>
  )
}

export default Courses
