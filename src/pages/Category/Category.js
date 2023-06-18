import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Constants from 'expo-constants';
import BadmintonPage from './BadmintonPage';
import BaseballPage from './BaseballPage';
import BasketballPage from './BasketballPage';
import SoccerPage from './SoccerPage';
import TennisPage from './TennisPage';
import VolleyballPage from './VolleyballPage';
import PostDetail from './PostDetail';

const Stack = createStackNavigator();

const App = ({ navigation }) => {
  const handleImagePress = (destination) => {
    // Navigate to the corresponding destination page
    navigation.navigate(destination);
  };

  // Get the screen width
  const screenWidth = Dimensions.get('window').width;

  // Calculate the image dimensions based on the screen width
  const imageWidth = (screenWidth - 32) / 2; // Adjust the margin/padding as needed
  const imageHeight = imageWidth;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>分類</Text>
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={() => handleImagePress('BadmintonPage')}>
          <Image style={[styles.image, { width: imageWidth, height: imageHeight }]} source={require('../../../assets/badminton.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleImagePress('BaseballPage')}>
          <Image style={[styles.image, { width: imageWidth, height: imageHeight }]} source={require('../../../assets/baseball.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={() => handleImagePress('BasketballPage')}>
          <Image style={[styles.image, { width: imageWidth, height: imageHeight }]} source={require('../../../assets/basketball.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleImagePress('SoccerPage')}>
          <Image style={[styles.image, { width: imageWidth, height: imageHeight }]} source={require('../../../assets/soccer.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={() => handleImagePress('TennisPage')}>
          <Image style={[styles.image, { width: imageWidth, height: imageHeight }]} source={require('../../../assets/tennis.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleImagePress('VolleyballPage')}>
          <Image style={[styles.image, { width: imageWidth, height: imageHeight }]} source={require('../../../assets/volleyball.png')} />
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
        <Stack.Screen name="BadmintonPage" component={BadmintonPage} />
        <Stack.Screen name="BaseballPage" component={BaseballPage} />
        <Stack.Screen name="BasketballPage" component={BasketballPage} />
        <Stack.Screen name="SoccerPage" component={SoccerPage} />
        <Stack.Screen name="TennisPage" component={TennisPage} />
        <Stack.Screen name="VolleyballPage" component={VolleyballPage} />
        <Stack.Screen name="PostDetail" component={PostDetail} />
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
    marginBottom: 16,
  },
  image: {
    flex: 1,
    aspectRatio: 1,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
});
