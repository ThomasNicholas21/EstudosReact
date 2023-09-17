import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from "../screens/Login/index"
import SignUp from "../screens/Cadastro/index"
import BottomTabs from './BottomTabs';

const Stack = createNativeStackNavigator();

function Stacks() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
            <Stack.Screen name="BottomTabs" component={BottomTabs} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default Stacks;