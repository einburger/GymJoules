import React from 'react';
import {
    TouchableOpacity,
    Image,
    View,
    Text
} from 'react-native';

import styles from '../screens/ExerciseSelection'

const customlistitem = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={props.gif_style}>
                <Image source={props.img_path}/>
                <Text style={props.font_style}> 
                    {props.item_name}
                </Text>
            </View>
        </TouchableOpacity>
    )
};

export default customlistitem;