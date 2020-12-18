import React from 'react';
import {ScrollView} from 'react-native';
import StyledText from '../styles/StyledText';
import Header from '../styles/Header';
import paragraphs from '../static/paragraphs';
import WidgetDark from '../components/WidgetDark';

const ArticleWithWidgetDark = (props) => {

    return (
        <ScrollView>
            <Header>Here's a Taboola Widget Dark</Header>
            <StyledText>{paragraphs[0]}</StyledText>
            <StyledText>{paragraphs[1]}</StyledText>
            <WidgetDark/>
            <StyledText>{paragraphs[0]}</StyledText>
        </ScrollView>
    );
};

export default ArticleWithWidgetDark;
