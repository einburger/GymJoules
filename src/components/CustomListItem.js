import React from 'react';
import { TouchableOpacity, Image, View, Text, Switch } from 'react-native';

valueChange = () => {
};

const customlistitem = (props) => {
    return (
        <View style={props.exercise_button_wrapper}>
            <TouchableOpacity onPress={props.onPress}>
                <View style={{backgroundColor: '#f2f2f2', 
                              borderColor: 'white', 
                              borderWidth: 5,
                              borderTopStartRadius: 5, 
                              borderTopEndRadius: 5}} />
                <View style={props.gif_style}>
                    <Image resizeMode='stretch' source={props.img_path}/>
                </View>
            </TouchableOpacity>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={props.font_style}> 
                    {props.item_name}
                </Text>
                <View/>
                <Switch style={props.switch_style} onValueChange={() => valueChange()}/>
            </View>
        </View>
    )
};

export default customlistitem;