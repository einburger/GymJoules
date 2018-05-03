import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './src/Home'
import ExerciseSelectionScreen from './src/ExerciseSelection';
import RecordExerciseDataScreen from './src/RecordExerciseData';


const RootStack = StackNavigator(
  {
    Home: { screen: HomeScreen, },
    Exercises: { screen: ExerciseSelectionScreen, },
    Record: { screen: RecordExerciseDataScreen, }
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
