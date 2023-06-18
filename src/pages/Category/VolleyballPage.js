import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Post from './Post';

const dummyData = [
  {
    avatar: '../assets/me.jpg',
    sportName: '排球',
    location: '清大校友體育館',
    time: '10:00-12:00',
    participants: '5/8',
    detailText: '詳情',
    joinText: '報名',
  },
  {
      avatar: "../assets/icon_badminton.png",
      sportIcon: "../assets/icon_badminton.png",
      sportName: "排球",
      location: "交大室外排球場",
      time: "14:00 - 16:00",
      participants: "7/10",
      alarmIcon: "../assets/icon_badminton.png",
      detailText: "詳情",
      joinText: "報名",
  },
  {
      avatar: "../assets/icon_badminton.png",
      sportIcon: "../assets/icon_badminton.png",
      sportName: "排球",
      location: "清大校友體育館",
      time: "14:00 - 16:00",
      participants: "7/10",
      alarmIcon: "../assets/icon_badminton.png",
      detailText: "詳情",
      joinText: "報名",
  },
  {
      avatar: "../assets/icon_badminton.png",
      sportIcon: "../assets/icon_badminton.png",
      sportName: "排球",
      location: "清大校友體育館",
      time: "14:00 - 16:00",
      participants: "7/10",
      alarmIcon: "../assets/icon_badminton.png",
      detailText: "詳情",
      joinText: "報名",
  },
  {
      avatar: "../assets/icon_badminton.png",
      sportIcon: "../assets/icon_badminton.png",
      sportName: "排球",
      location: "清大校友體育館",
      time: "14:00 - 16:00",
      participants: "7/10",
      alarmIcon: "../assets/icon_badminton.png",
      detailText: "詳情",
      joinText: "報名",
  },
  {
      avatar: "../assets/icon_badminton.png",
      sportIcon: "../assets/icon_badminton.png",
      sportName: "排球",
      location: "清大校友體育館",
      time: "14:00 - 16:00",
      participants: "7/10",
      alarmIcon: "../assets/icon_badminton.png",
      detailText: "詳情",
      joinText: "報名",
  },
  {
      avatar: "../assets/icon_badminton.png",
      sportIcon: "../assets/icon_badminton.png",
      sportName: "排球",
      location: "清大校友體育館",
      time: "14:00 - 16:00",
      participants: "7/10",
      alarmIcon: "../assets/icon_badminton.png",
      detailText: "詳情",
      joinText: "報名",
  },
  {
      avatar: "../assets/icon_badminton.png",
      sportIcon: "../assets/icon_badminton.png",
      sportName: "排球",
      location: "清大校友體育館",
      time: "14:00 - 16:00",
      participants: "7/10",
      alarmIcon: "../assets/icon_badminton.png",
      detailText: "詳情",
      joinText: "報名",
  },
    
];

export default function VolleyballPage() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: '排球',
      headerTitleStyle: {
        fontFamily: 'Arial', // Set your desired font family
        fontSize: 20, // Set your desired font size
        fontWeight: 'bold', // Set your desired font weight
      },
    });
  }, );

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
