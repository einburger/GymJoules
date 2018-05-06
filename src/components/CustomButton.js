
import React from 'react';
import {
    View,
    Text
} from 'react-native';

import styles from '../screens/ExerciseSelection'

const custombutton = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
        </TouchableOpacity>
    )
};

export default customlistitem;