import React from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity,ScrollView } from 'react-native';

export default class PostDetail extends React.Component{
    constructor(props){
        super(props);
    }


    
    render(){

        const data = this.props.statee;

        return (
            <View style={styles.container}>
                <View style={{flex:40, flexDirection:'row', alignItems:'center',justifyContent:'space-between'}}>
                    <TouchableOpacity style={{ height: 40, width: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 100}} onPress={()=>{this.props.navigation.navigate('main')}}>
                        <Image source={require('../../images/back.png')} style={{ height: 80, width: 80 } } /> 
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginHorizontal:10}}>
                    </View>
                    <View style={{height:40,width:40}}></View>
                </View>

                <View style={{flex:450,marginTop:0}}>
                    <ScrollView>
                        <View style={styles.container}>
                            <View style={{flexDirection:'row'}}></View>
                        <Image style={styles.avatar} source={require('../../images/me2.png')} />
                        <Text>{data.posterName}</Text>
                        <Text style={{fontSize:20}}>運動種類: {data.sport}</Text>
                        <Text style={{fontSize:20, marginTop:10}}>日期: {data.starttime}</Text>
                        <Text style={{fontSize:20, marginTop:10}}>時間:{data.starttime} ~ {data.endtime}</Text>
                        {/* <Text>時間: {data.time}</Text> */}
                        <Text style={{fontSize:20, marginTop:10}}>地點: {data.place}</Text>
                        <Text style={{fontSize:20, marginTop:10}}>備註:</Text>
                        <View style={styles.tagContainer}>
                            <View style={styles.box}>
                            <Text>{data.memo}</Text>
                            </View>
                        </View>
                        <Text style={{fontSize:20}}>已報名: {data.people}</Text>
                        <View style={styles.avatarRow}>
                        
                            <Image style={styles.avatar2} source={require('../../images/me2.png')} />
                            <Image style={styles.avatar2} source={require('../../images/me2.png')} />
                            <Image style={styles.avatar2} source={require('../../images/me2.png')} />
                            <Image style={styles.avatar2} source={require('../../images/me2.png')} />
                            <Image style={styles.avatar2} source={require('../../images/me2.png')} />
                        </View >
                                    {/* <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:10}}>
                                    <TouchableOpacity style={styles.button1} >
                                        <Text style={{fontSize:25}}>取消報名</Text>
                                    </TouchableOpacity>
                                    <View style={{height:10}}></View>
                                    <TouchableOpacity style={styles.button2} onPress={()=>{this.props.navigation.navigate('success')}}>
                                        <Text style={{fontSize:25}}>已參加</Text>
                                    </TouchableOpacity>

                                </View> */}

                                    <TouchableOpacity 
                                            style={styles.Button} 
                                            onPress={()=>{this.props.navigation.navigate('success')}}
                                        >
                                            <Text style={styles.ButtonText}>報名</Text>
                                        </TouchableOpacity>
                                    </View>

                    </ScrollView>
                </View>

                <View style={{flex:50}}>

                </View>


                <View style={{flex:5}}></View>
            </View>

        );
      
    }

}



// const PostDetail = ({ route }) => {
//   const { data } = route.params;

//   return (
//     <View style={styles.container}>
//       <Image style={styles.avatar} source={require('../assets/me2.png')} />
//       <Text>{data.posterName}</Text>
//       <Text>運動種類: {data.sportName}</Text>
//       <Text>日期: {data.date}</Text>
//       <Text>時間: {data.time}</Text>
//       <Text>地點: {data.location}</Text>
//       <Text>需求:</Text>
//       <View style={styles.tagContainer}>
//         <View style={styles.box}>
//           <Text>我是剛打羽球的新手，希望大家把得輕鬆一點，內建兩個程度跟我差不多的人，歡迎大家來玩</Text>
//         </View>
//       </View>
//       <Text>已報名:</Text>
//       <View style={styles.avatarRow}>
      
//         <Image style={styles.avatar} source={require('../assets/me2.png')} />
//         <Image style={styles.avatar} source={require('../assets/me2.png')} />
//         <Image style={styles.avatar} source={require('../assets/me2.png')} />
//         <Image style={styles.avatar} source={require('../assets/me2.png')} />
//         <Image style={styles.avatar} source={require('../assets/me2.png')} />
//       </View>
//       <View style={styles.buttonContainer}>
//         <Button title="報名" onPress={() => console.log('報名')} />
//       </View>
//     </View>
//   );
// };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        flexDirection: 'column',
        marginHorizontal:14
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
    },
  avatar2: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft:5,
  },
  tagContainer: {
    flexDirection: 'row',
    //justifyContent: 'space-between',
    width: '100%',
    height: 150,
    marginVertical: 10,
  },
  box: {
    backgroundColor: '#FBF1D6',
    borderRadius: 5,
    padding: 10,
    width: '100%',
    //marginHorizontal: 50,
    padding: 10,
    borderRadius: 10,
  },
  avatarRow: {
    flexDirection: 'row',
    marginTop:10,
    marginBottom: 20,
  },
  buttonContainer: {
    backgroundColor: '#EB7943',
    borderRadius: 25,
    marginVertical: 20,
  },
  button1: {
    backgroundColor: '#989898',
    borderRadius: 20,
    width:163,
    height:40,
    alignItems: 'center',
    justifyContent:'center',
    fontSize: 25
  },
  button2: {
    backgroundColor: '#EB7943',
    borderRadius: 20,
    width:163,
    height:40,
    alignItems: 'center',
    justifyContent:'center',
    fontSize: 30,

  },
  Button: {
    backgroundColor: '#EB7943',
    padding: 5,
    borderRadius: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width:'100%',
    },
    ButtonText: {
        color: 'white',
        fontSize: 25,
        textAlign:'center',
    },
});

