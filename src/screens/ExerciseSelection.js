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

export default class ExerciseSelectionScreen extends Component {

    // the mutable state
    // the buttable state
    state = {
        all_data: [
            { path: require('../assets/arnold_curl.gif'), name: 'Arnold Curl', key: '0' },
            { path: require('../assets/dumbell_military_press.gif'), name: 'Military Press', key: '1' },
            { path: require('../assets/skullcrushers.gif'), name: 'Skull Crushers', key: '2' },
            { path: require('../assets/bench_press.gif'), name: 'Bench Press', key: '3' },
        ],
        data: [
            { path: require('../assets/arnold_curl.gif'), name: 'Arnold Curl', key: '0' },
            { path: require('../assets/dumbell_military_press.gif'), name: 'Military Press', key: '1' },
            { path: require('../assets/skullcrushers.gif'), name: 'Skull Crushers', key: '2' },
            { path: require('../assets/bench_press.gif'), name: 'Bench Press', key: '3' },
        ],
        null_data: [
            { path: require('../assets/no_results.gif'), name: "Nothing Found.", key: '-1' }
        ],
        modalVisible: false,
        _name: 'pussy',
        reps: 0,
        sets: 0,
    };

    onPress = (name) => { 
        this.setState({_name: name})
        this.setState({modalVisible: true})
    //    this.props.navigation.navigate('Checkout', { exercise: name }) 
        
    }

    onCancel = () => {
        this.setState({reps: 0});
        this.setState({sets: 0});
        this.setState({modalVisible: false});
    }

    onSubmit = (name, reps, sets) => {
        this.setState({modalVisible: false});
        this.props.navigation.navigate('Checkout', { exercise: name, reps: reps, sets: sets}); 
    }

    renderModal = () => (
        <View style={styles.modalContent}>
            <View style={styles.button_container}>
                {/*enter reps*/}
                <TextInput
                    style={styles.input_text}
                    placeholder='enter reps'
                    onChangeText={(text) => {this.setState({reps: text})}}
                />
                {/*enter sets*/}
                <TextInput 
                    style={styles.input_text}
                    placeholder='enter sets'
                    onChangeText={(text) => {this.setState({sets: text})}}
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

    onSearch = (text) => {
        let searched_text = text;
        let workouts = this.state.all_data;
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
                return { data: this.state.null_data }
            });
        }
        else if (this.state.searched_text != '') {
            this.setState(previousState => {
                return { data: new_data }
            });
        } else {
            this.setState(previousState => {
                return { data: this.state.all_data }
            });
        }
    }

    render() {
        return (
            <View style={styles.exercise_container}>
                <View style={{elevation: 4, backgroundColor: '#f2f2f2'}}>
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
                <Modal animeationStyle="slide" transparent={true} visible={this.state.modalVisible} style={styles.bottomModal} onRequestClose={() => {Alert.alert('modal is closed')}}>
                    {this.renderModal()}
                </Modal>
            </View>
        );
    }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('JoulesGym', () => ExerciseSelectionScreen);