import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, FlatList, Button, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {decode as atob, encode as btoa} from 'base-64'
import axios from 'axios';


import PersonalPage from './personal/PersonalPage';
import EditPersonalPage from './personal/EditPersonalPage';
import MyJoJo from './personal/MyJoJo';

import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default class PersonalScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            id: 1,
            image: null,
            name: 'William',
            school: '清大電資班大二',
            intro: '大家好，大家好，大家好，大家好，大家好，大家好，大家好，大家好，大家好，大家好，大家好，大家好，大家好，大家好，大家好，大家好。',
            aimg1: null,
            aimg2: null,
            aimg3: null,
            aimg4: null,
            aimg5: null,
            aimg6: null,
        }

        this.loaddata()

        
    }
    
    render() {
        // return (<Text>uuu</Text>);
        return (
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='personal'>
                <Stack.Screen name="personal">
                    {(props) => <PersonalPage {...props} {...this.state} />}
                </Stack.Screen>
                <Stack.Screen name="editpersonal">
                    {(props) => <EditPersonalPage {...props} {...this.state} OnStore={this.OnStore.bind(this)}/>}
                </Stack.Screen>
                <Stack.Screen name="myjojo">
                    {(props) => <MyJoJo {...props} {...this.state}/>}
                </Stack.Screen>
            </Stack.Navigator>
        )
    }

    loaddata = async () => {
        const url = `http://sample.eba-2nparckw.us-west-2.elasticbeanstalk.com`;

        await axios.get(`${url}/users`,{
          params:{
            userid: this.state.id
          }
        }).then(res => {
          this.setState({
            ...this.state,
            name: res.data.profile.name,
            school: res.data.profile.schoolgrade,
            intro: res.data.profile.intro
          })
        })
        .catch(err => {
          console.log(err);
        })

        var pfparr=[];

        var config_get = {
          method: 'get',
          url: 'http://test.eba-rrzupcxn.us-west-2.elasticbeanstalk.com/image?id=1',
        };
        
        await axios(config_get)
        .then((res) => {
            console.log('get');
            console.log(res.data.image);
            for(i of res.data.image){
                pfparr.push(i);
            }
        })
        .catch((error) => {
            console.log(error);
        });

        get_uri=this.strlength(pfparr);

        this.setState({
          ...this.state,
          img: get_uri
        })
    }

    OnStore=(name,image,school,intro,aimg1,aimg2,aimg3,aimg4,aimg5,aimg6)=>{
        console.log( 'image: ', image);
        this.setState({
            ...this.state,
            name: name,
            school: school,
            intro: intro,
            image: image,
            aimg1: aimg1,
            aimg2: aimg2,
            aimg3: aimg3,
            aimg4: aimg4,
            aimg5: aimg5,
            aimg6: aimg6,
        }, ()=>{
            console.log(this.state);
            this.props.navigation.navigate('personal'); 
            const url = `http://sample2.eba-mw3jxgyz.us-west-2.elasticbeanstalk.com/users/update?userid=${this.state.id}&name=${this.state.name}&schoolgrade=${this.state.school}&intro=${this.state.intro}`;
    
            axios.post(url).then(res => {
                console.log(res.data);
            })
            .catch(err => {
              console.log(err);
            })
        });
    }

    strlength = (str) => {
        var joinStr = '';
        for (var i = 0; i < str.length; i++) {
            joinStr = joinStr + str[i];
        }
        console.log(joinStr.length);
        var split = this.splitstrlength(joinStr);
        var joinbuffer = this.bufferjoin(split);
        return 'data:image/png;base64,' + joinbuffer;
    }

    splitstrlength = (str) => {
        var pos = 0;
        var len = str.length;
        // if (len % 2 != 0) {
        //     return null;
        // }
        len /= 2;
        var by_Array = new Array();
        for (var i = 0; i < len; i++) {
            var splitstr = str.substr(pos, 2);
            var by_16 = parseInt(splitstr, 16);
            by_Array.push(by_16);
            pos += 2;
        }
        return by_Array;
    }
    bufferjoin = (buffer) => {
        var binary = '';
        var bytes = new Uint8Array(buffer);
        var len = bytes.byteLength;
        for (var i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        return btoa(binary);//bota一定要加
    }
}