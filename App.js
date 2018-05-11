import React from 'react';
import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import NavigationService from './NavigationService'

import HomeScreen from './src/screens/Home'
import ExerciseSelectionScreen from './src/screens/ExerciseSelection';
import RecordExerciseDataScreen from './src/screens/RecordExerciseData';
import CheckoutScreen from './src/screens/Checkout';


class State extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      workout_list: []
    };
  }

  add_item = (e) => {
    this.setState({ workout_list: [...this.state.workout_list, e] });
  }

  render() {
    const data = [
      { path: require('./src/assets/arnold_curl.gif'), name: 'Arnold Curl', key: '0' },
      { path: require('./src/assets/dumbell_military_press.gif'), name: 'Military Press', key: '1' },
      { path: require('./src/assets/skullcrushers.gif'), name: 'Skull Crushers', key: '2' },
      { path: require('./src/assets/bench_press.gif'), name: 'Bench Press', key: '3' },
    ];
    const Tabs = TabNavigator(
      {
        Home: { screen: props => <HomeScreen />, },
        Exercises: { screen: props => <ExerciseSelectionScreen workouts={data} add_item={this.add_item} />, },
        Checkout: { screen: props => <CheckoutScreen workout_list={this.state.workout_list} />, }
      },
      {
        initialRouteName: 'Home',
        tabBarPosition: 'bottom'
      }
    );
    return <Tabs
      ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}
    />;
  }
}

export default class App extends React.Component {
  render() {
    return <State />;
  }
}
