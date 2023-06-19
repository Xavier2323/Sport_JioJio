import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, FlatList, Button, TouchableOpacity, SafeAreaView } from 'react-native';

import ColorBar from './ColorBar';


export default class MyJoJo extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                    <Image source={require('./images/tab/back.png')}/>
                </TouchableOpacity>
                <Text style={styles.title}>我發起的揪揪</Text>
            </View>
            <ScrollView>
                <ColorBar text='待確認完成' color='#BDC438'/>
                <ColorBar text='尚未完成' color='#BDC438'/>
                <ColorBar text='已完成' color='#BDC438'/>
            </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20
    },
});