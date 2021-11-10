import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Screen2() {
    return (
        <View style={styles.cont}>
            <Text style={styles.text}>Welcome to Screen 2</Text>
        </View>
    )
}

const styles= StyleSheet.create({
    cont: {
        backgroundColor: 'pink'
    },
    text: {
        fontSize: 20,
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center'
    }

}

)