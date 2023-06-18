import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/core';
import {useForm} from 'react-hook-form';

const IntroductionSettingScreen = () => {
  const {control, handleSubmit} = useForm();
  const navigation = useNavigation();

  const onSendPressed = data => {
    //console.warn(data);
    navigation.navigate('Home');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>來個自我介紹吧！</Text>

        <CustomInput
          name="Introduction"
          control={control}
          placeholder="大家好! 我是個喜歡..."
          // rules={{
          //   required: 'Username is required',
          // }}
          type='introduction'
        />
        <Text></Text>

        <CustomButton 
          text="送出" 
          type="SETTING"
          onPress={handleSubmit(onSendPressed)} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 30,
    paddingTop: '13%',
    color:'#EB7943',
    fontWeight: 900,
    borderColor: '#FFC700',
    borderBottomWidth: 5.3,
    paddingHorizontal:6,
    marginBottom: '4.5%',
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
});

export default IntroductionSettingScreen;
