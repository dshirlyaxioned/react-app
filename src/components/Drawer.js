import react, { Component } from "react";
import { View, Text, StyleSheet, Button } from 'react-native';

import {
    createSwitchNavigator,
    createAppContainer
} from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { DashboardStackNavigator, WelcomeStackNavigator } from './DrawerIcon';


export class WelcomeScreen extends Component {
    static navigationOptions = {
        title: 'Welcome'
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Welcome..!!</Text>
                <Button 
                title="Go to Main page"
                onPress={() => this.props.navigation.navigate('Welcome')}
                />
            </View>
        )
    }
}

export class DashboardScreen extends Component {
    static navigationOptions = {
        title: 'Dashboard'
    }
    render() {
        return (
            <View
            style={styles.container}>
                <Text>This is dashboard screen</Text>
            </View>
        )
    }
}

const AppDrawerNavigator = createDrawerNavigator({
    Dashboard: {
        screen: DashboardStackNavigator
    },
    Welcome: {
        screen: WelcomeStackNavigator
    }
})

const SwitchNavigator = createSwitchNavigator({
    Dashboard: { screen: AppDrawerNavigator },
    Welcome: { screen: WelcomeScreen },
})

const AppContainer = createAppContainer(SwitchNavigator);

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent: 'center'
    }
})


export default AppContainer;