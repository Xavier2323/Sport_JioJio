import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Post from './Post';

const dummyData = [
  {
    avatar: '../../images/category_images/me.jpg',
    sportName: '羽球',
    location: '清大校友體育館',
    time: '10:00-12:00',
    participants: '5/8',
    detailText: '詳情',
    joinText: '報名',
    date: '5/18'
  },
  {
      avatar: "../../images/category_images/icon_badminton.png",
      sportIcon: "../../images/category_images/icon_badminton.png",
      sportName: "羽球",
      location: "交大室外排球場",
      time: "14:00 - 16:00",
      participants: "7/10",
      alarmIcon: "../../images/category_images/icon_badminton.png",
      detailText: "詳情",
      joinText: "報名",
      date: '5/18'
  },
  {
      avatar: "../../images/category_images/icon_badminton.png",
      sportIcon: "../../images/category_images/icon_badminton.png",
      sportName: "羽球",
      location: "清大校友體育館",
      time: "14:00 - 16:00",
      participants: "7/10",
      alarmIcon: "../../images/category_images/icon_badminton.png",
      detailText: "詳情",
      joinText: "報名",
      date: '5/18'
  },
  {
      avatar: "../../images/category_images/icon_badminton.png",
      sportIcon: "../../images/category_images/icon_badminton.png",
      sportName: "羽球",
      location: "清大校友體育館",
      time: "14:00 - 16:00",
      participants: "7/10",
      alarmIcon: "../../images/category_images/icon_badminton.png",
      detailText: "詳情",
      joinText: "報名",
      date: '5/18'
  },
  {
      avatar: "../../images/category_images/icon_badminton.png",
      sportIcon: "../../images/category_images/icon_badminton.png",
      sportName: "羽球",
      location: "清大校友體育館",
      time: "14:00 - 16:00",
      participants: "7/10",
      alarmIcon: "../../images/category_images/icon_badminton.png",
      detailText: "詳情",
      joinText: "報名",
      date: '5/18'
  },
  {
      avatar: "../../images/category_images/icon_badminton.png",
      sportIcon: "../../images/category_images/icon_badminton.png",
      sportName: "羽球",
      location: "清大校友體育館",
      time: "14:00 - 16:00",
      participants: "7/10",
      alarmIcon: "../../images/category_images/icon_badminton.png",
      detailText: "詳情",
      joinText: "報名",
      date: '5/18'
  },
  {
      avatar: "../../images/category_images/icon_badminton.png",
      sportIcon: "../../images/category_images/icon_badminton.png",
      sportName: "羽球",
      location: "清大校友體育館",
      time: "14:00 - 16:00",
      participants: "7/10",
      alarmIcon: "../../images/category_images/icon_badminton.png",
      detailText: "詳情",
      joinText: "報名",
      date: '5/18'
  },
  {
      avatar: "../../images/category_images/icon_badminton.png",
      sportIcon: "../../images/category_images/icon_badminton.png",
      sportName: "羽球",
      location: "清大校友體育館",
      time: "14:00 - 16:00",
      participants: "7/10",
      alarmIcon: "../../images/category_images/icon_badminton.png",
      detailText: "詳情",
      joinText: "報名",
      date: '5/18'
  },
    
];

const SportPage = ({ route }) => {
  const navigation = useNavigation();
  const { data } = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: data,
      headerTitleStyle: {
        fontFamily: 'Arial',
        fontSize: 20,
        fontWeight: 'bold',
      },
    });
  }, [data, navigation]);
  

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {dummyData.map((data, index) => (
          <Post key={index} data={data} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
    width: '100%',
  },
});

export default SportPage;
