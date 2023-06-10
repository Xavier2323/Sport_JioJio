import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, FlatList, Button, TouchableOpacity, SafeAreaView, StatusBar, Alert} from 'react-native';
import { NativeBaseProvider, Box, Root } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import NotifyScreen from './Notification/Notify';
import ApprovalScreen from './Notification/Approval';
import ReminderScreen from './Notification/Reminder';

const Tab = createMaterialTopTabNavigator();

export const NotificationList = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        sport: "羽球",
        Approved: "同意",
        who: "Brandon",
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        sport: "籃球",
        Approved: "婉拒",
        who: "Peter",
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        sport: "羽球",
        Approved: "同意",
        who: "Joyce",
    }
];

export const NotificationItems = ({ sport, who, Approved }) => {
    if (who == "Brandon") return (
        <View style={styles.NotificationContainer}>
            <Image style={styles.sportIcon} source={require("../images/badminton.png")} alignSelf='center'></Image>
            <View style={styles.informationContainer} alignSelf='center'>
                <Text style={styles.UpperPart}>{who}{Approved}你的加入</Text>
                <View style={styles.LowerPart}>
                    <Text style={{flex: 1}}>
                        {sport}
                    </Text>
                    <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', borderRadius: 100 }}>
                            <Image source={require('../images/DetailsButton.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
            <Image style={styles.Avatar} source={require("../images/Brandon.png")}></Image>
        </View>
    );
    else if (who == "Peter") return (
        <View style={styles.NotificationContainer}>
            <Image style={styles.sportIcon} source={require("../images/basketball.png")} alignSelf='center'></Image>
            <View style={styles.informationContainer} alignSelf='center'>
                <Text style={styles.UpperPart}>{who}{Approved}你的加入</Text>
                <View style={styles.LowerPart}>
                    <Text style={{flex: 1}}>
                        {sport}
                    </Text>
                    <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', borderRadius: 100 }}>
                            <Image source={require('../images/DetailsButton.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
            <Image style={styles.Avatar} source={require("../images/Peter.png")}></Image>
        </View>
    );
    else if (who == "Joyce") return (
        <View style={styles.NotificationContainer}>
            <Image style={styles.sportIcon} source={require("../images/badminton.png")} alignSelf='center'></Image>
            <View style={styles.informationContainer} alignSelf='center'>
                <Text style={styles.UpperPart}>{who}{Approved}你的加入</Text>
                <View style={styles.LowerPart}>
                    <Text style={{flex: 1}}>
                        {sport}
                    </Text>
                    <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', borderRadius: 100 }}>
                            <Image source={require('../images/DetailsButton.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
            <Image style={styles.Avatar} source={require("../images/Joyce.png")}></Image>
        </View>
    );
    else return (<View></View>);
}


export default class NotificationScreen extends React.Component {
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
                            <Image source={require('../images/back.png')} style={{ height: 80, width: 80 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.TabContainerRow, { marginHorizontal: 20 }]}>
                        <NavigationContainer independent={true} style={[styles.containerRow, { marginHorizontal: 30 }]}>
                            <Tab.Navigator screenOptions={{ headerShown: false }} initialRouteName="通知">
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
                    <View style={{ height: 450, backgroundColor: '#FFF2E2' }}>
                        <FlatList
                            nestedScrollEnabled={true}
                            data={NotificationList}
                            renderItem={({ item }) => { return <NotificationItems sport={item.sport} Approved={item.Approved} who={item.who} />; }}
                        />
                    </View>
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
    UpperPart: {
        fontSize: 15,
    },
    LowerPart: {
        flexDirection: 'row',
        fontSize: 13,
        color: 'grey'
    },
    sportIcon: {
        width: 50,
        height: 50,
        marginLeft: 5,
        flex: 1
    },
    NotificationContainer: {
        alignSelf: 'center',
        width: 360,
        flex: 3,
        flexDirection: 'row',
        paddingVertical: 0,
        borderColor: '#CAC4D0',
        borderWidth: 0.8,
        borderRadius: 10,
    },
    informationContainer: {
        flexDirection: 'column',
        marginLeft: 5,
        flex: 4
    },
    Avatar: {
        alignSelf: 'flex-end'
    }
})