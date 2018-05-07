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
            data: [{ name: 'A', key: 'a' },
            { name: 'B', key: 'b' },
            { name: 'C', key: 'c' },
            { name: 'D', key: 'd' }]
        };
    }

    addItem = () => {
        this.setState(previousState => {
            return { data: [...previousState.data, {name: this.props.navigation.state.params.exercise, key: 'x'}]}
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
                        <View>
                        <CustomListItem
                            item_name={item.name}
                        />
                        </View>
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