import React, { Component } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, FlatList, Button, TouchableOpacity } from 'react-native';
import { NativeBaseProvider, Box, Root } from "native-base";
import { Provider, connect } from 'react-redux';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import JioJioScreen from './src/pages/jiojio.js';
import DiscoverScreen from './src/pages/Discover.js';
import NotificationScreen from './src/pages/Notification.js';
import PersonalScreen from './src/pages/Personal.js';
import CategoryScreen from './src/pages/Category.js';

const Tab = createBottomTabNavigator();

function Empty() {
  return <View />
}


class App extends Component {
  render() {

    return (
      <NativeBaseProvider>
        <NavigationContainer>
          <Tab.Navigator screenOptions={{ headerShown: false }} initialRouteName="通知">
            <Tab.Screen name="發現" component={DiscoverScreen} />
            <Tab.Screen name="揪揪" component={JioJioScreen} />
            <Tab.Screen name="分類" component={CategoryScreen} />
            <Tab.Screen name="通知" component={NotificationScreen} />
            <Tab.Screen name="個人" component={PersonalScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    );
  }
}

export default App;


