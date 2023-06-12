import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import JioJioScreen from '../../pages/jiojio.js';
import DiscoverScreen from '../../pages/Discover.js';
import NotificationScreen from '../../pages/Notification.js';
import PersonalScreen from '../../pages/Personal.js';
import CategoryScreen from '../../pages/Category.js';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }} initialRouteName="通知">
      <Tab.Screen name="發現" component={DiscoverScreen} />
      <Tab.Screen name="揪揪" component={JioJioScreen} />
      <Tab.Screen name="分類" component={CategoryScreen} />
      <Tab.Screen name="通知" component={NotificationScreen} />
      <Tab.Screen name="個人" component={PersonalScreen} />
    </Tab.Navigator>
  );
};

export default HomeScreen;
