import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';
import About from '../screens/About';
import Contact from '../screens/Contact';

import ArticleWithWidget from '../screens/ArticleWithWidget';
import ArticleWithWidgetDark from '../screens/ArticleWithWidgetDark';
import ArticleWithWidgetInFlatList from '../screens/ArticleWithWidgetInFlatList';
import ArticleWithFeed from '../screens/ArticleWithFeed';
import ArticleWithFeedVideo from '../screens/ArticleWithFeedVideo';
import ArticleWithFeedDark from '../screens/ArticleWithFeedDark';
import ArticleWithWidgetAndFeedVideo from '../screens/ArticleWithWidgetAndFeedVideo';
import ArticleWithWidgetAndFeedDark from '../screens/ArticleWithWidgetAndFeedDark';
import ArticleOC from '../screens/ArticleOC';
import WidgetForm from '../components/WidgetForm';
import FeedForm from '../components/FeedForm';
import ArticleWithPageView from '../screens/ArticleWithPageView';
import ArticleWithoutFeedtInFlatList from "../screens/ArticleWithoutFeedtInFlatList";
import WeatherBugFlatList from "../screens/WeatherBugFlatList";


const Stack = createStackNavigator();

const screenOptionStyle = {
    headerStyle: {
        backgroundColor: '#9AC4F8',
    },
    headerTintColor: 'white',
    headerBackTitle: 'Back',
};

const MainStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="About" component={About}/>
            <Stack.Screen name="ArticleWithWidget" component={ArticleWithWidget}/>
            <Stack.Screen name="ArticleWithWidgetDark" component={ArticleWithWidgetDark}/>
            <Stack.Screen name="ArticleWithWidgetInFlatList" component={ArticleWithWidgetInFlatList}/>
            <Stack.Screen name="ArticleWithFeed" component={ArticleWithFeed}/>
            <Stack.Screen name="ArticleWithFeedVideo" component={ArticleWithFeedVideo}/>
            <Stack.Screen name="ArticleWithFeedDark" component={ArticleWithFeedDark}/>
            <Stack.Screen name="ArticleWithWidgetAndFeedVideo" component={ArticleWithWidgetAndFeedVideo}/>
            <Stack.Screen name="ArticleWithWidgetAndFeedDark" component={ArticleWithWidgetAndFeedDark}/>
            <Stack.Screen name="WidgetForm" component={WidgetForm}/>
            <Stack.Screen name="FeedForm" component={FeedForm}/>
            <Stack.Screen name="ArticleWithPageView" component={ArticleWithPageView}/>
            <Stack.Screen name="ArticleOC" component={ArticleOC}/>
        </Stack.Navigator>
    );
};

const WidgetFeedNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Widget_Feed" component={ArticleWithWidgetAndFeedVideo}/>
        </Stack.Navigator>
    );
};

const FlatListNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="FlatList" component={ArticleWithWidgetInFlatList}/>
        </Stack.Navigator>
    );
};
const FlatListWithoutFeedNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            {/*<Stack.Screen name="FlatList_Without_Feed" component={ArticleWithoutFeedtInFlatList}/>*/}
            <Stack.Screen name="FlatList_Without_Feed" component={WeatherBugFlatList}/>
        </Stack.Navigator>
    );
};

export {MainStackNavigator, FlatListNavigator, WidgetFeedNavigator,FlatListWithoutFeedNavigator};
