import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from './SignInScreen';
import HomeScreen from './HomeScreen';
import MenuScreen from './MenuScreen';
import ManageMenuScreen from './ManageMenuScreen';
import FilterScreen from './FilterScreen';

const Stack = createNativeStackNavigator();

 function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignInScreen} options={{ title: 'Sign In' }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Digital Menu' }} />
        <Stack.Screen name="Menu" component={MenuScreen} options={{title:'Menu'}}/>
        <Stack.Screen name="ManageMenu" component={ManageMenuScreen} options={{title:'Manage Menu'}}/>
        <Stack.Screen name="FilterMenu" component={FilterScreen} options= {{title: 'Filter Screen'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;