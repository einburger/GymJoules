import React, { Component } from 'react';
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
    state = {
        data: [{name: 'A', key: '0'}, {name: 'B', key: '1'}, {name: 'C', key: '2'},{name: 'D', key: '3'}], 
    }

    addItem = () => {
        this.setState((previousState) => {
            return {data: previousState.data.push({name: 'Daddy', key: '4'})};
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
                            font_style={styles.exercise_label_text}
                        />
                    }
                />
        <CustomButton 
        onPress={this.addItem}
        button_style={styles.button}
        text_style={styles.button_text}
        text='+' 
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

AppRegistry.registerComponent('JoulesGym', () => CheckoutScreen);