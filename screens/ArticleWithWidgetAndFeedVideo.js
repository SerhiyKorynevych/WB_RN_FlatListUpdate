import React from 'react';
import {View, ScrollView} from 'react-native';
import Widget from '../components/Widget';
import FeedVideo from '../components/FeedVideo';
import StyledText from '../styles/StyledText';
import Header from '../styles/Header';
import paragraphs from '../static/paragraphs';

class ArticleWithWidgetAndFeedVideo extends React.Component {
    state = {
        widgetLoaded: false,
        viewID: new Date().getTime().toString(),
    };

    setWidgetLoaded() {
        this.setState({widgetLoaded: true});
    }

    render() {
        return (
            <View>
                <ScrollView>
                    <Header>Here's a Taboola Widget and Feed with Video</Header>
                    <StyledText>{paragraphs[0]}</StyledText>
                    <StyledText>{paragraphs[1]}</StyledText>
                    <StyledText>{paragraphs[2]}</StyledText>
                    <Widget
                        viewID={this.state.viewID}
                        onDidLoad={e => this.setWidgetLoaded()}
                    />
                    <StyledText>{paragraphs[1]}</StyledText>
                    {/* this tells the component to only render the Feed once the widget has been rendered.
					    Doing this and passing both the widget and feed the same viewId will prevent duplication of ads */}
                    {this.state.widgetLoaded && <FeedVideo viewId={this.state.viewId}/>}
                </ScrollView>
            </View>
        );
    }
}

export default ArticleWithWidgetAndFeedVideo;
