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
<<<<<<< HEAD

    state = {
        data: [{name: 'A', key: '0'}, {name: 'B', key: '1'}, {name: 'C', key: '2'},{name: 'D', key: '3'}], 
=======
    constructor(props) {
        super(props)
        this.state = {
            data: []
        };
>>>>>>> 481d6e397f0bea9a0bc39ad31ca05e3b077737ee
    }

    addItem = () => {
        this.setState(previousState => {
<<<<<<< HEAD
            return { data: [...previousState.data, {name: 'X', key: 'x'}]}
=======
            return { data: [...previousState.data, { name: this.props.navigation.state.params.exercise, key: '0' }] }
>>>>>>> 481d6e397f0bea9a0bc39ad31ca05e3b077737ee
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

AppRegistry.registerComponent('JoulesGym', () => CheckoutScreen);