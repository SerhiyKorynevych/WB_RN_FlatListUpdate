import React from 'react';
import {View, ScrollView} from 'react-native';
import FeedVideo from '../components/FeedVideo';
import StyledText from '../styles/StyledText';
import Header from '../styles/Header';
import paragraphs from '../static/paragraphs';

const ArticleWithFeedVideo = props => {

    return (
        <View style={{flex: 1}}>
            <ScrollView>
                <Header>Here's a Taboola Feed with Video</Header>
                <StyledText>{paragraphs[0]}</StyledText>
                <StyledText>{paragraphs[1]}</StyledText>
                <StyledText>{paragraphs[2]}</StyledText>
                <FeedVideo/>
            </ScrollView>
        </View>
    );
};

export default ArticleWithFeedVideo;
