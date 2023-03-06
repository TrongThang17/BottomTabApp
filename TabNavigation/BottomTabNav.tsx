import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../src/screen/Home/Home';
import Setting from '../src/screen/Setting/Setting';
import About from '../src/screen/About/About';
import Admin from '../src/screen/Admin/Admin';
import Apple from '../src/screen/Apple/Apple';
import Banana from '../src/screen/Banana/Banana';
import Contact from '../src/screen/Contact/Contact';
import Language from '../src/screen/Language/Language';
import User from '../src/screen/User/User';
import Vehicle from '../src/screen/Vehicle/Vehicle';
import {useSelector} from 'react-redux';
import {Image} from 'react-native';
import {image} from '../assets/img/imgages';

const Tab = createBottomTabNavigator();
export default () => {
  const data = useSelector((state: any) => state.reducerChangeTab.data);
  let tab1, tab2, tab3, tab4, img1, img2, img3, img4;
  let screen1: any, screen2: any, screen3: any, screen4: any;
  (tab1 = data[0]), (tab2 = data[1]), (tab3 = data[2]), (tab4 = data[3]);

  tab1 == 'Home'
    ? ((screen1 = Home), (img1 = image.home))
    : tab1 == 'User'
    ? ((screen1 = User), (img1 = image.user))
    : tab1 == 'About'
    ? ((screen1 = About), (img1 = image.about))
    : tab1 == 'Contact'
    ? ((screen1 = Contact), (img1 = image.contact))
    : tab1 == 'Language'
    ? ((screen1 = Language), (img1 = image.language))
    : tab1 == 'Vehicle'
    ? ((screen1 = Vehicle), (img1 = image.vehicle))
    : tab1 == 'Admin'
    ? ((screen1 = Admin), (img1 = image.admin))
    : tab1 == 'Apple'
    ? ((screen1 = Apple), (img1 = image.apple))
    : tab1 == 'Banana'
    ? ((screen1 = Banana), (img1 = image.banana))
    : '';

  tab2 == 'Home'
    ? ((screen2 = Home), (img2 = image.home))
    : tab2 == 'User'
    ? ((screen2 = User), (img2 = image.user))
    : tab2 == 'About'
    ? ((screen2 = About), (img2 = image.about))
    : tab2 == 'Contact'
    ? ((screen2 = Contact), (img2 = image.contact))
    : tab2 == 'Language'
    ? ((screen2 = Language), (img2 = image.language))
    : tab2 == 'Vehicle'
    ? ((screen2 = Vehicle), (img2 = image.vehicle))
    : tab2 == 'Admin'
    ? ((screen2 = Admin), (img2 = image.admin))
    : tab2 == 'Apple'
    ? ((screen2 = Apple), (img2 = image.apple))
    : tab2 == 'Banana'
    ? ((screen2 = Banana), (img2 = image.banana))
    : '';

  tab3 == 'Home'
    ? ((screen3 = Home), (img3 = image.home))
    : tab3 == 'User'
    ? ((screen3 = User), (img3 = image.user))
    : tab3 == 'About'
    ? ((screen3 = About), (img3 = image.about))
    : tab3 == 'Contact'
    ? ((screen3 = Contact), (img3 = image.contact))
    : tab3 == 'Language'
    ? ((screen3 = Language), (img3 = image.language))
    : tab3 == 'Vehicle'
    ? ((screen3 = Vehicle), (img3 = image.vehicle))
    : tab3 == 'Admin'
    ? ((screen3 = Admin), (img3 = image.admin))
    : tab3 == 'Apple'
    ? ((screen3 = Apple), (img3 = image.apple))
    : tab3 == 'Banana'
    ? ((screen3 = Banana), (img3 = image.banana))
    : '';

  tab4 == 'Home'
    ? ((screen4 = Home), (img4 = image.home))
    : tab4 == 'User'
    ? ((screen4 = User), (img4 = image.user))
    : tab4 == 'About'
    ? ((screen4 = About), (img4 = image.about))
    : tab4 == 'Contact'
    ? ((screen4 = Contact), (img4 = image.contact))
    : tab4 == 'Language'
    ? ((screen4 = Language), (img4 = image.language))
    : tab4 == 'Vehicle'
    ? ((screen4 = Vehicle), (img4 = image.vehicle))
    : tab4 == 'Admin'
    ? ((screen4 = Admin), (img4 = image.admin))
    : tab4 == 'Apple'
    ? ((screen4 = Apple), (img4 = image.apple))
    : tab4 == 'Banana'
    ? ((screen4 = Banana), (img4 = image.banana))
    : '';

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name={tab1}
          component={screen1}
          options={{
            tabBarIcon: () => {
              return <Image source={img1} style={{width: 30, height: 30}} />;
            },
          }}
        />
        <Tab.Screen
          name={tab2}
          component={screen2}
          options={{
            tabBarIcon: () => {
              return <Image source={img2} style={{width: 30, height: 30}} />;
            },
          }}
        />
        <Tab.Screen
          name={tab3}
          component={screen3}
          options={{
            tabBarIcon: () => {
              return <Image source={img3} style={{width: 30, height: 30}} />;
            },
          }}
        />
        <Tab.Screen
          name={tab4}
          component={screen4}
          options={{
            tabBarIcon: () => {
              return <Image source={img4} style={{width: 30, height: 30}} />;
            },
          }}
        />
        <Tab.Screen
          name="Setting"
          component={Setting}
          options={{
            tabBarIcon: () => {
              return (
                <Image source={image.setting} style={{width: 30, height: 30}} />
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
