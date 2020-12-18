import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const About = () => {
    return (
        <View style={styles.center}>
            <Text>About this app:</Text>
            <Text>...</Text>
            <Text>version date- 2020_Dec_15_ FlatList issue</Text>
            <Text>React-Native - 63.4</Text>
            <Text>iOS 2.8.2 / Android 2.8.1</Text>
            <Text>@taboola/rnt-dev - 2.1.2 (2.1.1 original)</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
});

export default About;
