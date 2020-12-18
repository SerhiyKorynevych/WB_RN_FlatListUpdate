import React, {useState} from 'react';
import {ScrollView, FlatList, View} from 'react-native';
import Widget from '../components/Widget';
import WidgetRND from "../components/WidgetRND";
import Feed from "../components/Feed";
import StyledText from '../styles/StyledText';
import Header from '../styles/Header';
import paragraphs from '../static/paragraphs';
import {YellowBox} from 'react-native';


const p1 = <StyledText key="p2">{paragraphs[0]}</StyledText>;
const p2 = <StyledText key="p2">{paragraphs[1]}</StyledText>;
YellowBox.ignoreWarnings([
    'VirtualizedLists should never be nested', // TODO: Remove when fixed
]);
class ArticleWithWidgetInFlatList extends React.Component {
   state ={
       widgetLoaded: false,
       viewID: "12345",
   }



    render () {

        return (
            // <ScrollView>
            //     <Header>Here's a Taboola Widget in FlatList</Header>
                <FlatList
                    style={{flex: 1}}
                    data={[{key: 'p1'}, {key: 'p3'}, {key: 'taboola'}, {key: 'p4'}, {key: 'taboolaDark'}, {key: 'p2'},  {key: 'p5'}, {key: 'taboolaFeed'}]}
                    renderItem={({item}) => {
                        switch (item.key) {
                            case 'p1':
                                return p1;
                            case 'p2':
                                return p2;
                            case 'p3':
                                return p1;
                            case 'p4':
                                return p1;
                            case 'p5':
                                return p2;
                            case 'taboola':
                                return  <Widget
                                    viewID={this.state.viewID}
                                />;
                            case 'taboolaDark':
                                return  <WidgetRND viewID={this.state.viewID}/>;
                            case 'taboolaFeed':
                                return  <Feed viewID={this.state.viewID}/>;
                            default:
                                return null;
                            }
                }}
                />
            // </ScrollView>
        );
    }
}



export default ArticleWithWidgetInFlatList;
