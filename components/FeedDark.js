import React, {useState, useEffect} from 'react';
import {Dimensions, Platform} from 'react-native';
import PropTypes from 'prop-types';
import RNTaboolaView from '@taboola/rnt-dev';
import { useIsFocused } from '@react-navigation/native'

const FeedDark = props => {
    // Set the publisher according to the OS.
    // Taboola will provide a publisher id for android and one for ios.
    // Here we are just using the test account for both.
    const publisher = Platform.OS === 'ios' ? 'sdk-tester-demo' : 'sdk-tester-demo';

    // Get the dimensions of the screen and set the feed height to twice the screen height
    const feedHeight = Dimensions.get('window').height * 2
    const [height, setHeight] = useState(feedHeight)

    const isFocused = useIsFocused();
    useEffect(() => {
    } , [isFocused])

    return (
        (isFocused && <RNTaboolaView
            viewID={props.viewID}
            mode={props.mode}
            publisher={publisher}
            pageType={props.pageType}
            pageUrl={props.pageUrl}
            placement={props.placement}
            targetType={props.targetType}
            interceptScroll={true}
            darkMode={true}
            style={{height, width: '100%'}}
            onDidLoad={event => {
                // This lets us implement other logic into this callback via props
                props.onDidLoad(event);
            }}
            onDidFailToLoad={event => {
                // collapse the taboola view if content fails to load
                setHeight(0);
            }}
            onItemClick={event => {
            }}
        />)
    );
};

FeedDark.defaultProps = {
    mode: 'thumbs-feed-01',
    pageType: 'article',
    pageUrl: 'https://blog.taboola.com',
    placement: 'Feed without video',
    targetType: 'mix',
    onDidLoad: () => {
    },
};

FeedDark.propTypes = {
    mode: PropTypes.string.isRequired,
    pageType: PropTypes.string.isRequired,
    pageUrl: PropTypes.string.isRequired,
    placement: PropTypes.string.isRequired,
    targetType: PropTypes.string.isRequired,
    viewID: PropTypes.string,
};

export default FeedDark;
