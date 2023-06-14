import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import JioJioScreen from '../../pages/newjiopage/jiojio.js';
import DiscoverScreen from '../../pages/Discover/Discover.js';
//import NotificationScreen from '../../pages/Notification.js';
//import PersonalScreen from '../../pages/Personal.js';
import CategoryScreen from '../../pages/Category/Category.js';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }} initialRouteName="發現">
      <Tab.Screen name="發現" component={DiscoverScreen} />
      <Tab.Screen name="揪揪" component={JioJioScreen} />
      <Tab.Screen name="分類" component={CategoryScreen} />
    </Tab.Navigator>
  );
};

export default HomeScreen;
