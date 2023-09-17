import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import CriarAtividades from '../screens/CriarAtividades';

const Stack = createNativeStackNavigator();

function StacksHome() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ListaDeAtividades" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="CriarAtividades" component={CriarAtividades} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default StacksHome;