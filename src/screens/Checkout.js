import React, { Component } from 'react';
import { Alert, AppRegistry, Button, View, Text } from 'react-native';

export default class CheckoutScreen extends Component {
  
    getCucked = () => {
      Alert.alert('you are cucked')
    }
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly' }}>
            <Button title='Get Cucked' onPress={this.getCucked} />
            <Button title='Go back home' onPress={this.props.navigation.navigate('Home')} />
      </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('JoulesGym', () => CheckoutScreen);