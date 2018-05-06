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
        <View style={styles.container}>
            <TouchableOpacity onPress={props.onPress}>
                <View style={styles.gif}>
                    <Image source={props.img_path}/>
                    <Text fontSize='30'> 
                        {props.item_name}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
};

export default customlistitem;