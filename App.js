// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from "./src/screens/Login/index"
import SignUp from "./src/screens/Cadastro/index"
import Home from './src/screens/Home';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen}  options={{headerShown:false}}/>
        <Stack.Screen name="SignUp" component={SignUp}  options={{headerShown:false}}/>
        <Stack.Screen name="Home" component={Home}  options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;