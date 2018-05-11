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
    FlatList,
    Modal
} from 'react-native';


import styles from '../styles/styles'
import CustomListItem from '../components/CustomListItem';
import CustomButton from '../components/CustomButton';
import CheckoutListItem from '../components/CheckoutListItem';

export default class CheckoutScreen extends Component {
    constructor(props) {
        super(props);
    }

    beDone = () => {
        Alert.alert('you dun did the exercises and now ya got cancer');
    }

    render() {
        console.log("what");
        return (
            <View style={styles.record_data_view}>
                <FlatList
                    data={this.props.workout_list}
                    renderItem={({item}) =>
                        <CheckoutListItem
                            item_name={item.name}
                            sets={item.sets}
                            reps={item.reps}
                            weight={item.weight}
                            font_style={styles.checkout_label_text}
                            checkout_list_item={styles.checkout_list_item}
                        />
                    }
                    keyExtractor={(item, index) => item.key}
                />
            </View>
        );
    };
}

AppRegistry.registerComponent('JoulesGym', () => CheckoutScreen);