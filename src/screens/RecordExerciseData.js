import React, { Component } from 'react';
import { Alert, AppRegistry, Button, View, Text, TextInput } from 'react-native';

import styles from '../styles/styles';
import CustomButton from '../components/CustomButton'

export default class RecordExerciseDataScreen extends Component {

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
      </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('JoulesGym', () => RecordExerciseDataScreen);