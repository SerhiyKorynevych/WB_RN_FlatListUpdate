import React from 'react';
import {ScrollView} from 'react-native';
import StyledText from '../styles/StyledText';
import Header from '../styles/Header';
import paragraphs from '../static/paragraphs';
import FeedDark from "../components/FeedDark";
import WidgetDark from "../components/WidgetDark";

class ArticleWithWidgetAndFeedDark extends React.Component {
    state = {
        widgetLoaded: false,
        viewID: new Date().getTime().toString(),
    };

    setWidgetLoaded() {
        this.setState({widgetLoaded: true});
    }

    render() {
        return (
            <ScrollView>
                <Header>Here's a Taboola Widget and Feed</Header>
                <StyledText>{paragraphs[1]}</StyledText>
                <WidgetDark
                    viewID={this.state.viewID}
                    onDidLoad={e => this.setWidgetLoaded()}
                />
                <StyledText>{paragraphs[1]}</StyledText>
                {/* this tells the component to only render the Feed once the widget has been rendered.
					    Doing this and passing both the widget and feed the same viewID will prevent duplication of ads */}
                {this.state.widgetLoaded && <FeedDark viewID={this.state.viewID}/>}
            </ScrollView>
        );
    }
}

export default ArticleWithWidgetAndFeedDark;
