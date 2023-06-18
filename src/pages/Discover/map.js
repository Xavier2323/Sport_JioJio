
import React from 'react';
import { View, Image, StyleSheet, ImageBackground, Text, TouchableOpacity } from 'react-native';

export default class Map extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
        <View style={styles.map}>
            <ImageBackground 
            source={require('../../images/map.png')} 
            resizeMode="cover" 
            style={styles.image}
            >
            <View style={styles.blank} />
            
            <Image  
                style={styles.top}
                // source={require('../assets/Top_app_bar.png')}  
            />
            
            <TouchableOpacity 
                style={styles.button} 
                onPress={() => {this.props.navigate()}}
            >
                <View style={styles.place}>
                    <Text style={styles.placetext}>網球場</Text>
                    <Text style={styles.placetext}>尚無揪揪</Text>
                    <TouchableOpacity style={styles.placebutton} >
                        <Text>發起揪揪</Text>
                    </TouchableOpacity>
                </View>
                
            </TouchableOpacity>

            </ImageBackground>
        </View>
        );
    }
}

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
    //alignItems:'center',
    
  },
  top: {
    flex: 0,
    width: 390,
    height: 50,
    //resizeMode: 'cover',
    alignItems:'center',
    position: 'absolute',
    top: 10,
    left: 0,
    right: 0,
    
  },
  /*
  left_of_top: {
    flex: 0,
    width: 390,
    height: 50,
    //resizeMode: 'cover',
    //alignItems:'center',
    position: 'absolute',
    top: 10,
    left: 0,
    right: 0,
    
  },
  right_of_top: {
    flex: 0,
    width: 390,
    height: 50,
    //resizeMode: 'cover',
    alignItems:'center',
    position: 'absolute',
    top: 10,
    left: 0,
    right: 0,
    
  },*/
  blank: {
    //flex: 1,
    width: 390,
    height: 10,
  },
  button: {
    position: 'absolute',
    top: 150, 
    left: 150, 
  },
  place: {
    
    backgroundColor: '#FBF1D6',
    borderRadius: 5,
    padding: 10,
    width: 120,
    
    padding: 10,
    borderRadius: 10,
  },
  placetext:{
    alignItems: 'flex-end',
  },
  placebutton: {
    backgroundColor: '#EB7943',
    borderRadius: 5,
    margin: 2,
    paddingHorizontal: 5,
    paddingVertical: 1,
    alignItems: 'flex-end',
  
    borderRadius: 5,
    padding: 10,
    //width: '100%',
 
    padding: 10,
    borderRadius: 10,
  },
});

