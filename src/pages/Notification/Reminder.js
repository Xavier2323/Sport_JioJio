import React, {useState, Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, FlatList, Button, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { NotificationList, ReminderItems} from '../utility/utility_Notification';
const ReminderScreen = () => {
    return (
        <View style={styles.root}>
            <SafeAreaView style={styles.container}>
            <View style={{ height: 450, backgroundColor: '#FFF2E2' }}>
                <FlatList
                    nestedScrollEnabled={true}
                    data={NotificationList}
                    renderItem={({ item }) => { return <ReminderItems sport={item.sport} time={item.time} who={item.who} />; }}
                    />
            </View>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 0
    },
})

export default ReminderScreen;