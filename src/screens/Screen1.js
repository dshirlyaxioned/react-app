import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { NavigationContext } from 'react-navigation';


export default class FlatListComp extends Component {
    render() {
        return(
            <View style={styles.container}>
                <FontAwesome5 
                name={'copy1'}
                size={30}
                />
                <FlatList 
                  data = {[
                      {name: 'Kates Kitchen', key: '1'},
                      {name: 'Grahams Grill', key: '2'},
                      {name: 'Bobs Burger Place', key: '3'},
                      {name: 'Chads Chip Shop', key: '4'}
                  ]}
                  renderItems={({item}) =>
                <Text style={styles.item}>
                 {item.name}
                 <FontAwesome5.Button 
                  name={'caretright'}
                  size={30}
                  onPress={() => navigation.navigate('Screen2')}
                 />
                </Text>
                }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30
    },
    item: {
        marginTop: 24,
        padding: 20,
        fontSize: 20,
        height: 60
    }
})