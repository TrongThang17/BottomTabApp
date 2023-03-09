import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
const Home1 = () => {
  const navigation = useNavigation()
  return (
    <View>
      <Text>Home1</Text>
      <TouchableOpacity style={{width:100,height:40, margin:20,backgroundColor:'pink'}} onPress={()=>{
        navigation.navigate('Home')
      }}>
        <Text>back to screen home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{width:70,height:40, margin:20,backgroundColor:'pink'}} onPress={()=>{
        navigation.navigate('Home2')
      }}>
        <Text>Go to screen 2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{width:70,height:40, margin:20,backgroundColor:'pink'}} onPress={()=>{
        navigation.navigate('Home3')
      }}>
        <Text>Go to screen 3</Text>
      </TouchableOpacity >
     
      
    </View>
  )
}

export default Home1