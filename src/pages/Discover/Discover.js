import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, Image, FlatList, Button, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const DiscoverScreen = () => {
    const navigation = useNavigation();

    const gotoNotification = () => {
        navigation.navigate('Notification');
    }

    const gotoPersonal = () => {
        navigation.navigate('Personal');
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <StatusBar barStyle="light-content" />
                <View style={styles.ContainerTop}>
                    <TouchableOpacity style={styles.Notification} onPress={gotoNotification}>
                        <Image source={require('../../images/bell.png')}/>
                    </TouchableOpacity>
                    <Text style={styles.banner}>運動揪揪</Text>
                    <TouchableOpacity style={styles.Notification} onPress={gotoPersonal}>
                        <Image source={require('../../images/Person.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
    
}

const styles = StyleSheet.create({
    root: {
        alignItem: 'center',
        padding:20,
    },
    ContainerTop: {
        flexDirection: 'row',
        flex: 3,
        height: '5%',
        width: '95%',
        justifyContent: 'space-around',
        alignSelf: 'center',
        borderRadius: 10,
        borderWidth: 1,
    },
    banner: {
        fontSize: RFPercentage(3),
    }
});

export default DiscoverScreen;