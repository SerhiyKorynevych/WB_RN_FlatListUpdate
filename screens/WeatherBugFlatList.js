import React from 'react';
import {ScrollView, FlatList} from 'react-native';
import {YellowBox} from 'react-native';

import Separator from "./WBSeparator";
import ListItem from "./WBListItem";
YellowBox.ignoreWarnings([
    'VirtualizedLists should never be nested', // TODO: Remove when fixed
]);
const DATA = [
    {
        mode: "alternating-widget-without-video-1x4",
        publisher: "sdk-tester-demo",
        pageType: "article",
        pageUrl: "https://blog.taboola.com",
        placement: "Mid Article",
        targetType: "mix",
        viewID: "12345",
        isFeed: false,
        height: 444,
        id:"1"
    },
    {
        mode: "alternating-widget-without-video-1x4",
        publisher: "sdk-tester-demo",
        pageType: "article",
        pageUrl: "https://blog.taboola.com",
        placement: "Mid Article",
        targetType: "mix",
        viewID: "12345",
        isFeed: false,
        height: 1144,
        id:"2"
    },
    {
        mode: "thumbnails-a",
        publisher: "sdk-tester",
        pageType: "article",
        pageUrl: "https://blog.taboola.com",
        placement: "Feed with video",
        targetType: "mix",
        viewID: "12345",
        isFeed: true,
        id:"3"
    }
];


const  WeatherBugFlatList = props => (
        <FlatList
            data={DATA}
            renderItem={ListItem}
            keyExtractor={(item) => item.id }
            ItemSeparatorComponent={Separator}
        />
);
export default WeatherBugFlatList;
