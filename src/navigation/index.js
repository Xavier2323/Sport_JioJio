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
import SchoolSettingScreen from '../screens/SchoolSettingScreen';
import HeadshotSettingScreen from '../screens/HeadshotSettingScreen';
import IntroductionSettingScreen from '../screens/IntroductionSettingScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const [userid, setUserid] = useState(0);
  
  return (
    
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Initial">
        <Stack.Screen name="Initial">
          {(props) => <InitialScreen {...props} setUserid={setUserid}/>}
        </Stack.Screen>  
     
        <Stack.Screen name="SignIn">
          {(props) => <SignInScreen {...props} setUserid={setUserid}/>}
        </Stack.Screen> 
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="NewPassword" component={NewPasswordScreen} />

        <Stack.Screen name="NicknameSetting" component={NicknameSettingScreen} />
        <Stack.Screen name="SchoolSetting" component={SchoolSettingScreen} />
        <Stack.Screen name="HeadshotSetting" component={HeadshotSettingScreen} />
        <Stack.Screen name="IntroductionSetting">
          {(props) => <IntroductionSettingScreen {...props} setUserid={setUserid} />}
        </Stack.Screen> 
        <Stack.Screen name="Home">
          {(props) => <HomeScreen {...props} userid={userid} />}
        </Stack.Screen> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;