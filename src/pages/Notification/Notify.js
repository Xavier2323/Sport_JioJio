import React, {useState, Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, FlatList, Button, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { NotificationItems } from '../utility/utility_Notification';
import axios from 'axios';

const NotifyScreen = () => {
    const url = `http://sample.eba-2nparckw.us-west-2.elasticbeanstalk.com`;
    const [NotifyList, setList] = useState([]);

    axios.get(`${url}/applys`,{
        params:{
            applicant: 1,
            process: 1
        }
    }).then(res => {
        setList(
          res.data.apply
        )
    }).catch(err => {
        console.log(err);
    })
    //console.log(NotifyList);
    return (
        <View style={styles.root}>
            <SafeAreaView style={styles.container}>
            <View style={{ height: 450, backgroundColor: '#FFF2E2' }}>
                <FlatList
                    nestedScrollEnabled={true}
                    data={NotifyList}
                    renderItem={({ item }) => { return <NotificationItems {...item} /> ;}}
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
    }
})

export default NotifyScreen;