import React, {useState} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import Header from "../styles/Header";
import StyledText from "../styles/StyledText";
import paragraphs from "../static/paragraphs";
import Widget from "../components/Widget";
import WidgetDark from "../components/WidgetDark";
import FeedDark from "../components/FeedDark";

const ArticleWithPageView = () => {

    const [position, setPosition] = useState(0);
    const onPageSelected = e => {
        setPosition(e.nativeEvent.position);
        console.log('pageslected - ' + e.nativeEvent.position );
    };



    return (

        <ViewPager style={styles.viewPager} initialPage={0} onPageSelected={onPageSelected}>
            <ScrollView key="1">
                <Header>Here's a Widget PageView _ 1</Header>
                <StyledText>{paragraphs[0]}</StyledText>
                <StyledText>{paragraphs[1]}</StyledText>
                {position===0 && <Widget/>}
                <StyledText>{paragraphs[0]}</StyledText>
            </ScrollView>
            <ScrollView key="2">
                <Header>Here's a WidgetDark PageView _ 2</Header>
                <StyledText>{paragraphs[0]}</StyledText>
                <StyledText>{paragraphs[1]}</StyledText>
                <StyledText>{paragraphs[1]}</StyledText>
                <StyledText>{paragraphs[1]}</StyledText>
               {position===1 && <WidgetDark/> }
                <StyledText>{paragraphs[0]}</StyledText>
            </ScrollView>
            <ScrollView key="3">
                <Header>Here's a Feed PageView _ 3</Header>
                <StyledText>{paragraphs[0]}</StyledText>
                <StyledText>{paragraphs[0]}</StyledText>
                <StyledText>{paragraphs[0]}</StyledText>
                <StyledText>{paragraphs[0]}</StyledText>
                <StyledText>{paragraphs[0]}</StyledText>
                <StyledText>{paragraphs[1]}</StyledText>
                {position===2 &&  <FeedDark/>}
            </ScrollView>
        </ViewPager>
    );
};

const styles = StyleSheet.create({
    viewPager: {
        flex: 1,
    },
});


export default ArticleWithPageView;
