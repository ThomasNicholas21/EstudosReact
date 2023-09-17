import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import StacksHome from './StacksHome';
import Configuracao from '../screens/Configuracao/index';
import Perfil from '../screens/Perfil/index';

const Tab = createBottomTabNavigator();

function BottomTabs() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle: { height: 65 }, tabBarActiveTintColor: "#010115", tabBarShowLabel: false }} initialRouteName='Home'>
            <Tab.Screen name="Perfil" component={Perfil} options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="person-circle-outline" color={color} size={size} />
                ),
            }} />
            <Tab.Screen name="Home" component={StacksHome} options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="home" color={color} size={size} />
                ),
            }} />
            <Tab.Screen name="Configuracao" component={Configuracao} options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="settings-outline" color={color} size={size} />
                ),
            }} />
        </Tab.Navigator>
    );
}

export default BottomTabs;