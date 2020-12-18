import React, {useState, useEffect} from 'react';
import {View, ScrollView, Text, Dimensions} from 'react-native';
import paragraphs from '../static/paragraphs';
import StyledText from "../styles/StyledText";
import Header from "../styles/Header";
import RNTaboolaView from '@taboola/rnt-dev';
import { useIsFocused } from '@react-navigation/native'

const ArticleOC = props => {

    const feedHeight = Dimensions.get('window').height * 2
    const [height, setHeight] = useState(feedHeight)
    const [defClick, setDefClick] = useState('')

    const isFocused = useIsFocused();
    useEffect(() => {
    } , [isFocused])

    return (
        <ScrollView>
            <Header>Here's a Taboola OC</Header>
            <StyledText style={{textAlign: 'justify'}}>{paragraphs[1]}</StyledText>
            <View>
                <Text style={{backgroundColor: "green", padding: 25}}>You clicked on url - {defClick}</Text>
            </View>
            {isFocused && <RNTaboolaView
                mode="thumbnails-feed"
                publisher="sdk-tester"
                pageType="article"
                pageUrl="https://blog.taboola.com"
                placement="Feed without video"
                targetType="mix"
                interceptScroll={true}
                taboolaHandleOrganicClick={false}
                viewId="12345"
                style={{height}}
                onDidLoad={event => {
                }}
                onDidFailToLoad={event => {
                    setHeight(0);
                }}
                onItemClick={event => {
                    setDefClick((event.nativeEvent.clickUrl));
                    console.warn('Organic item was clicked!  - ' + event.nativeEvent.clickUrl);
                }}
            />}
        </ScrollView>
    );

};

export default ArticleOC;
