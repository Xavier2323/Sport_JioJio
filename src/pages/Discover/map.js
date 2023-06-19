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
                    <Image 
                        style={styles.imageColumn} 
                        source={require('../../images/PlaceTennis.png')} 
                    />
                    <View style={styles.textColumn}>
                        <Text style={styles.placetext}>網球場</Text>
                        <Text style={styles.placetext}>尚無揪揪</Text>
                        <TouchableOpacity style={styles.placebutton}>
                            <Text>發起揪揪</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
            </TouchableOpacity>
            <Image 
                        style={styles.placeNum} 
                        source={require('../../images/place_n.png')} 
                    />


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
    top: '50%', 
    left: '20%', 
    transform: [{ translateX: -0.5 }, { translateY: -0.5 }],
    width:'70%',

  },
  place: {
    flexDirection: 'row',
    backgroundColor: '#FBF1D6',
    borderRadius: 5,
    padding: 10,
    width: '80%',
    
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
    alignItems: 'center',
  },
  imageColumn: {
    flex: 1,
    resizeMode: 'cover',
  },
  textColumn: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

