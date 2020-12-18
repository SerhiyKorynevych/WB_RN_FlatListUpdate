import React from 'react';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {MainStackNavigator, FlatListNavigator, WidgetFeedNavigator, FlatListWithoutFeedNavigator} from './StackNavigator';



// const Tab = createBottomTabNavigator();
//
// const BottomTabNavigator = () => {
//     return (
//         <Tab.Navigator>
//             {/*<Tab.Screen name="Home" component={MainStackNavigator}/>*/}
//             <Tab.Screen name="Home" component={MainStackNavigator}/>
//             <Tab.Screen name="FlatList" component={Contact2StackNavigator}/>
//             <Tab.Screen name="WidgetFeed" component={ContactStackNavigator}/>
//         </Tab.Navigator>
//     );
// };
//
// export default BottomTabNavigator;


import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const BottomTopTabNavigator = () =>{
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={MainStackNavigator}/>
            {/*<Tab.Screen name="FlatList" component={FlatListNavigator}/>*/}
            {/*<Tab.Screen name="Widget_Feed" component={WidgetFeedNavigator}/>*/}
            <Tab.Screen name="FlatList_WB" component={FlatListWithoutFeedNavigator}/>
        </Tab.Navigator>
    );
}
 export default BottomTopTabNavigator;
