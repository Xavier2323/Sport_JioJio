import React, {Component} from 'react';
import { StyleSheet, Text, View , ScrollView, Image, FlatList, Button, TouchableOpacity, TextInput} from 'react-native';

import {Tag} from '../utility/uti.js';

export default class Verify extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const tagList = this.props.stat.tag.map((item) => {return (<Tag title={item} f={this.deleteTag.bind(this)}></Tag>)})

        return(
            <View style={{flexDirection:'column'}}>
                <View style={{height:35}}></View>

                <View style={[styles.containerRow,{marginHorizontal:30}]}>
                <TouchableOpacity style={{height:40,width:40,justifyContent:'center',alignItems:'center',borderRadius:100}} onPress={() => {this.props.reset(); this.props.navigation.navigate('overview')}}>
                    <Image source={require('../assets/back.png')} style={{height:80,width:80}}/>
                </TouchableOpacity>
                <View style={[styles.containerColumn,{marginLeft:66}]}>
                    <Text style={styles.title}>新的揪揪</Text>
                    <View style={styles.underOrangeLine}></View>
                </View>
                </View>

                <View style={{justifyContent:'center',alignItems:'center'}}>
                    <Text style={styles.subtitle}>確認揪揪資訊</Text>
                </View>

                <ScrollView style={{height:500,marginHorizontal:30}}>
                    <View style={[styles.containerColumn,{alignItems:'center'}]}>
                        <View style={styles.containerRow}>
                            <Text style={styles.subtitle1}>運動項目:</Text>
                            <Text style={[styles.subtitle1,{marginLeft:30}]}>{this.props.stat.sport}</Text>
                        </View>
                        <View style={styles.containerRow}>
                            <Text style={styles.subtitle1}>運動地點:</Text>
                            <Text style={[styles.subtitle1,{marginLeft:30}]}>{this.props.stat.place}</Text>
                        </View>
                        <View style={styles.containerRow}>
                            <Text style={styles.subtitle1}>運動日期:</Text>
                            <Text style={[styles.subtitle1,{marginLeft:30}]}>{this.props.stat.date}</Text>
                        </View>
                        <View style={styles.containerRow}>
                            <Text style={styles.subtitle1}>運動時間:</Text>
                            <Text style={[styles.subtitle1,{marginLeft:30}]}>{this.props.stat.from}~{this.props.stat.to}</Text>
                        </View>
                        <View style={styles.containerRow}>
                            <Text style={styles.subtitle1}>運動人數:</Text>
                            <Text style={[styles.subtitle1,{marginLeft:30}]}>{this.props.stat.people}</Text>
                        </View>
                        <View style={styles.containerRow}>
                            <Text style={styles.subtitle1}>Tags:</Text>
                            {tagList}
                            <TouchableOpacity><Text style={[styles.subtitle1,{marginLeft:20,color:'grey'}]}>+</Text></TouchableOpacity>
                        </View>
                        <View style={[styles.containerRow,{marginHorizontal:30}]}>
                            <Text style={styles.subtitle1}>備註:</Text>
                            <Text style={[styles.subtitle1,{marginLeft:30}]}>{this.props.stat.memo}</Text>
                        </View>
                    </View>
                </ScrollView>
                <View style={{marginTop:30,justifyContent:'center',alignItems:'center'}}>
                    <TouchableOpacity style={styles.nextButtonStyle} onPress={this.handleNextPage.bind(this)}>
                        <Text style={styles.subtitle2}>發起揪揪</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    handleNextPage = async () => {
        this.props.navigation.navigate('overview');
    }

    deleteTag = (title) => {
        const newList = this.props.stat.tag.map((item) => {if (item==title) return "";else return (item);});
        this.props.updateTag(newList);
    }   
    
}



const styles = StyleSheet.create({
    containerColumn:{
        flexDirection:'column',
        marginHorizontal:0
    },
    containerRow:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        marginVertical:30
    },
    selected:{
        borderWidth:1,
        borderColor: 'grey',
        marginHorizontal:2,
        marginVertical:0,
    },
    unselected:{
        borderWidth:0,
        marginHorizontal:2,
        marginVertical:1
    },
    nextButtonStyle:{
        height:40,
        width:150,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50,
        backgroundColor:'#EB7943',
        elevation:5
    },
    title: {
      textAlign: 'center', 
      fontSize:35, 
      fontWeight: 'bold'
    },
    subtitle:{
      fontSize:22,
      fontWeight: 500,
      marginVertical:15
    },
    subtitle1:{
        fontSize:20
    },
    subtitle2:{
      fontSize:20,
      color:'white',
      paddingBottom:5
    },
    subtitle3:{
      fontSize:15,
      color: 'grey'
    },
    underOrangeLine:{
        height:6,
        width: 110,
        backgroundColor: '#FFC700',
        marginTop: 5,
        marginLeft:15
    },
    listStyle:{
      marginHorizontal: 30
    },
    sportIcon:{
      width:50,
      height:50
    },
    scrollStyle:{
        height: 500,
        marginHorizontal:15
    }

  });