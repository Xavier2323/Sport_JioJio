import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Post = ({ data }) => {
  const navigation = useNavigation();
  const handleImagePress = (destination,data) => {
    navigation.navigate(destination,{data});
  };
  const handleJoinPress = () => {
    setIsJoined(true);
  };
  
  console.log(data.avatar);
  return(
  <View style={styles.post}>
    <View style={styles.avatarContainer}>
      <TouchableOpacity  onPress={() => handleImagePress('OtherPerson',data)}>
        <Image style={styles.avatar} source={require('../../images/category_images/me2.png')}/>
      </TouchableOpacity>

      <View style={styles.tagContainer}>
        <View style={styles.tag_main}>
          <Text style={styles.tagMain}>tag:</Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagText}>新手</Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagText}>友善</Text>
        </View>
      </View>
    </View>
      
    <View style={styles.info}>
      <Text>{data.sportName }</Text>
      <Text>{data.location}</Text>
      <Text>{data.time}</Text>
      <Text>{data.participants}</Text>
    </View>

    <View>
      <TouchableOpacity style={styles.button1} onPress={() => handleImagePress('PostDetail',data)}>
        <Text>{data.detailText}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button2} onPress={() => handleImagePress('JoinSuccess',data)}>
        <Text>{data.joinText}</Text>
      </TouchableOpacity>
    </View>
  </View>
);}

const styles = StyleSheet.create({
  post: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#FBF1D6',
    borderRadius: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    
  },
  info: {
    flex: 1,
    marginHorizontal: 10,
  },
  tagContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  tag: {
    backgroundColor: 'gray',
    borderRadius: 5,
    margin: 2,
    paddingHorizontal: 5,
    paddingVertical: 1,
  },
  tagText: {
    color: 'white',
  },
  button1: {
    backgroundColor: '#989898',
    borderRadius: 5,
    margin: 2,
    paddingHorizontal: 5,
    paddingVertical: 1,
    alignItems: 'flex-end'
  },
  button2: {
    backgroundColor: '#EB7943',
    borderRadius: 5,
    margin: 2,
    paddingHorizontal: 5,
    paddingVertical: 1,
    alignItems: 'flex-end'
  },
});

export default Post;