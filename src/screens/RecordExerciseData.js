import React, { Component } from 'react';
import { Alert, AppRegistry, Button, View, Text } from 'react-native';

import styles from '../styles/styles';
import CustomButton from '../components/CustomButton'

export default class RecordExerciseDataScreen extends Component {
  render() {
    return (
      <View style={styles.record_data_view}>
        <CustomButton
          onPress={() => Alert.alert('Added exercise.')}
          button_style={styles.button}
          text_style={styles.button_text}
          text='ADD TO CALCULATION'
        />
      </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('JoulesGym', () => RecordExerciseDataScreen);