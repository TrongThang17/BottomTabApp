import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
const Home3 = () => {
  const navigation = useNavigation()
  return (
    <View>
      <Text>Home3</Text>
      <TouchableOpacity style={{width:70,height:40, margin:20,backgroundColor:'pink'}} onPress={()=>{
      navigation.navigate('Home1')
    }}>
      <Text>back to screen 1</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{width:70,height:40, margin:20,backgroundColor:'pink'}} onPress={()=>{
      navigation.navigate('Home2')
    }}>
      <Text>back to screen 2</Text>
    </TouchableOpacity>
    </View>
  )
}

export default Home3