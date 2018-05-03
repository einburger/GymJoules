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

export default class ExerciseSelectionScreen extends Component {
    onPress = () => {
        this.props.navigation.navigate('Record')
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={[
                        { path: require('../assets/arnold_curl.gif'), name: 'Arnold Curl', key: '0' },
                        { path: require('../assets/dumbell_military_press.gif'), name: 'Military Press', key: '1' },
                    ]}
                    renderItem={({ item }) =>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <TouchableOpacity onPress={this.onPress}>
                                <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly' }}>
                                    <Image source={item.path} />
                                    <Text fontSize='30'> {item.name} </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#859a9b',
        borderRadius: 20,
        padding: 10,
        shadowColor: '#303838',
    },
});

// skip this line if using Create React Native App
AppRegistry.registerComponent('JoulesGym', () => ExerciseSelectionScreen);