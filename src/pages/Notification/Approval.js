import React, {useState, Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, FlatList, Button, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { NotificationList, ApprovalItems} from '../utility/utility_Notification';
import axios from 'axios';
const ApprovalScreen = () => {
    const url = `http://sample2.eba-mw3jxgyz.us-west-2.elasticbeanstalk.com`;

    axios.get(`${url}/posts`,{
        params:{
          participant: 1,
          finish: 0,
          order:'starttimeasc'
        }
    }).then(res => {
        this.setState({
          ...this.state,
          curJioList: res.data.post
        })
    }).catch(err => {
        console.log(err);
    })

    return (
        <View style={styles.root}>
            <SafeAreaView style={styles.container}>
            <View style={{ height: 450, backgroundColor: '#FFF2E2' }}>
                <FlatList
                    nestedScrollEnabled={true}
                    data={NotificationList}
                    renderItem={({ item }) => { return <ApprovalItems sport={item.sport} who={item.who} />; }}
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

export default ApprovalScreen;