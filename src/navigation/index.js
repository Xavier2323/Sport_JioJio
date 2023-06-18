import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import HomeScreen from '../screens/HomeScreen';
import InitialScreen from '../screens/InitialScreen';

import NicknameSettingScreen from '../screens/NicknameSettingScreen';
import HeadshotSettingScreen from '../screens/HeadshotSettingScreen';
import IntroductionSettingScreen from '../screens/IntroductionSettingScreen';

import NotificationScreen from '../pages/Notification/Notification';
import PersonalScreen from '../pages/Personal/Personal';
import NotifyScreen from '../pages/Notification/Notify';
import ApprovalScreen from '../pages/Notification/Approval';
import ReminderScreen from '../pages/Notification/Reminder';
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="通知">
        <Stack.Screen name="Initial" component={InitialScreen} />

        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="NewPassword" component={NewPasswordScreen} />

        <Stack.Screen name="NicknameSetting" component={NicknameSettingScreen} />
        <Stack.Screen name="HeadshotSetting" component={HeadshotSettingScreen} />
        <Stack.Screen name="IntroductionSetting" component={IntroductionSettingScreen} />

        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Notification" component={NotificationScreen} />
        <Stack.Screen name="Personal" component={PersonalScreen} />
        <Stack.Screen name="Notify" component={NotifyScreen} />
        <Stack.Screen name="Approval" component={ApprovalScreen} />
        <Stack.Screen name="Reminder" component={ReminderScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
