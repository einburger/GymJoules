import React, { Component } from 'react';
import { Alert, AppRegistry, Button, View, Text } from 'react-native';

import styles from '../styles/styles.js';
import CustomButton from '../components/CustomButton'

export default class RecordExerciseDataScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly' }}>
        <CustomButton 
        onPress={() => Alert.alert('Added exercise.')}
        button_style={styles.button}
        text_style={styles.button_text}
        text='ADD TO CALCULATION'
        />
        <CustomButton 
        onPress={() => this.props.navigation.navigate('Excersises')}
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