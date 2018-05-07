import React, { Component } from 'react';
<<<<<<< HEAD
import { Alert, AppRegistry, Button, View, Text } from 'react-native';

export default class CheckoutScreen extends Component {
  
    getCucked = () => {
      Alert.alert('you are cucked')
    }
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly' }}>
            <Button title='Get Cucked' onPress={this.getCucked} />
            <Button title='Go back home' onPress={() => this.props.navigation.navigate('Home')} />
      </View>
    );
  }
}

// skip this line if using Create React Native App
=======
import {
    Alert,
    AppRegistry,
    StyleSheet,
    TouchableOpacity,
    Image,
    View,
    Text,
    TextInput,
    FlatList
} from 'react-native';


import styles from '../styles/styles'
import CustomListItem from '../components/CustomListItem';
import CustomButton from '../components/CustomButton';

export default class CheckoutScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        };
    }

    addItem = () => {
        this.setState(previousState => {
            return { data: [...previousState.data, { name: this.props.navigation.state.params.exercise, key: '0' }] }
        });
    }

    beDone = () => {
    }

    render() {
        return (
            <View style={styles.record_data_view}>
                <FlatList
                    data={this.state.data}
                    renderItem={({ item }) =>
                        <CustomListItem
                            item_name={item.name}
                            gif_style={styles.exercise_gif}
                            font_style={styles.exercise_label_text}
                            exercise_button_wrapper={styles.exercise_button_wrapper}
                        />
                    }
                    keyExtractor={(item, index) => item.key}
                />
                <CustomButton
                    onPress={() => this.addItem()}
                    button_style={styles.button}
                    text_style={styles.button_text}
                    text='ADD ITEM'
                />
                <CustomButton
                    onPress={this.beDone}
                    button_style={styles.button}
                    text_style={styles.button_text}
                    text='CHECKOUT'
                />

            </View>
        );
    };
}

>>>>>>> master
AppRegistry.registerComponent('JoulesGym', () => CheckoutScreen);