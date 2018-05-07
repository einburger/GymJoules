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
        this.setState(previousState => {
            return { data: []}
        });
        Alert.alert('you dun did the exercises and now ya got cancer');
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
                <View style={styles.button_container}>
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

            </View>
        );
    };
}

AppRegistry.registerComponent('JoulesGym', () => CheckoutScreen);