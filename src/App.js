/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


 import React from 'react';
 import { StyleSheet} from 'react-native';
 import { NavigationContainer } from '@react-navigation/native'
 import { DashboardScreen, WelcomeScreen } from './components/Drawer';
 import { createDrawerNavigator } from 'react-navigation-drawer';

 const Drawer = createDrawerNavigator();
 export default function App() {
     return (
      <NavigationContainer style={styles.container}>
        <Drawer.Navigator initialRouteName="Dashboard">
          <Drawer.Screen name="Dashboard" component={DashboardScreen} />
          <Drawer.Screen name="Welcome" component={WelcomeScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
     );
}
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#000',
     alignItems: 'center',
     justifyContent: 'center',
   },
 });
 