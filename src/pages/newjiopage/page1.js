import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, FlatList, Button, TouchableOpacity, SafeAreaView } from 'react-native';

const Card = (props) => {
    if (props.title == 1) return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Image style={{ height: 80, width: 80 }} source={require("../../images/badminton.png")}></Image>
            <Text>羽球</Text>
        </View>
    );
    else if (props.title == 2) return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Image style={{ height: 80, width: 80 }} source={require("../../images/basketball.png")}></Image>
            <Text>籃球</Text>
        </View>
    );
    else if (props.title == 3) return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Image style={{ height: 80, width: 80 }} source={require("../../images/soccer.png")}></Image>
            <Text>足球</Text>
        </View>
    );
    else return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Image style={{ height: 80, width: 80 }} source={require("../../images/baseball.png")}></Image>
            <Text>棒球</Text>
        </View>
    );
};

export default class Page1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sport: this.props.stat.sport
        }
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView nestedScrollEnabled={true} style={styles.ScrollView}>
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
                            <Text style={styles.subtitle}>請選擇運動項目</Text>
                        </View>

                        <ScrollView nestedScrollEnabled={true} style={styles.scrollStyle}>
                            <View style={styles.containerColumn}>
                                <View style={styles.containerRowMid}>
                                    <TouchableOpacity style={this.state.sport == "羽球" ? styles.selected : styles.unselected}
                                        onPress={() => { if (this.state.sport == "羽球") this.setState({ sport: "" }); else this.setState({ sport: "羽球" }); }}>
                                        <Card title={1} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={this.state.sport == "籃球" ? styles.selected : styles.unselected}
                                        onPress={() => { if (this.state.sport == "籃球") this.setState({ sport: "" }); else this.setState({ sport: "籃球" }); }}>
                                        <Card title={2} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={this.state.sport == "足球" ? styles.selected : styles.unselected}
                                        onPress={() => { if (this.state.sport == "足球") this.setState({ sport: "" }); else this.setState({ sport: "足球" }); }}>
                                        <Card title={3} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.containerRowMid}>
                                    <TouchableOpacity style={styles.unselected}
                                        onPress={() => { }}>
                                        <Card title={2} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.unselected}
                                        onPress={() => { }}>
                                        <Card title={3} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={this.state.sport == "棒球" ? styles.selected : styles.unselected}
                                        onPress={() => { if (this.state.sport == "棒球") this.setState({ sport: "" }); else this.setState({ sport: "棒球" }); }}>
                                        <Card title={4} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.containerRowMid}>
                                    <TouchableOpacity style={styles.unselected}
                                        onPress={() => { }}>
                                        <Card title={4} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.unselected}
                                        onPress={() => { }}>
                                        <Card title={1} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.unselected}
                                        onPress={() => { }}>
                                        <Card title={2} />
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </ScrollView>
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
    handleSportSelect(id) {
        if (this.state.sport == id) this.setState({ ...this.state, sport: id });
        else this.setState({ ...this.state, sport: id });
    }
    handleNextPage = async () => {
        await this.props.finishSelectSport(this.state.sport);
        this.props.navigation.navigate('page2');
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
    containerRowMid: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 30
    },
    selected: {
        borderWidth: 1,
        borderColor: 'grey',
        height: 100,
        width: 100,
        marginHorizontal: 10
    },
    unselected: {
        borderWidth: 0,
        height: 100,
        width: 100,
        marginHorizontal: 10
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
    }

});