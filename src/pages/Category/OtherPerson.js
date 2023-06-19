import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';

import MainTab from '../Personal/personal/MainTab';
import ActivityImage from '../Personal/personal/ActivityImage';

const OtherPerson = ({ navigation, name, image, school, intro, ...props }) => {
  const pfp = () => {
    if (image == null) return require('../Personal/personal/images/default_pfp.png');
    else return { uri: image };
  };

  const atp = (num) => {
    const imgname = 'aimg' + String(num);
    if (props[imgname]) return { uri: props[imgname] };
    else return require('../Personal/personal/images/default-image.jpg');
  };

  const gotoEdit = () => {
    console.log(image);
    navigation.navigate('editpersonal');
  };

  const logout = () => {
    navigation.navigate('InitialScreen');
  };

  return (
    <View style={styles.container}>
      <ScrollView
        onScroll={(e) => {
          const y = e.nativeEvent.contentOffset.y;
        }}
        style={{ flex: 1 }} // or set height directly
      >
        <View style={styles.mug}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require('../Personal/personal/images/tab/back.png')} />
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', flex: 1 }}>
            <Image style={{ borderRadius: 100, height: 60, width: 60 }} source={pfp()} />
            <Text style={{ marginLeft: 10, alignSelf: 'center', fontWeight: '500', color: 'black' }}>{name}</Text>
          </View>
          <TouchableOpacity onPress={gotoEdit}>
            <Image style={{ marginRight: 5 }} source={require('../Personal/personal/images/tab/edit.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={logout}>
            <Image style={{ marginRight: 5 }} source={require('../Personal/personal/images/tab/logout.png')} />
          </TouchableOpacity>
          <View style={{}}></View>
        </View>

        

        <MainTab title="活動照片" color="#EB7943" />
        <View style={styles.activity_pictures}>
          <Image style={styles.image} source={atp(1)} />
          <Image style={styles.image} source={atp(2)} />
          <Image style={styles.image} source={atp(3)} />
        </View>
        <View style={styles.activity_pictures}>
          <Image style={styles.image} source={atp(4)} />
          <Image style={styles.image} source={atp(5)} />
          <Image style={styles.image} source={atp(6)} />
        </View>

        <MainTab title="年級校系" color="#EB7943" />
        <View>
          <View style={styles.content_box}>
            <Text style={styles.content_text}>{school}</Text>
          </View>
        </View>

        <MainTab title="自我介紹" color="#EB7943" />
        <View>
          <View style={styles.intro_box}>
            <Text style={styles.content_text}>{intro}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  mug: {
    flexDirection: 'row',
    height: 100,
    alignItems: 'center',
  },
  my_jojo: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#EB7943',
    borderRadius: 10,
    marginBottom: 10,
  },
  activity_pictures: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  picture_box: {
    flex: 1,
    margin: 5,
    alignItems: 'center',
  },
  image: {
    width: 108,
    height: 192,
    borderRadius: 9,
  },
  intro: {
    flex: 4,
    backgroundColor: 'red',
  },
  intro_box: {
    height: 250,
    padding: 5,
    backgroundColor: '#FBF1D6',
    borderRadius: 10,
    marginBottom: 10,
  },
  label_box: {
    alignSelf: 'flex-start',
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#EB7943',
    borderRadius: 10,
    marginBottom: 10,
  },
  label_text: {
    fontSize: 12,
    color: 'white',
    fontWeight: 'bold',
  },
  content_box: {
    alignSelf: 'flex-start',
    padding: 5,
    backgroundColor: '#FBF1D6',
    borderRadius: 10,
    marginBottom: 10,
  },
  content_text: {
    fontSize: 12,
    borderRadius: 5,
    color: 'black',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
});

export default OtherPerson;
