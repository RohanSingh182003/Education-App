import { View, Text , Image, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import Navigation from '../Components/Navigation';

const Home = ({navigation}) => {
    return (
      <SafeAreaView>
        <View style={styles.mainContainer}>
          <Image
          source={require('../../assets/home.jpeg')}
          style={styles.image}
          />
        <Text style={styles.mainHeading}>Welcome to <Text style={{color:'blue', fontWeight: 'bold'}}>Education App</Text></Text>
        <Text style ={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, ratione. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, libero!</Text>
      <TouchableOpacity className="flex items-center mt-16" onPress={()=>{navigation.navigate('Courses')}}>
        <Text className="w-32 p-2 bg-blue-600 text-white text-center font-semibold">Explore Our Courses</Text>
      </TouchableOpacity>
      <View style={styles.nav}>
        <Navigation/>
      </View>
      </View>
      </SafeAreaView>
    )
}


const styles = StyleSheet.create({
  image: {
    width: 200,
    height: undefined,
    aspectRatio: 1,
    borderRadius: 16,
    marginTop: 16
  },
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
    height: '88vh'
  },
  mainHeading: {
    fontSize: 24,
    marginTop: 12
  },
  description: {
    paddingHorizontal: 12,
    fontSize: 18,
    color: 'gray',
    marginTop: 20,
    textAlign: 'center'
  },
  nav: {
    position: 'absolute',
    bottom: 0
  }
});

export default Home