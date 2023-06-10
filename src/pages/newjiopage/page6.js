import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, FlatList, Button, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';

import { Tag } from '../utility/utility_JioJio.js';

export default class Page6 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tag: this.props.stat.tag,
            memo: this.props.stat.memo
        }
    }

    render() {
        const tagList = this.state.tag.map((item) => { return (<Tag title={item} f={this.deleteTag.bind(this)}></Tag>) })

        return (
            <SafeAreaView>
                <ScrollView style={styles.ScrollView} nestedScrollEnabled={true}>
                    <View style={{ flexDirection: 'column' }}>
                        <View style={{ height: 35 }}></View>

                        <View style={[styles.containerRow, { marginHorizontal: 30 }]}>
                            <TouchableOpacity style={{ height: 40, width: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 100 }} onPress={() => { this.props.reset(); this.props.navigation.navigate('overview') }}>
                                <Image source={require('../../images/back.png')} style={{ height: 80, width: 80 }} />
                            </TouchableOpacity>
                            <View style={[styles.containerColumn, { marginLeft: 66 }]}>
                                <Text style={styles.title}>新的揪揪</Text>
                                <View style={styles.underOrangeLine}></View>
                            </View>
                        </View>

                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={styles.subtitle}>補充一下你的揪揪吧</Text>
                        </View>

                        <View style={{ height: 500, marginHorizontal: 30 }}>
                            <ScrollView style={styles.scrollStyle} nestedScrollEnabled={true}>
                                <View style={[styles.containerRow, { marginVertical: 50 }]}>
                                    <Text style={styles.subtitle1}>Tags:</Text>
                                    {tagList}
                                    <TouchableOpacity><Text style={[styles.subtitle1, { marginLeft: 20, color: 'grey' }]}>+</Text></TouchableOpacity>
                                </View>
                                <Text style={[styles.subtitle1, { marginVertical: 30 }]}>備註:</Text>
                                <View style={{ backgroundColor: '#FFF9E9', borderRadius: 5, borderColor: '#000000', borderWidth: 1, marginTop: 30 }}>
                                    <TextInput
                                        editable
                                        multiline
                                        numberOfLines={8}
                                        maxLength={100}
                                        onChangeText={(text) => { this.setState({ ...this.state, memo: text }); }}
                                        value={this.state.memo}
                                        style={{ padding: 10, fontSize: 18 }}
                                    />
                                </View>
                            </ScrollView>
                        </View>
                        <View style={{ marginTop: 30, justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity style={styles.nextButtonStyle} onPress={this.handleNextPage.bind(this)}>
                                <Text style={styles.subtitle2}>下一步</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }

    deleteTag = (title) => {
        const newList = this.state.tag.map((item) => { if (item == title) return ""; else return (item); });
        this.setState({ ...this.state, tag: newList });
    }

    handleNextPage = async () => {
        await this.props.finishSelectTagMemo(this.state.tag, this.state.memo);
        this.props.navigation.navigate('verify');
    }

}



const styles = StyleSheet.create({
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
    tagContainer: {
        borderRadius: 5,
        backgroundColor: '#AEAEAE',
        width: 60,
        marginHorizontal: 20,
        flexDirection: 'row',
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
    xmarkcontainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 5
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
    subtitle1: {
        fontSize: 20
    },
    subtitle2: {
        fontSize: 20,
        color: 'white',
        paddingBottom: 5
    },
    subtitle3: {
        fontSize: 15,
        marginLeft: 8,
        paddingTop: 4
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
        marginHorizontal: 30
    }

});