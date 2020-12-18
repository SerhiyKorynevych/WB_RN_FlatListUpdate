import React from 'react';
import {ScrollView} from 'react-native';
import Feed from '../components/Feed';
import StyledText from '../styles/StyledText';
import Header from '../styles/Header';
import paragraphs from '../static/paragraphs';

const ArticleWithFeed = props => {

    return (
        <ScrollView style={{flex: 1}}>
            <Header>Here's a Taboola Feed</Header>
            <StyledText style={{textAlign: 'justify'}}>{paragraphs[0]}</StyledText>
            <StyledText style={{textAlign: 'justify'}}>{paragraphs[1]}</StyledText>
            <Feed/>
        </ScrollView>
    );
};

export default ArticleWithFeed;
