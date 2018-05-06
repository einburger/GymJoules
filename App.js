import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './src/screens/Home'
import ExerciseSelectionScreen from './src/screens/ExerciseSelection';
import RecordExerciseDataScreen from './src/screens/RecordExerciseData';


const RootStack = StackNavigator(
  {
    Home: { screen: HomeScreen, },
    Exercises: { screen: ExerciseSelectionScreen, },
    Record: { screen: RecordExerciseDataScreen, },
    Checkout: { screen: CheckoutScreen, }
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
