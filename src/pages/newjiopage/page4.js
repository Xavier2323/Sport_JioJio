import React, {useState, Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, FlatList, Button, TouchableOpacity, SafeAreaView } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';


import { Progresss } from '../utility/utility_JioJio';

export default class Page4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibilityFrom: false,
            visibilityTo: false
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{flex:40, flexDirection:'row', alignItems:'center',justifyContent:'space-between'}}>
                    <TouchableOpacity style={{ height: 40, width: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 100}} onPress={() => { this.props.reset(); this.props.navigation.navigate('overview') }}>
                        <Image source={require('../../images/back.png')} style={{ height: 80, width: 80 }} /> 
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginHorizontal:10}}>
                        <Text style={styles.title}>新的揪揪</Text>
                        <View style={styles.underOrangeLine}></View>
                    </View>
                    <View style={{height:40,width:40}}></View>
                </View>

                <View style={{flex:50,justifyContent:'center'}}>
                    <Progresss now={4} 
                               pressnumber={this.handlePressNumber.bind(this)} />
                </View>

                <View style={{flex:50, justifyContent:'center', alignItems:'center'}}>
                    <Text style={styles.subtitle}>請選擇運動時段</Text>
                </View>

                <View style={{flex:400, justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                    <Text style={{fontSize:30}}>開始時間</Text>
                    <TouchableOpacity onPress={() => {this.setState({visibilityFrom:true})}}>
                        <Text style={{fontSize:30,marginVertical:20,color:'#007EE5'}}>{this.props.stat.from ? this.props.stat.from.toLocaleTimeString() : "No time selected"}</Text>
                    </TouchableOpacity>
                    <DateTimePickerModal isVisible={this.state.visibilityFrom}
                                                mode='time'
                                                date={this.props.stat.from}
                                                onConfirm={(from) => {this.setState({visibilityFrom:false}); this.props.finishSelectTime(from,this.props.stat.to)}}
                                                onCancel={() => {this.setState({visibilityFrom:false})}}
                                                />
                    <Text style={{fontSize:30,marginTop:40}}>結束時間</Text>
                    <TouchableOpacity onPress={() => {this.setState({visibilityTo:true})}}>
                        <Text style={{fontSize:30,marginVertical:20,color:'#007EE5'}}>{this.props.stat.to ? this.props.stat.to.toLocaleTimeString() : "No time selected"}</Text>
                    </TouchableOpacity>
                    <DateTimePickerModal isVisible={this.state.visibilityTo}
                                                mode='time'
                                                date={this.props.stat.to}
                                                onConfirm={(to) => {this.setState({visibilityTo:false}); this.props.finishSelectTime(this.props.stat.from,to)}}
                                                onCancel={() => {this.setState({visibilityTo:false})}}
                                                />
                </View>

                <View style={{flex:50,justifyContent:'center',alignItems:'center'}}>
                    <TouchableOpacity style={styles.nextButtonStyle} onPress={this.handleNextPage.bind(this)}>
                        <Text style={styles.subtitle2}>下一步</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flex:5}}></View>
            </View>
        );
    }

    handlePressNumber =  (now,page) => {
        if (page <= now) this.props.navigation.navigate(`page${page}`);
    }
    handleNextPage = async () => {
        this.props.navigation.navigate('page5');
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
        marginHorizontal: 0
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