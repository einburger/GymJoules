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

import CustomListItem from '../components/CustomListItem';

export default class ExerciseSelectionScreen extends Component {

    // the mutable state
    state = {
        text: '',
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
            { path: '', name: "No Results Found.", key: '-1' }
        ]
    };

    onPress = () => {
        this.props.navigation.navigate('Record')
    }

    onSearch = () => {
        scanData = () => {
            var workouts = this.state.all_data;
            var new_data = [];
            var text = this.state.text.toLowerCase();
            for (var i = 0; i < workouts.length; i++) {
                var name = workouts[i].name.toLowerCase();
                if (name.indexOf(text) !== -1) {
                    new_data.push(workouts[i]);
                }
            }
            return new_data;
        }

        var new_data = scanData();
        if (new_data.length == 0) {
            this.setState(previousState => {
                return { data: this.state.null_data }
            });
        }
        else if (this.state.text != '') {
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
            <View style={styles.container}>
                <View style={styles.searchBarStyle}>
                    <Image style={styles.searchIcon} source={require('../assets/search.png')} />
                    <TextInput
                        style={styles.searchBar}
                        placeholder='Search For Exercise'
                        onChangeText={
                            (text) => this.setState({ text }, () => { this.onSearch() })
                        }
                        spellCheck={true}
                        underlineColorAndroid='transparent'
                        clearTextOnFocus={true}
                        clearButtonMode='while-editing'
                        inlineImageLeft='search_icon'
                        returnKeyType='search'
                        selectTextOnFocus={true}
                        value={this.state.text}
                    />
                </View>
                <FlatList
                    data={this.state.data}
                    renderItem={({ item }) => 
                        <CustomListItem 
                            onPress={this.onPress} 
                            img_path={item.path} 
                            item_name={item.name}
                            gif_style={styles.gif}
                            font_style={styles.exercise_label_text}
                        />
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    button: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#859a9b',
    },
    gif: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    searchBar: {
        flex: 1,
        textAlign: 'center',
        height: 40,
    },
    searchBarStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f7f7f7',
        borderRadius: 5,
        margin: 10
    },
    searchIcon: {
        padding: 10,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center'
    },
    exercise_label_text: {
        fontSize: 50,
        fontFamily: 'Roboto',
        letterSpacing: 3
    }
});

// skip this line if using Create React Native App
AppRegistry.registerComponent('JoulesGym', () => ExerciseSelectionScreen);