import React from 'react';
import {ScrollView} from 'react-native';
import StyledText from '../styles/StyledText';
import Header from '../styles/Header';
import paragraphs from '../static/paragraphs';
import FeedDark from "../components/FeedDark";

const ArticleWithFeedDark = props => {

    return (
        <ScrollView style={{flex: 1}}>
            <Header>Here's a Taboola Feed Dark</Header>
            <StyledText style={{textAlign: 'justify'}}>{paragraphs[1]}</StyledText>
             <FeedDark/>
        </ScrollView>
    );
};

export default ArticleWithFeedDark;
