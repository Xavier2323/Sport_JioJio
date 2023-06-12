import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  TextInput,
} from 'react-native';
import Logo from '../../../assets/JioJioLogo.jpg';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';

const InitialScreen = () => {
  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const {
    formState: {errors},
  } = useForm();


  const onSignInPress = () => {
    navigation.navigate('SignIn');
  };

  const onSignUpPress = () => {
    navigation.navigate('SignUp');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, {height: height}]}
          resizeMode="contain"
        />

        <CustomButton
          text="登  入"
          onPress={onSignInPress}
          type="THEME"
        />

        <CustomButton
          text="註  冊"
          onPress={onSignUpPress}
          type="THEME"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F6663F',
  },
  logo: {
    marginTop:90,
    height: '20%',
    width: '68%',
    maxHeight: 350,
  },
});

export default InitialScreen;
