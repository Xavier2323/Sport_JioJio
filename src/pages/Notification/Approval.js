import React, {useState, Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, FlatList, Button, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { ApprovalItems} from '../utility/utility_Notification';
import axios from 'axios';

const ApprovalScreen = () => {
    const url = `http://sample.eba-2nparckw.us-west-2.elasticbeanstalk.coms`;
    const [ApprovalList, setList] = useState([]);
    axios.get(`${url}/applys`,{
        params:{
          posterid: 2,
          process: 0
        }
    }).then(res => {
        setList(res.data.apply)
    }).catch(err => {
        console.log(err);
    })
    console.log(ApprovalList);

    return (
        <View style={styles.root}>
            <SafeAreaView style={styles.container}>
            <View style={{ height: 450, backgroundColor: '#FFF2E2' }}>
                <FlatList
                    nestedScrollEnabled={true}
                    data={ApprovalList}
                    renderItem={({ item }) => { return <ApprovalItems {...item} />; }}
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