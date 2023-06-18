import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import {Auth} from  'aws-amplify';

const SignInScreen = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSignInPressed = async data => {
    if (loading) {
      return;
    }

    setLoading(true);
    try {
      const response = await Auth.signIn(data.username, data.password);
      console.log(response);
    } catch (e) {
      Alert.alert('Oops', e.message);
    }
    setLoading(false);
    navigation.navigate('Home');
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate('ForgotPassword');
  };

  const onSignUpPress = () => {
    navigation.navigate('SignUp');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>

        <Text style={styles.title}>
          登入
        </Text>

        <CustomInput
          name="username"
          placeholder="帳號"
          control={control}
          rules={{required: '請輸入帳號'}}
        />

        <CustomInput
          name="password"
          placeholder="密碼"
          secureTextEntry
          control={control}
          rules={{
            required: '請輸入密碼',
            minLength: {
              value: 3,
              message: '密碼長度應大於 8',
            },
          }}
        />

        <CustomButton 
          text={loading ? "載入中.." : "登  入" }
          onPress={handleSubmit(onSignInPressed)}
          type="SIGNIN" 
        />

        <CustomButton
          text="忘記密碼?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />

        <Text style={styles.text}>
          新用戶 ? {' '}
          <Text style={styles.link} onPress={onSignUpPress}>
            立即註冊 !
          </Text>
        </Text>

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
    fontSize: 15,
    fontWeight: 'bold',
    color: '#5f5f5f'
  },
  link: {
    fontWeight: 'bold',
    color:'#EB7943',
  }
});

export default SignInScreen;
