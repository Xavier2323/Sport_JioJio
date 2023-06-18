import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import StackNavigator from './Category';

const Post = ({ data, navigation }) => {
  
  console.log(data.avatar);
  return(
  <View style={styles.post}>
    <View style={styles.avatarContainer}>
      <Image
        style={styles.avatar}
        source={require('../../../assets/me2.png')}
        //source={require(data.avatar)}
      />

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
      <TouchableOpacity style={styles.button1} onPress={() => navigateToPageDetail(data)}>
        <Text>{data.detailText}</Text>
      </TouchableOpacity>

      <View style={styles.button2}>
        <Text>{data.joinText}</Text>
      </View>
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