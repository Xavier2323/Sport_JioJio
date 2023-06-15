import React, {useState, Component } from 'react';

import Overview from './overview.js';
import Page1 from './page1.js';
import Page2 from './page2.js';
import Page3 from './page3.js';
import Page4 from './page4.js';
import Page5 from './page5.js';
import Page6 from './page6.js';
import Verify from './verify.js';
import { CurrentJioList, PastJioList } from '../utility/utility_JioJio.js';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default class JioJioScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userid: 1,
            sport: "",
            place: "",
            date: "",
            from: "",
            to: "",
            people: "",
            tag: ["新手", "休閒"],
            memo: "",
            curJioList: CurrentJioList,
            pastJioList: PastJioList
        }
    }


    render() {
        return (
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='overview'>
                <Stack.Screen name="overview">
                    {(props) => <Overview {...props} stat={this.state} />}
                </Stack.Screen>
                <Stack.Screen name="page1">
                    {(props) => <Page1 {...props} stat={this.state} reset={this.reset.bind(this)} finishSelectSport={this.finishSelectSport.bind(this)} />}
                </Stack.Screen>
                <Stack.Screen name="page2">
                    {(props) => <Page2 {...props} stat={this.state} reset={this.reset.bind(this)} finishSelectPlace={this.finishSelectPlace.bind(this)} />}
                </Stack.Screen>
                <Stack.Screen name="page3">
                    {(props) => <Page3 {...props} stat={this.state} reset={this.reset.bind(this)} finishSelectDate={this.finishSelectDate.bind(this)} />}
                </Stack.Screen>
                <Stack.Screen name="page4">
                    {(props) => <Page4 {...props} stat={this.state} reset={this.reset.bind(this)} finishSelectTime={this.finishSelectTime.bind(this)} />}
                </Stack.Screen>
                <Stack.Screen name="page5">
                    {(props) => <Page5 {...props} stat={this.state} reset={this.reset.bind(this)} finishSelectPeople={this.finishSelectPeople.bind(this)} />}
                </Stack.Screen>
                <Stack.Screen name="page6">
                    {(props) => <Page6 {...props} stat={this.state} reset={this.reset.bind(this)} finishSelectTagMemo={this.finishSelectTagMemo.bind(this)} />}
                </Stack.Screen>
                <Stack.Screen name="verify">
                    {(props) => <Verify {...props} stat={this.state} reset={this.reset.bind(this)} updateTag={this.updateTag.bind(this)} updateMemo={this.updateMemo.bind(this)} />}
                </Stack.Screen>
            </Stack.Navigator>
        );
    }
    reset = () => {
        this.setState({ ...this.state, sport: "", place: "", date: "", from: "", to: "", people: "", tag: [], memo: "" });
    }

    finishSelectSport = (id) => {
        this.setState({ ...this.state, sport: id });
    }

    finishSelectPlace = (place) => {
        this.setState({ ...this.state, place: place });
    }

    finishSelectDate = (date) => {
        this.setState({ ...this.state, date: date });
    }

    finishSelectTime = (from, to) => {
        this.setState({ ...this.state, from: from, to: to });
    }

    finishSelectPeople = (people) => {
        this.setState({ ...this.state, people: people });
    }

    finishSelectTagMemo = (tag, memo) => {
        this.setState({ ...this.state, tag: tag, memo: memo });
    }

    updateTag = (list) => {
        this.setState({ ...this.state, tag: list });
    }

    updateMemo = (newMemo) => {
        this.setState({ ...this.state, memo: newMemo });
    }
}

