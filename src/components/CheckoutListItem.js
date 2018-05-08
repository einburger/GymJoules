import React from 'react';
import { TouchableOpacity, Image, View, Text } from 'react-native';

const checkoutlistitem = (props) => {
    return (
    <TouchableOpacity onPress={props.onPress}>
        <View style={props.exercise_button_wrapper}>
            <Text style={props.font_style}> 
                {props.item_name}
            </Text>
        </View>
    </TouchableOpacity>
    )
};

export default checkoutlistitem;