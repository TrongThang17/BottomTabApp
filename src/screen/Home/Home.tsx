import {View, Text} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
const Home = () => {
  const data = useSelector((state: any) => state.reducerChangeTab.data);
  return (
    <View>
      <Text>{data}</Text>
    </View>
  );
};

export default Home;
