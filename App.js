import React from 'react';
import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';

import HomeScreen from './src/screens/Home'
import ExerciseSelectionScreen from './src/screens/ExerciseSelection';
import RecordExerciseDataScreen from './src/screens/RecordExerciseData';
import CheckoutScreen from './src/screens/Checkout';

const RootStack = TabNavigator(
  {
    Home: { screen: HomeScreen, },
    Exercises: { screen: ExerciseSelectionScreen, },
   // Record: { screen: RecordExerciseDataScreen, },
    Checkout: { screen: CheckoutScreen, }
  },
  {
    initialRouteName: 'Home',
    tabBarPosition: 'bottom'
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
