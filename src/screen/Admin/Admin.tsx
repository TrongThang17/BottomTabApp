import {View, Text,TouchableOpacity} from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
const Admin = () => {
  
  const navigation = useNavigation()
  
  return (
    <View>
      <Text>Admin</Text>
      <TouchableOpacity style={{width:70,height:40, margin:20,backgroundColor:'pink'}} onPress={()=>{
        navigation.navigate('Notification')
      }}> 
        <Text>Go to screen 3</Text>
      </TouchableOpacity >

    </View>
  );
};

export default Admin;
