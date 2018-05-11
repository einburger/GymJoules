import React from 'react';
import { TouchableOpacity, Image, View, Text } from 'react-native';

const checkoutlistitem = (props) => {
    return (
        <View>
            <View style={props.checkout_list_item}>
                <View style={{ backgroundColor: '#f2f2f2' }}>
                   <Text style={props.font_style}> {props.item_name} </Text>
                </View>
                <View style={{ backgroundColor: 'red' }}>
                    <Text style={props.font_style}> {props.sets} </Text>
                </View>
                <View style={{ backgroundColor: 'blue' }}>
                    <Text style={props.font_style}> {props.reps} </Text>
                </View>
                <View style={{ backgroundColor: 'green' }}>
                    <Text style={props.font_style}> {props.weight} </Text>
                </View>
            </View>
        </View>
    )
};

export default checkoutlistitem;