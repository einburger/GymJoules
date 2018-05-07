import React from 'react';
import { TouchableOpacity, Image, View, Text } from 'react-native';

const customlistitem = (props) => {
    return (
        <View style={props.exercise_button_wrapper}>
            <TouchableOpacity onPress={props.onPress}>
                <View style={props.gif_style}>
                    <Image resizeMode='stretch' source={props.img_path}/>
                </View>
            </TouchableOpacity>
            <Text style={props.font_style}> 
                {props.item_name}
            </Text>
        </View>
    )
};

export default customlistitem;