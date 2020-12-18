import React, {useState} from 'react';
import {Dimensions, ScrollView} from "react-native";
import RNTaboolaView from "@taboola/rnt-dev";


const ListItem = ({ item }) => {
     const feedHeight = Dimensions.get('window').height * 2;
    // const [ height, setHeight ] = useState(0);
    return (
        <ScrollView>
            <RNTaboolaView
                mode={item.mode}
                publisher={item.publisher}
                pageType={item.pageType}
                pageUrl={item.pageUrl}
                placement={item.placement}
                targetType={item.targetType}
                viewID={item.viewID}
                interceptScroll={item.isFeed ? true : false}
                style={item.isFeed ? {height: feedHeight}:{height: item.height}}
                //style={{height}}
               // onDidLoad={event => setHeight(event.nativeEvent.height)}
                onDidFailToLoad={event => {
                    // setHeight(0);
                }}
                onItemClick={event => {
                }}
            />
        </ScrollView>
    )
};


export default ListItem;
