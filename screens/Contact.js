import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Contact = () => {
    return (
        <View style={styles.center}>
            <Text>Contact information</Text>
            <Text>...</Text>
            <Text>omri.a@taboola.com</Text>
            <Text>serhiy.korynevych@taboola.com</Text>
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

export default Contact;
