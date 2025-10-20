import React, {Component} from "react";
import {View, Text, Pressable, Stylesheet} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../Screens/Home";
import Profile from "../Screens/Profile";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
const Tab = createBottomTabNavigator();

function HomeMenu(){
    return(
            <Tab.Navigator screenOptions={ { tabBarShowLabel: false } }>
                <Tab.Screen name='Home' component={Home} options={{headerShown: false, tabBarIcon: () => <FontAwesome name="home" size={24} color="black" />}}/>
                <Tab.Screen name='Profile' component={Profile} options={{ headerShown: false, tabBarIcon: () => <Ionicons name="person" size={24} color="black" />}}/>
            </Tab.Navigator>
    )
};

export default HomeMenu; 