import React, { Component } from 'react';
import { Alert, AppRegistry, Button, View, Text } from 'react-native';

export default class RecordExerciseDataScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly' }}>
        <Button title='Add to calculation' onPress={() => Alert.alert('Added to exercise to calculation')} />
        <Button title='Select another exercise' onPress={() => this.props.navigation.navigate('Exercises')} />
        <Button title='See results' onPress={() => this.props.navigation.navigate('Home')} />
      </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('JoulesGym', () => RecordExerciseDataScreen);