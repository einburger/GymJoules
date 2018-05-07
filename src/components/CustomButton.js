
import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

const custombutton = (props) => {
    return (
        <TouchableOpacity 
            onPress={props.onPress}
            style={props.button_style}>
            <View style={props.view_style}>
                <Text style={props.text_style}>
                    {props.text}
                </Text>
            </View>
        </TouchableOpacity>
    )
};

export default custombutton;