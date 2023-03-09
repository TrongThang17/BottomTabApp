import {View, Text,TouchableOpacity} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import { useNavigation } from '@react-navigation/native';
const Home = () => {
  const navigation = useNavigation()
  const data = useSelector((state: any) => state.reducerChangeTab.data);
  return (
    <View>
      <Text>{data}</Text>
      <TouchableOpacity style={{width:70,height:40, margin:20,backgroundColor:'pink'}} onPress={()=>{
        navigation.navigate('Home1')
      }}>
        <Text>Go to screen 1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{width:70,height:40, margin:20,backgroundColor:'pink'}} onPress={()=>{
        navigation.navigate('Home2')
      }}>
        <Text>Go to screen 2</Text>
      </TouchableOpacity >
      <TouchableOpacity style={{width:70,height:40, margin:20,backgroundColor:'pink'}} onPress={()=>{
        navigation.navigate('Home3')
      }}>
        <Text>Go to screen 3</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{width:120,height:40, margin:20,backgroundColor:'pink'}} onPress={()=>{
        navigation.navigate('Notification')
      }}>
        <Text>Go to screen User</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
