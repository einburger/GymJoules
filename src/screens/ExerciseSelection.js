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
import NavigationService from '../../NavigationService.js';

export default class ExerciseSelectionScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [...this.props.workouts],
            modalVisible: false,
            _name: 'pussy',
            reps: 0,
            sets: 0,
        };
        this.addItem = this.addItem.bind(this);
        var i = 0;
    }

    addItem(e) {
        this.props.add_item(e);
    }

    onPress = (name) => {
        this.setState({ _name: name })
        this.setState({ modalVisible: true })
    }

    onCancel = () => {
        this.setState({ _name: 'none' });
        this.setState({ sets: 0, reps: 0 });
        this.setState({ modalVisible: false });
    }

    onSubmit = (name, reps, sets) => {
        this.i++;
        this.setState({ modalVisible: false });
        this.addItem({
            name: name,
            sets: sets,
            reps: reps,
            key: this.i.toString()
        });
    }

    onSearch = (text) => {
        let searched_text = text;
        let workouts = this.props.workouts;
        let searched_text_lowercase = searched_text.toLowerCase();

        var new_data = [];
        for (var i = 0; i < workouts.length; i++) {
            var name = workouts[i].name.toLowerCase();
            if (name.indexOf(searched_text_lowercase) !== -1) {
                new_data.push(workouts[i]);
            }
        }

        if (new_data.length == 0) {
            this.setState(previousState => {
                return { data: new_data }
            });
        }
        else if (this.state.searched_text != '') {
            this.setState(previousState => {
                return { data: new_data }
            });
        } else {
            this.setState(previousState => {
                return { data: this.props.workouts }
            });
        }
    }

    renderModal = () => (
        <View style={styles.modalContent}>
            <View style={styles.button_container}>
                {/*enter sets*/}
                <TextInput
                    style={styles.input_text}
                    placeholder='enter sets'
                    onChangeText={(text) => { this.setState({ sets: text }) }}
                />
                {/*enter reps*/}
                <TextInput
                    style={styles.input_text}
                    placeholder='enter reps'
                    onChangeText={(text) => { this.setState({ reps: text }) }}
                />
            </View>
            <View style={styles.button_container}>
                <CustomButton
                    onPress={() => this.onSubmit(this.state._name, this.state.reps, this.state.sets)}
                    button_style={styles.button}
                    text_style={styles.button_text}
                    text='Submit'
                />
                <CustomButton
                    onPress={() => this.onCancel()}
                    button_style={styles.button}
                    text_style={styles.button_text}
                    text='Cancel'
                />
            </View>
        </View>
    );

    render() {
        return (
            <View style={styles.exercise_container}>
                <View style={{ elevation: 4, backgroundColor: '#f2f2f2' }}>
                    <View style={styles.search_bar_container}>
                        <Image style={styles.search_icon} source={require('../assets/search.png')} />
                        <TextInput
                            style={styles.search_bar}
                            placeholder='Search For Exercise'
                            onChangeText={(text) => this.onSearch(text)}
                            spellCheck={true}
                            underlineColorAndroid='transparent'
                            clearTextOnFocus={true}
                            clearButtonMode='while-editing'
                            inlineImageLeft='search_icon'
                            returnKeyType='search'
                            selectTextOnFocus={true}
                        />
                    </View>
                </View>
                <FlatList
                    data={this.state.data}
                    renderItem={({ item }) =>
                        <CustomListItem
                            onPress={() => this.onPress(item.name)}
                            img_path={item.path}
                            item_name={item.name}
                            gif_style={styles.exercise_gif}
                            font_style={styles.exercise_label_text}
                            switch_style={styles.switch_style}
                            exercise_button_wrapper={styles.exercise_button_wrapper}
                        />
                    }
                />
                <Modal
                    animeationStyle="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                    style={styles.bottomModal}
                    onRequestClose={() => { Alert.alert('modal is closed') }} >
                    {this.renderModal()}
                </Modal>
            </View>
        );
    }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('JoulesGym', () => ExerciseSelectionScreen);