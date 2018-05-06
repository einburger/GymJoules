import React, { Component } from 'react';
import { AppRegistry, Button, View, Text, Image, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton'

import styles from '../styles/styles.js'

export default class HomeScreen extends Component {
  onPress = () => {
    this.props.navigation.navigate('Exercises')
  }
  render() {
    return (
      <View style={styles.home_page_view}>
        <Image style={styles.logo} source={require('../../logo.png')} />
        <CustomButton 
          onPress={this.onPress}
          button_style={styles.button}
          text_style={styles.button_text}
          text='ADD EXERCISE'/>
      </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('JoulesGym', () => HomeScreen);