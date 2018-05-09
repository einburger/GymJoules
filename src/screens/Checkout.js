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
        super(props)
        this.state = {
            data: [],
            modalVisible: false,
            sets: 0,
            reps: 0
        };
    }

    componentDidMount() {
        this.props.navigation.addListener('willFocus', () => this.addItem());
    }

    addItem = () => {
        if (!this.props.navigation.state.params.statechange) {
            return;
        }
        this.setState(previousState => {
            return {
                data: [...previousState.data,
                {
                    name: this.props.navigation.state.params.exercise,
                    reps: this.props.navigation.state.params.reps,
                    sets: this.props.navigation.state.params.sets, key: '0'
                }
                ]
            }
        });
        this.props.navigation.state.params.statechange = false;
    }

    renderModal = () => (
        <View style={styles.modalContent}>
            <Text>
                {'reps: '}{this.state.reps}{' sets: '}{this.state.sets}
            </Text>
            <CustomButton
                onPress={() => this.setState({ modalVisible: false })}
                button_style={styles.button}
                text_style={styles.button_text}
                text='OK'
            />
        </View>
    );

    onPress = (reps, sets) => {
        this.setState({ reps: reps });
        this.setState({ sets: sets });
        this.setState({ modalVisible: true });
    }

    beDone = () => {
        this.setState(previousState => {
            return { data: [] }
        });
        Alert.alert('you dun did the exercises and now ya got cancer');
    }

    render() {
        return (
            <View style={styles.record_data_view}>
                <FlatList
                    data={this.state.data}
                    renderItem={({ item }) =>
                        <CheckoutListItem
                            item_name={item.name}
                            sets={item.sets}
                            reps={item.reps}
                            font_style={styles.exercise_label_text}
                            checkout_list_item={styles.checkout_list_item}
                        />
                    }
                    keyExtractor={(item, index) => item.key}
                />
                <View style={styles.button_container}>
                    <CustomButton
                        onPress={this.beDone}
                        button_style={styles.button}
                        text_style={styles.button_text}
                        text='CHECKOUT'
                    />
                    <Modal animeationStyle="slide" transparent={true} visible={this.state.modalVisible} onRequestClose={() => { Alert.alert('modal is closed') }}>
                        {this.renderModal()}
                    </Modal>
                </View>

            </View>
        );
    };
}

AppRegistry.registerComponent('JoulesGym', () => CheckoutScreen);