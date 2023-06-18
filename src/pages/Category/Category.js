import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, Image, FlatList, Button, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const CategoryScreen = () => {
    const navigation = useNavigation();
    console.log('This is Category');
    
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View>
                <Text>
                    分類
                </Text>
            </View>
        </ScrollView>
    )
}

export default CategoryScreen;