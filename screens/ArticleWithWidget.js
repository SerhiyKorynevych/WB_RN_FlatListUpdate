import React from 'react';
import { ScrollView } from 'react-native';
import Widget from '../components/Widget';
import StyledText from '../styles/StyledText';
import Header from '../styles/Header';
import paragraphs from '../static/paragraphs';


const ArticleWithWidget = props => {

    return (
        <ScrollView>
            <Header>Here's a Taboola Widget</Header>
            <StyledText>{paragraphs[0]}</StyledText>
            <StyledText>{paragraphs[1]}</StyledText>
            <Widget/>
            <StyledText>{paragraphs[0]}</StyledText>
        </ScrollView>
    );
};

export default ArticleWithWidget;
