import React, {useEffect, useState} from 'react';
import {Dimensions, TouchableWithoutFeedback} from 'react-native';
import RNTaboolaView from '@taboola/rnt-dev';
import PropTypes from 'prop-types';
import { useIsFocused } from '@react-navigation/native'

const FeedVideo = props => {
    // Get the dimensions of the screen and set the feed height to twice the screen height
    const feedHeight = Dimensions.get('window').height * 2;
    const [height, setHeight] = useState(feedHeight);

    const isFocused = useIsFocused();
    useEffect(() => {
    } , [isFocused])

    return (
        // (isFocused && <RNTaboolaView
        // <TouchableWithoutFeedback>
        <RNTaboolaView
            viewID={props.viewID}
            mode={props.mode}
            publisher={props.publisher}
            pageType={props.pageType}
            pageUrl={props.pageUrl}
            placement={props.placement}
            targetType={props.targetType}
            interceptScroll={true}
            style={{height, width: '100%'}}
            onDidLoad={event => {
            }}
            onDidFailToLoad={event => {
                // collapse the taboola view if content fails to load
                setHeight(0);
            }}
            onItemClick={event => {
            }}
        />
            // </TouchableWithoutFeedback>
         // )
    );
};

FeedVideo.defaultProps = {
    mode: 'thumbs-feed-01',
    publisher: 'sdk-tester',
    pageType: 'article',
    pageUrl: 'https://blog.taboola.com',
    placement: 'Feed with video',
    targetType: 'mix',
};

FeedVideo.propTypes = {
    mode: PropTypes.string.isRequired,
    publisher: PropTypes.string.isRequired,
    pageType: PropTypes.string.isRequired,
    pageUrl: PropTypes.string.isRequired,
    placement: PropTypes.string.isRequired,
    targetType: PropTypes.string.isRequired,
    viewID: PropTypes.string,
};

export default FeedVideo;
