import React, { Component } from 'react';
import { AppRegistry, Button, View, Text, StyleSheet } from 'react-native';

export default class HomeScreen extends Component {
  onPress = () => {
    this.props.navigation.navigate('Exercises')
  }
  render() {
    return (
      <View style={styles.mainView}>
        <Button 
          title='Add exercise to calculation' 
          flex='1'
          flexDirection='row'
          color= '#74999e'
          onPress={this.onPress} 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c1c4bc'
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    color: '#74999e'
  }
});
// skip this line if using Create React Native App
AppRegistry.registerComponent('JoulesGym', () => HomeScreen);