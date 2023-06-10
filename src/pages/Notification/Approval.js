import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, FlatList, Button, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { NativeBaseProvider, Box, Root } from "native-base";
import { NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import NotifyScreen from './Notify';
import ReminderScreen from './Reminder';

const Tab = createMaterialTopTabNavigator();

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
];

const Item = ({title}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
);

export default class ApprovalScreen extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <NativeBaseProvider>
                <View style={{ flexDirection: 'column' }}>
                    <View style={{ height: 35 }}></View>

                    <View style={[styles.containerRow, { marginHorizontal: 30 }]}>
                        <TouchableOpacity style={{ height: 40, width: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 100 }}>
                            <Image source={require('../../images/back.png')} style={{ height: 80, width: 80 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.TabContainerRow, { marginHorizontal: 20 }]}>
                        <NavigationContainer independent={true} style={[styles.containerRow, { marginHorizontal: 30 }]}>
                            <Tab.Navigator screenOptions={{ headerShown: false }}>
                                <Tab.Screen name="通知">
                                    {(props) => <NotifyScreen{...props} stat={this.state} />}
                                </Tab.Screen>
                                <Tab.Screen name="待審核">
                                    {(props) => <ApprovalScreen{...props} stat={this.state} />}
                                </Tab.Screen>
                                <Tab.Screen name="活動提醒">
                                    {(props) => <ReminderScreen{...props} stat={this.state} />}
                                </Tab.Screen>
                            </Tab.Navigator>
                        </NavigationContainer>
                    </View>
                </View>
                <SafeAreaView style={styles.container}>
                    <FlatList
                        data={DATA}
                        renderItem={({item}) => <Item title={item.title} />}
                        keyExtractor={item => item.id}
                        nestedScrollEnabled={true}
                    />
                </SafeAreaView>
            </NativeBaseProvider>
            
        )
    }
    
}

const styles = StyleSheet.create({
    containerRow: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginVertical: 30
    },
    TabContainerRow: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginVertical: 0,
        borderRadius: 10
    },
    container: {
        flex: 1,
        marginTop: 0
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 0,
        marginHorizontal: 5,
        borderRadius: 10,
        borderWidth: 0.5
    },
    title: {
        fontSize: 32
    }
})