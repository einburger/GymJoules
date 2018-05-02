import React, { Component } from 'react';
import { AppRegistry, Button, View, Text } from 'react-native';

export default class Home extends Component {
  render() {
    return (
        <View style = {{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button title='Add exercise to calculation' onPress = { () => this.props.navigation.navigate('Exercises') } />
        </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('JoulesGym', () => Home);