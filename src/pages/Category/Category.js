import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Constants from 'expo-constants';
import SportPage from './SportPage';
import PostDetail from './PostDetail';
import JoinSuccess from './JoinSuccess';

const Stack = createStackNavigator();

const App = () => {
  const navigation = useNavigation();
  const handleImagePress = (destination,data) => {
    navigation.navigate(destination,{data});
  };

  // Get the screen width
  const screenWidth = Dimensions.get('window').width;

  // Calculate the image dimensions based on the screen width
  const imageWidth = (screenWidth - 28) / 2; // Adjust the margin/padding as needed
  const imageHeight = imageWidth;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>分類</Text>
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={() => handleImagePress('SportPage','羽球')}>
          <Image style={[styles.image, { width: imageWidth, height: imageHeight }]} source={require('../../images/category_images/badminton.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleImagePress('SportPage','棒球')}>
          <Image style={[styles.image, { width: imageWidth, height: imageHeight }]} source={require('../../images/category_images/baseball.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={() => handleImagePress('SportPage','籃球')}>
          <Image style={[styles.image, { width: imageWidth, height: imageHeight }]} source={require('../../images/category_images/basketball.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleImagePress('SportPage','足球')}>
          <Image style={[styles.image, { width: imageWidth, height: imageHeight }]} source={require('../../images/category_images/soccer.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={() => handleImagePress('SportPage','網球')}>
          <Image style={[styles.image, { width: imageWidth, height: imageHeight }]} source={require('../../images/category_images/tennis.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleImagePress('SportPage','排球')}>
          <Image style={[styles.image, { width: imageWidth, height: imageHeight }]} source={require('../../images/category_images/volleyball.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={App} options={{ headerShown: false }} />
        <Stack.Screen name="SportPage" component={SportPage} />
        <Stack.Screen name="PostDetail" component={PostDetail} />
        <Stack.Screen name="JoinSuccess" component={JoinSuccess} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#FFFFFF',
    padding: 8,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 12,
  },
  image: {
    // resizeMode: 'contain',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
});
