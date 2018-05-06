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

export default class ExerciseSelectionScreen extends Component {

    // the mutable state
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
        ]
    };

    onPress = () => {
        this.props.navigation.navigate('Record')
    }

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
                <View style={styles.search_bar_container}>
                    <Image style={styles.search_icon} source={require('../assets/search.png')} />
                    <TextInput
                        style={styles.search_bar}
                        placeholder='Search For Exercise'
                        onChangeText={ (text) => this.onSearch(text) }
                        spellCheck={true}
                        underlineColorAndroid='transparent'
                        clearTextOnFocus={true}
                        clearButtonMode='while-editing'
                        inlineImageLeft='search_icon'
                        returnKeyType='search'
                        selectTextOnFocus={true}
                    />
                </View>
                <FlatList
                    data={this.state.data}
                    renderItem={({ item }) => 
                        <CustomListItem 
                            onPress={this.onPress} 
                            img_path={item.path} 
                            item_name={item.name}
                            gif_style={styles.exercise_gif}
                            font_style={styles.exercise_label_text}
                        />
                    }
                />
            </View>
        );
    }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('JoulesGym', () => ExerciseSelectionScreen);