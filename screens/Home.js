import React from 'react';
import {Button, View, ScrollView, StyleSheet} from 'react-native';

const Home = ({navigation}) => {
    return (
        <ScrollView contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}>
            <View style={styles.menu_button}>
                <Button
                    title="Widget"
                    onPress={() => navigation.navigate('ArticleWithWidget')}
                />
                <Button
                    title="Widget_Dark"
                    onPress={() => navigation.navigate('ArticleWithWidgetDark')}
                />
                <Button
                    title="Article_With_Widget_In_FlatList"
                    onPress={() => navigation.navigate('ArticleWithWidgetInFlatList')}
                />
                <Button
                    title="Article_With_Feed"
                    onPress={() => navigation.navigate('ArticleWithFeed')}
                />
                <Button
                    title="Article_With_Feed_Video"
                    onPress={() => navigation.navigate('ArticleWithFeedVideo')}
                />
                <Button
                    title="Article_With_FeedDark"
                    onPress={() => navigation.navigate('ArticleWithFeedDark')}
                />
                <Button
                    title="Article_OC"
                    onPress={() => navigation.navigate('ArticleOC')}
                />
                <Button
                    title="Article_With_Widget_And_FeedVideo"
                    onPress={() => navigation.navigate('ArticleWithWidgetAndFeedVideo')}
                />
                <Button
                    title="Article_With_Widget_And_FeedDark"
                    onPress={() => navigation.navigate('ArticleWithWidgetAndFeedDark')}
                />
                <Button
                    title="Article_with_PageView"
                    onPress={() => navigation.navigate('ArticleWithPageView')}
                />
                <Button
                    title="Manual_Widget_With_Color_test"
                    onPress={() => navigation.navigate('WidgetForm')}
                />
                <Button
                    title="Manual_Feed_With_ExtraProperties_test"
                    onPress={() => navigation.navigate('FeedForm')}
                />
                <Button title="About" onPress={() => navigation.navigate('About')}/>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    menu_button: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    }

});

export default Home;
