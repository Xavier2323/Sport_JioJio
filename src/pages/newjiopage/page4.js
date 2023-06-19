import React, {useState, Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, FlatList, Button, TouchableOpacity, TextInput } from 'react-native';

import { peopleData, PeopleItem, Progresss } from '../utility/utility_JioJio.js';

export default class Page4 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const progress = this.props.stat.editing == 0 ? (
            <View style={{flex:50,justifyContent:'center'}}>
                    <Progresss now={4}
                               pressnumber={this.handlePressNumber.bind(this)}/>
                </View>
        ) : (
            <View style={{flex:50,justifyContent:'center'}}></View>
        );
        return (
            <View style={styles.container}>
                <View style={{flex:40, flexDirection:'row', alignItems:'center',justifyContent:'space-between'}}>
                    <TouchableOpacity style={{ height: 40, width: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 100}} onPress={() => { if (this.props.stat.editing == 1) this.props.navigation.navigate('postedit'); else {this.props.reset(); this.props.navigation.navigate('overview');} }}>
                        <Image source={require('../../images/back.png')} style={{ height: 80, width: 80 }} /> 
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginHorizontal:10}}>
                        <Text style={styles.title}>新的揪揪</Text>
                        <View style={styles.underOrangeLine}></View>
                    </View>
                    <View style={{height:40,width:40}}></View>
                </View>

                {progress}

                <View style={{flex:50, justifyContent:'center', alignItems:'center'}}>
                    <Text style={styles.subtitle}>請{this.props.stat.editing==1?"編輯":"選擇"}運動人數</Text>
                </View>

                <View style={{flex:400, justifyContent:'center', alignItems:'center'}}>
                    <View style={styles.containerColumn}>
                        <TextInput onChangeText={(newText) => {this.props.finishSelectPeople(newText)}}
                                   value={this.props.stat.people}
                                   keyboardType="numeric" 
                                   textAlign='center'
                                   style={{borderColor:'black',borderWidth:1,width:150,fontSize:30}}/>
                        <View style={[styles.containerRow,{justifyContent:'center', alignItems:'center'}]}>
                            <TouchableOpacity onPress={() => {const newNum = parseInt(this.props.stat.people) <= 1 ? 1 : parseInt(this.props.stat.people)-1; this.props.finishSelectPeople(newNum.toString());}}>
                                <View style={{width:50,height:50,margin:10,justifyContent:'center',alignItems:'center'}}>
                                    <Image style={{height:50,width:50}} source={require('../../images/minus.png')}/>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {const newNum = parseInt(this.props.stat.people) + 1; this.props.finishSelectPeople(newNum.toString());}}>
                                <View style={{width:50,height:50,margin:10,justifyContent:'center',alignItems:'center'}}>
                                    <Image style={{height:50,width:50}} source={require('../../images/plus.png')}/>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={{flex:50,justifyContent:'center',alignItems:'center'}}>
                    <TouchableOpacity style={styles.nextButtonStyle} onPress={this.handleNextPage.bind(this)}>
                        <Text style={styles.subtitle2}>{(this.props.stat.tagpageBack == 0 && this.props.stat.editing == 0) ? "下一步" : "確認"}</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flex:5}}></View>
            </View>
        );
    }

    handlePressNumber =  (now,page) => {
        if (parseInt(this.props.stat.people) <= 0) this.props.finishSelectPeople("1");
        if (page <= now) this.props.navigation.navigate(`page${page}`);
    }

    handleNextPage = async () => {
        if (this.props.stat.tagpageBack == 0 && this.props.stat.editing == 0) this.props.navigation.navigate("page5");
        else if (this.props.stat.editing == 1) this.props.navigation.navigate('postedit');
        else {this.props.setTagpageBack(0); this.props.navigation.navigate('verify');}
    }

}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        flexDirection: 'column',
        marginHorizontal:30
      },
    containerColumn: {
        flexDirection: 'column',
        justifyContent:'center'
    },
    containerRow: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginVertical: 30
    },
    selected: {
        borderWidth: 1,
        borderColor: 'grey',
        marginHorizontal: 2,
        marginVertical: 0,
    },
    unselected: {
        borderWidth: 0,
        marginHorizontal: 2,
        marginVertical: 1
    },
    nextButtonStyle: {
        height: 40,
        width: 110,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: '#EB7943',
        elevation: 5
    },
    title: {
        textAlign: 'center',
        fontSize: 35,
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 22,
        fontWeight: 500,
        marginVertical: 15
    },
    subtitle2: {
        fontSize: 20,
        color: 'white',
        paddingBottom: 5
    },
    subtitle3: {
        fontSize: 15,
        color: 'grey'
    },
    underOrangeLine: {
        height: 6,
        width: 110,
        backgroundColor: '#FFC700',
        marginTop: 5,
        marginLeft: 15
    },
    listStyle: {
        marginHorizontal: 30
    },
    sportIcon: {
        width: 50,
        height: 50
    },
    scrollStyle: {
        height: 500,
        marginHorizontal: 15
    }

});