import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Controller} from 'react-hook-form';

const CustomInput = ({
  control,
  name,
  rules = {},
  placeholder,
  secureTextEntry,
  //customStyle
  type = 'init',
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <>
          <View
            style={[
              styles.container,
              {borderColor: error ? 'red' : '#dbdbdb'},     
              styles[`container_${type}`],
            ]}>
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              style={[
                styles.input,
                styles[`input_${type}`],]}
              secureTextEntry={secureTextEntry}
            />
          </View>
          {error && (
            <Text style={[styles.err,styles[`err_${type}`],]}>{error.message || 'Error'}</Text>
          )}
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ebebeb',
    width: '100%',
  },
  container_init: {
    borderWidth: 1.2,
    borderRadius: 5,

    paddingHorizontal: '2%',
    marginVertical: '2.5%',
  },
  container_nickname: {
    borderColor: 'black',
    borderWidth: 0.8,
    borderRadius: 5,
    width: '70%',
    paddingVertical: '1%',
    marginVertical: '3%',
  },
  container_introduction: {
    backgroundColor: '#FBF1D6',
    borderColor: '#f7eed2',
    elevation: 4,
    shadowColor: 'black',
    borderRadius: 5,
    width: '94%',
    paddingBottom: '52%',
    marginVertical: '3%',
    marginTop: '24%',
    marginBottom: '18%',
  },
  input: {
    padding: '3%',
  },
  input_init: {
    padding: '3%',
  },
  input_nickname: {
    textAlign: 'center',
    fontSize: 20,
  },
  input_introduction: {
    textAlign: 'left',
    fontSize: 20,
  },
  err: {
    color: 'red', alignSelf: 'stretch'
  },
  err_nickname: {
    alignSelf: 'center',
  },
  err_introduction: {
    alignSelf: 'center',
  }
});

export default CustomInput;
