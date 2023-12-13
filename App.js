import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import AppHeader from './components/AppHeader';
import HomeScreen from './screens/HomeScreen';
import SummaryScreen from './screens/SummaryScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="AppHeader" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AppHeader" component={AppHeader} /> */}
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SummaryScreen" component={SummaryScreen} />
      {/* </Stack.Navigator> */}
    </NavigationContainer>
  );
}
