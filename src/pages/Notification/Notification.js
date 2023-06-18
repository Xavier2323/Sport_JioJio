import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, Image, FlatList, Button, TouchableOpacity, SafeAreaView, StatusBar, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import NotifyScreen from './Notify';
import ApprovalScreen from './Approval';
import ReminderScreen from './Reminder';

const Tab = createMaterialTopTabNavigator();

const NotificationScreen = () => {
    const navigation = useNavigation();
    console.log('Outside');
    const goBacktoDiscover = () => {
        navigation.navigate('發現');
    }
    return (
        <View style={styles.root}>
            <View style={styles.containerRow}>
                <TouchableOpacity style={{ height: 40, width: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 100 }} onPress={goBacktoDiscover}>
                    <Image source={require('../../images/back.png')} style={{ height: 80, width: 80 }} />
                </TouchableOpacity>
            </View>
            <View style={[styles.TabContainerRow, { marginHorizontal: 20 }]}>                
                <Tab.Navigator screenOptions={{ headerShown: false }} initialRouteName="待審核">
                    <Tab.Screen name="通知" component={NotifyScreen}/>
                    <Tab.Screen name="待審核" component={ApprovalScreen}/>
                    <Tab.Screen name="活動提醒" component={ReminderScreen}/>
                </Tab.Navigator>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        paddingVertical: 20,
        paddingHorizontal: 15
    },
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
    }
})

export default NotificationScreen;