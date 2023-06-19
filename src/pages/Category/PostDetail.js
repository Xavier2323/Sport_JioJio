import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, Button, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PostDetail = ({ route }) => {
  const { data } = route.params;
  const navigation = useNavigation();
  const handleImagePress = (destination, data) => {
    navigation.navigate(destination, { data });
  };
  useEffect(() => {
    navigation.setOptions({
      title: '詳情',
      headerTitleStyle: {
        fontFamily: 'Arial', // Set your desired font family
        fontSize: 20, // Set your desired font size
        fontWeight: 'bold', // Set your desired font weight
      },
    });
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image style={styles.avatar} source={require('../../images/category_images/me2.png')} />
      <Text>{data.posterName}</Text>
      <Text>運動種類: {data.sportName}</Text>
      <Text>日期: {data.date}</Text>
      <Text>時間: {data.time}</Text>
      <Text>地點: {data.location}</Text>
      <Text>需求:</Text>
      <View style={styles.tagContainer}>
        <View style={styles.box}>
          <Text>我是剛打羽球的新手，希望大家把得輕鬆一點，內建兩個程度跟我差不多的人，歡迎大家來玩</Text>
        </View>
      </View>
      <Text>已報名:</Text>
      <View style={styles.avatarRow}>
        <Image style={styles.avatar} source={require('../../images/category_images/me2.png')} />
        <Image style={styles.avatar} source={require('../../images/category_images/me2.png')} />
        <Image style={styles.avatar} source={require('../../images/category_images/me2.png')} />
        <Image style={styles.avatar} source={require('../../images/category_images/me2.png')} />
        <Image style={styles.avatar} source={require('../../images/category_images/me2.png')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="報名" onPress={() => handleImagePress('JoinSuccess', data)} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  tagContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  box: {
    backgroundColor: '#FBF1D6',
    borderRadius: 5,
    padding: 10,
  },
  avatarRow: {
    flexDirection: 'row',
  },
  buttonContainer: {
    backgroundColor: '#EB7943',
    borderRadius: 25,
    marginVertical: 20,
  },
});

export default PostDetail;
