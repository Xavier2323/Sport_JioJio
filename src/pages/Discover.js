import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, FlatList, Button, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';


export default class DiscoverScreen extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
                <StatusBar barStyle="light-content" />
                <View style={styles.ContainerTop}>
                    <TouchableOpacity style={styles.Notification} onPress={() => {this.props.navigation.navigate('通知') }}>
                        <Image source={require('../images/bell.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    
}

const styles = StyleSheet.create({
    ContainerTop: {
        margin: 5,
        height: 40,
        width: 300,
        justifyContent: 'flex-start',
        alignSelf: 'center',
        borderRadius: 5,
        borderWidth: 1
    }
});