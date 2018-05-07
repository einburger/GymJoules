import React, { Component } from 'react';
import { Alert, AppRegistry, Button, View, Text, TextInput } from 'react-native';

import styles from '../styles/styles';
import CustomButton from '../components/CustomButton'

export default class RecordExerciseDataScreen extends Component {
<<<<<<< HEAD
  
    addToCalc = () => {
      Alert.alert('fucking llamas')
    }
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly' }}>
        <Button title='Add to calculation' onPress={this.addToCalc} />
        <Button title='Select another exercise' onPress={() => this.props.navigation.navigate('Exercises')} />
        <Button title='See results' onPress={() => this.props.navigation.navigate('Checkout')} />
=======

  onPress = () => {
    Alert.alert('Added to exercise to calculation you fucking degenerate')
  }
  render() {
    return (
      <View style={styles.record_data_view}>
        <CustomButton
          onPress={() => this.props.navigation.navigate('Checkout')}
          button_style={styles.button}
          text_style={styles.button_text}
          text='ADD TO CALCULATION'
        />
        <CustomButton
          onPress={() => this.props.navigation.navigate('Exercises')}
          button_style={styles.button}
          text_style={styles.button_text}
          text='ADD EXERCISE'
        />
        <CustomButton
          onPress={() => this.props.navigation.navigate('Home')}
          button_style={styles.button}
          text_style={styles.button_text}
          text='CALCULATE'
        />
>>>>>>> master
      </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('JoulesGym', () => RecordExerciseDataScreen);