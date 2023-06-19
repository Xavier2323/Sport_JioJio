import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, Image, FlatList, Button, TouchableOpacity, SafeAreaView, StatusBar, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Map  from './map.js';
import Post from './post.js';
import axios from 'axios';



export default class MainScreen extends React.Component{
    constructor(props){
        super(props)
        this.state={
            postList:[]
        }
        this.updatePosts();
    }

    render(){
        const post = this.state.postList.map((item) => {return (<Post props={item} f={this.setPostState.bind(this)} navigate={() => {this.props.navigation.navigate('postdetail')}}/>)})
        return(



  
            <View style={styles.root2}>
                

                    {/* <ImageBackground 
                        source={require('../../images/Top_app_bar.png')} 
                        style={styles.ContainerTop}
                        resizeMode="cover"
                    >
                        <View style={styles.topBar}>
                            <TouchableOpacity style={styles.Notification} onPress={()=>{this.props.navigation.navigate('Notification')}}>
                                <Image source={require('../../images/bell.png')}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.Notification} onPress={()=>{this.props.navigation.navigate('Personal')}}>
                                <Image source={require('../../images/Person.png')}/>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground> */}

            
     
    

            
            

            <ScrollView >
            <View style={styles.root}>
                <StatusBar barStyle="light-content" />

                    {/* <ImageBackground 
                        source={require('../../images/Top_app_bar.png')} 
                        style={styles.ContainerTop}
                        resizeMode="cover"
                    >
                        <View style={styles.topBar}>
                            <TouchableOpacity style={styles.Notification} onPress={()=>{this.props.navigation.navigate('Notification')}}>
                                <Image source={require('../../images/bell.png')}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.Notification} onPress={()=>{this.props.navigation.navigate('Personal')}}>
                                <Image source={require('../../images/Person.png')}/>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground> */}

                <ScrollView style={styles.scrollview}>

                    <Map navigate={() => {this.props.navigation.navigate('mappost')}} 
                    navigate_No={() => {this.props.navigation.navigate('Notification')}} 
                    navigate_Per={() => {this.props.navigation.navigate('Notification')} }/>

                    <View style={styles.shortLine} /> 

                    <View style={styles.iconRow}>
                        <Image source={require('../../images/Vector.png')} style={styles.bellIcon} />
                        <Text style={styles.iconText}>即時揪揪:</Text>
                    </View>
                
                    <Text style={styles.scrolltext}>周圍正在揪揪的夥伴</Text>
                    <View style={styles.line} />
                    
                    {post}
                    
                </ScrollView>
            </View>
        </ScrollView>


        </View>
        )
    }

    updatePosts = async() => {
        const url = `http://sample.eba-2nparckw.us-west-2.elasticbeanstalk.com/posts`;

        await axios.get(url,{
            params:{
                finish:0,
                order:'starttimeasc'
            }
        }).then(res => {
            console.log(res.data);
            this.setState({postList:res.data.post});
        }).catch(err => {console.log(err)});


    }

    setPostState = async (props) => {
        await this.props.setPostState(props);
        console.log(this.props.statee);
    }

    dummyData = [
        {
          avatar: '../assets/me.jpg',
          sport: '羽球',
          place: '清大校友體育館',
          starttime: "2023-6-10 15:00",
          endtime: "2023-6-10 18:00",
          participant: [1,2,3],
          people: 5,
          tag: ["新手"],
          memo: "都可以來喔"
        }
          
      ];
}

const styles = StyleSheet.create({
    root: {
        //alignItem: 'center',
        padding:0,
        //height:'100%',
    },
    ContainerTop: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width:'100%',
      marginTop: '5%',
    },
    topBar: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 10, 
  },
    banner: {
        fontSize: RFPercentage(3),
    },
    safeArea: {
        flex: 1,
        backgroundColor: 'white',
      },
      navbar: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey',
      },
      navbarText: {
        color: 'white',
        fontSize: 20,
      },
      scrollview: {
        flex: 1,
      },
      scrolltext: {
        color: 'black',
        marginTop: 10,
        marginLeft: '5%',
        fontSize: 22,
      },
      line: {
        borderBottomColor: 'gold',
        borderBottomWidth: 2,
        width: '40%', 
        alignSelf: 'fixed-start',
        marginVertical: 10,
        marginLeft: '5%',
      },
      iconRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '3%',
        marginLeft: '5%',
      },
      iconText: {
        //marginTop: 15,
        fontSize: 17,
      },
      shortLine: {
        borderBottomColor: 'gold',
        borderBottomWidth: 2,
        width: '30%', 
        alignSelf: 'center',
        marginTop: '3%',
        
        // position: 'absolute',
        // top: 310,
        
      },
      bellIcon: {
        height: 20, 
        width: 20, 
        //marginRight: 5, 
    },
});
