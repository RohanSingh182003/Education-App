import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Navigation = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity
                onPress={()=>{navigation.navigate( 'Home' )}}
            >
                <Text>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>{navigation.navigate( 'Courses' )}}
            >
                <Text>Courses</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>{navigation.navigate( 'About' )}}
            >
                <Text>About</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>{navigation.navigate( 'Contact' )}}
            >
                <Text>Contact</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>{navigation.navigate( 'Users' )}}
            >
                <Text>Users</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Navigation

const styles = StyleSheet.create( {
    mainContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingHorizontal: 10,
        width: '100vw',
        borderTopColor: 'gray',
        borderTopWidth: 0.2,
        borderRadius: 10,
        paddingTop: 7
    }
} )