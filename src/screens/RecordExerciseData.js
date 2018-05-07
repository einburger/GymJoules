import React, { Component } from 'react';
import { Alert, AppRegistry, Button, View, Text } from 'react-native';

import styles from '../styles/styles';
import CustomButton from '../components/CustomButton'

export default class RecordExerciseDataScreen extends Component {
  
  onPress = () => {
    Alert.alert('Added to exercise to calculation you fucking degenerate')
  }
  render() {
    return (
<<<<<<< HEAD
      <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly' }}>
        <Button title='Add to calculation' onPress={this.onPress} />
        <Button title='Select another exercise' onPress={() => this.props.navigation.navigate('Exercises')} />
        <Button title='See results' onPress={() => this.props.navigation.navigate('Home')} />
=======
      <View style={styles.record_data_view}>
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
>>>>>>> 6b6914e52dea12a5af703a188398cdbd7baba8c8
      </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('JoulesGym', () => RecordExerciseDataScreen);