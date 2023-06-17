import React, {useState, Component } from 'react';

import Overview from './overview.js';
import Page1 from './page1.js';
import Page2 from './page2.js';
import Page3 from './page3.js';
import Page4 from './page4.js';
import Page5 from './page5.js';
import Page6 from './page6.js';
import Verify from './verify.js';
import TagPage from './tagpage.js';
import Launch from './launchpage.js';

import { createStackNavigator } from '@react-navigation/stack';
import { Tag } from 'native-base';

const Stack = createStackNavigator();

export default class JioJioScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userid: 1,
            sport: "",
            place: "",
            date: new Date(),
            from: new Date('2023-6-1T12:00:00'),
            to: new Date('2023-6-1T18:00:00'),
            people: "1",
            tag: ["新手", "休閒","好玩就好","初學者可","歡迎新人"],
            memo: "",
            tagpageBack:0,
            valid:0,
            update:0
        }
    }


    render() {
        return (
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='overview'>
                <Stack.Screen name="overview">
                    {(props) => <Overview {...props} stat={this.state} setUpdate={this.setUpdate.bind(this)}/>}
                </Stack.Screen>
                <Stack.Screen name="page1">
                    {(props) => <Page1 {...props} stat={this.state} reset={this.reset.bind(this)} finishSelectSport={this.finishSelectSport.bind(this)} setTagpageBack={this.setTagpageBack.bind(this)}/>}
                </Stack.Screen>
                <Stack.Screen name="page2">
                    {(props) => <Page2 {...props} stat={this.state} reset={this.reset.bind(this)} finishSelectPlace={this.finishSelectPlace.bind(this)} setTagpageBack={this.setTagpageBack.bind(this)}/>}
                </Stack.Screen>
                <Stack.Screen name="page3">
                    {(props) => <Page3 {...props} stat={this.state} reset={this.reset.bind(this)} finishSelectDate={this.finishSelectDate.bind(this)} />}
                </Stack.Screen>
                <Stack.Screen name="page4">
                    {(props) => <Page4 {...props} stat={this.state} reset={this.reset.bind(this)} finishSelectTime={this.finishSelectTime.bind(this)} setTagpageBack={this.setTagpageBack.bind(this)}/>}
                </Stack.Screen>
                <Stack.Screen name="page5">
                    {(props) => <Page5 {...props} stat={this.state} reset={this.reset.bind(this)} finishSelectPeople={this.finishSelectPeople.bind(this)} setTagpageBack={this.setTagpageBack.bind(this)}/>}
                </Stack.Screen>
                <Stack.Screen name="page6">
                    {(props) => <Page6 {...props} stat={this.state} reset={this.reset.bind(this)} finishSelectTagMemo={this.finishSelectTagMemo.bind(this)} setTagpageBack={this.setTagpageBack.bind(this)}/>}
                </Stack.Screen>
                <Stack.Screen name="verify">
                    {(props) => <Verify {...props} stat={this.state} reset={this.reset.bind(this)} finishSelectTagMemo={this.finishSelectTagMemo.bind(this)} setTagpageBack={this.setTagpageBack.bind(this)} updateValid={this.updateValid.bind(this)} forceUpdate={this.setUpdate.bind(this)}/>}
                </Stack.Screen>
                <Stack.Screen name="tagpage">
                    {(props) => <TagPage {...props} stat={this.state} reset={this.reset.bind(this)} finishEditTag={this.finishEditTag.bind(this)} setTagpageBack={this.setTagpageBack.bind(this)}/>}
                </Stack.Screen>
                <Stack.Screen name="launch">
                    {(props) => <Launch {...props} stat={this.state} reset={this.reset.bind(this)}/>}
                </Stack.Screen>
            </Stack.Navigator>
        );
    }
    reset = () => {
        this.setState({ ...this.state, 
                        sport: "", 
                        place: "", 
                        date: new Date(), 
                        from: new Date('2023-6-1T12:00:00'), 
                        to: new Date('2023-6-1T18:00:00'), 
                        people: "1", 
                        tag: ["新手", "休閒","好玩就好","初學者可","歡迎新人"], 
                        memo: "",
                        tagpageBack:0 });
    }

    setUpdate = (num) => {
        this.setState({ ...this.state, update: num});
    }

    updateValid = (num) => {
        this.setState({ ...this.state, valid: num});
    }

    finishSelectSport = (id) => {
        this.setState({ ...this.state, sport: id });
    }

    finishSelectPlace = (place) => {
        this.setState({ ...this.state, place: place });
    }

    finishSelectDate = (date) => {
        this.setState({ ...this.state, date: date});
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

    finishEditTag = (tag) => {
        this.setState({ ...this.state, tag: tag});
    }

    setTagpageBack = (num) => {
        this.setState({ ...this.state, tagpageBack: num});
    }
}

