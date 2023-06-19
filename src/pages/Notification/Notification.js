import React, {useState, Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Image, FlatList, Button, TouchableOpacity, SafeAreaView, StatusBar, Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import NotifyScreen from './Notify';
import ApprovalScreen from './Approval';
import ReminderScreen from './Reminder';

const Tab = createMaterialTopTabNavigator();

export default class NotificationScreen extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            
            <NavigationContainer independent={true} style={styles.root}>
                <View style={styles.containerRow}>
                    <TouchableOpacity style={{ height: 40, width: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 100, marginHorizontal: 10 }} onPress={this.props.navigation.goBack()}>
                        <Image source={require('../../images/back.png')} style={{ height: 80, width: 80 }} />
                    </TouchableOpacity>
                </View>
                <Tab.Navigator initialRouteName="通知" screenOptions={{ 
                    headerShown: false ,
                    tabBarActiveBackgroundColor: '#F5AC78',
                    tabBarStyle: {width: '90%', height: '8%', borderRadius: 10, alignSelf: 'center', position: 'relative'}

                }}>
                    <Tab.Screen name="通知">
                    </Tab.Screen>
                    <Tab.Screen name="待審核">
                    </Tab.Screen>
                    <Tab.Screen name="活動提醒">
                    </Tab.Screen>
                </Tab.Navigator>
            </NavigationContainer>
        )
    }
}

const styles = StyleSheet.create({
    root: {
        paddingVertical: '5%',
        paddingHorizontal: '10%'
    },
    containerRow: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginVertical: '9%'
    },
    TabContainerRow: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginVertical: 0,
        borderRadius: 10
    }
})