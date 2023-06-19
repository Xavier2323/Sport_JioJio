import React, {useState, Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, FlatList, Button, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';

const ApprovalScreen = () => {
    console.log('This is Approval');

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text>待審核</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
        paddingVertical: 150,
        paddingHorizontal: 15
    },
});

export default ApprovalScreen;