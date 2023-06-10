import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, FlatList, Button, TouchableOpacity, SafeAreaView } from 'react-native';

import { PastJioItem, CurrentJioItem } from '../utility/utility_JioJio.js';


export default class Overview extends React.Component {

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView nestedScrollEnabled={true} style={styles.ScrollView}>
          <View style={{ flexDirection: 'column' }}>
            <View style={{ height: 50 }}></View>
            <View style={{ height: 86, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <Text style={styles.title}>揪揪</Text>
              <View style={styles.underOrangeLine}></View>
            </View>
            <View style={styles.listStyle}>
              <Text style={styles.subtitle}>正在進行的揪揪</Text>
              <View style={{ height: 150 }}>
                <FlatList nestedScrollEnabled={true}
                  data={this.props.stat.curJioList}
                  renderItem={({ item }) => { return <CurrentJioItem sport={item.sport} time={item.time} people={item.people} />; }}
                />
              </View>
              <Text style={styles.subtitle}>之前發起過的揪揪</Text>
              <View style={{ height: 300 }}>
                <FlatList nestedScrollEnabled={true}
                  data={this.props.stat.pastJioList}
                  renderItem={({ item }) => { return <PastJioItem title={item.title} sub={item.sub} />; }}
                />
              </View>
            </View>
            <View style={{ alignItems: 'center', marginTop: 35 }}>
              <TouchableOpacity style={styles.launchNew} onPress={this.handleLaunchNewJio.bind(this)}>
                <Text style={styles.launchNewText}>發起新的揪揪</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  handleLaunchNewJio() {
    this.props.navigation.navigate("page1");
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0
  },
  title: {
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 22,
    fontWeight: 500,
    marginVertical: 15
  },
  subtitle2: {
    fontSize: 20
  },
  subtitle3: {
    fontSize: 15,
    color: 'grey'
  },
  underOrangeLine: {
    height: 6,
    width: 110,
    backgroundColor: '#FFC700',
    marginTop: 5
  },
  listStyle: {
    marginHorizontal: 30
  },
  sportIcon: {
    width: 50,
    height: 50
  },
  currentJioContainer: {
    flexDirection: 'row',
    marginVertical: 15
  },
  currentJioContainer2: {
    flexDirection: 'column',
    marginLeft: 30
  },
  launchAgain: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginLeft: 'auto'
  },
  ButtonWord: {
    color: '#F5AC78'
  },
  launchNew: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EB7943',
    width: 220,
    height: 70,
    borderRadius: 50,
    elevation: 15,
  },
  launchNewText: {
    color: 'white',
    fontSize: 28,
    marginBottom: 10
  },
  ScrollView: {

  }
});