import React, {Component} from 'react';
import { StyleSheet, Text, View , ScrollView, Image, FlatList, Button, TouchableOpacity} from 'react-native';

import {placeList,PlaceItem} from '../utility/uti.js';

export default class Page2 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            place:this.props.stat.place
        }
    }

    render(){
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
                    <Text style={styles.subtitle}>請選擇運動場地</Text>
                </View>

                <View style={{height:500,marginHorizontal:30}}>
                <FlatList data={placeList}
                          renderItem={({item}) => {
                            if (item.sport==this.props.stat.sport) return (<TouchableOpacity style={this.state.place==item.title?styles.selected:styles.unselected} onPress={() => this.handlePlaceSelect(item.title)}><PlaceItem title={item.title} sport={item.sport} /></TouchableOpacity>)
                        }}
                />
                </View>
                <View style={{marginTop:30,justifyContent:'center',alignItems:'center'}}>
                    <TouchableOpacity style={styles.nextButtonStyle} onPress={this.handleNextPage.bind(this)}>
                        <Text style={styles.subtitle2}>下一步</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
    handlePlaceSelect = async (place) => {
        if (this.state.place==place) this.setState({...this.state,place:""});
        else this.setState({...this.state,place:place});
    }
    handleNextPage = async () => {
        await this.props.finishSelectPlace(this.state.place);
        this.props.navigation.navigate('page3');
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
        width:110,
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