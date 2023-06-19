import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons} from 'react-native-vector-icons';
import JioJioScreen from '../../pages/newjiopage/jiojio.js';
import DiscoverScreen from '../../pages/Discover/Discover.js';
//import NotificationScreen from '../../pages/Notification.js';
//import PersonalScreen from '../../pages/Personal.js';
import CategoryScreen from '../../pages/Category/Category.js';

const Tab = createMaterialBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator initialRouteName="發現" activeColor="#f0edf6" inactiveColor="#EB7943" screenOptions={{ headerShown: false }}>
      <Tab.Screen name="發現" component={DiscoverScreen} options={{
          tabBarLabel: '發現',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="compass" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen name="揪揪" component={JioJioScreen} options={{
          tabBarLabel: '揪揪',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="basketball" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen name="分類" component={CategoryScreen} options={{
          tabBarLabel: '分類',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="table" color={color} size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeScreen;

/* 取得userid
import AsyncStorage from "@react-native-async-storage/async-storage";
const userid_item = await AsyncStorage.getItem('Data_userid');
const userid_stringfyItem = JSON.stringify(userid_item);
const userid = JSON.parse(userid_stringfyItem);
即可取得 userid */