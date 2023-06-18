import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, Image, FlatList, Button, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PersonalScreen = () => {
    const navigation = useNavigation();
    console.log('This is Personal');
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View>
                <Text>
                    個人主頁
                </Text>
            </View>
        </ScrollView>
    )
}

export default PersonalScreen;