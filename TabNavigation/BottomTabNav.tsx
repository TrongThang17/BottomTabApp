import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import { Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Notification from '../src/screen/notification/Notification';

const Tab = createBottomTabNavigator();
const TabScreen = () =>{
  const dataRedux = useSelector((state: any) => state.reducerChangeTab.data1);
  return(
    <Tab.Navigator>
    {dataRedux.map((element: any) => {
      return (
        <Tab.Screen
          key={element.id}
          name={element.screen}
          component={element.tab}
          options={{
            headerShown:false,
            tabBarIcon: () => {
              return <Image source={element.icon} style={{ width: 30, height: 30 }} />;
            },
          }}
        />
      );
    })}
  </Tab.Navigator>
  )
}



export default () => {
  const Stack = createStackNavigator()
 
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='TabScreen' component={TabScreen} options={{headerShown:false}}/>
        <Stack.Screen name='Notification' component={Notification}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
