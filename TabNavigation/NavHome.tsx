import { createStackNavigator } from '@react-navigation/stack';
import Home from '../src/screen/home/Home';
import Home1 from '../src/screen/home/home1/Home1';
import Home2 from '../src/screen/home/home2/Home2';
import Home3 from '../src/screen/home/home3/Home3';

const NavHome = () => {
  const Stack = createStackNavigator();
  return (
   
      <Stack.Navigator screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Home1" component={Home1} />
        <Stack.Screen name="Home2" component={Home2} />
        <Stack.Screen name="Home3" component={Home3} />
      </Stack.Navigator>

  );
};

export default NavHome;
