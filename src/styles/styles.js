import React from 'react';
import { StyleSheet } from 'react-native';

import Expo from 'expo';

let bg_color = '#fff';
let fg_color = '#f2f2f2';

let button_bg_color = '#5f819d';
let button_fg_color = '#81a2be';

let label_text_color = '#000';

let search_bg_color = '#373b41';
let search_text_color = '#cc6666';

let exercise_border_color = '#000';
let exercise_wrapper_bg = fg_color;

const styles = StyleSheet.create({
    logo: {
        width: '80%',
        height: '10%',
        resizeMode: 'stretch',
        alignItems: 'center'
    },
    home_page_view: {
        paddingTop: Expo.Constants.statusBarHeight,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: bg_color
    },
    record_data_view: {
        paddingTop: Expo.Constants.statusBarHeight,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: bg_color
    },

    button: {
        alignItems: 'center',
        padding: 10,
        borderRadius: 5,
        backgroundColor: button_bg_color
    },
    
    button_container: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    button_text: {
        fontSize: 20,
        fontFamily: 'Roboto',
        color: fg_color
    },

    exercise_container: {
        paddingTop: Expo.Constants.statusBarHeight,
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#e5deda',
    },
    exercise_gif: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 5,
        justifyContent: 'space-evenly',
    },
    exercise_button_wrapper: {
        justifyContent: 'center',
        backgroundColor: exercise_wrapper_bg,
        elevation: 5,
        borderRadius: 5,
        borderColor: exercise_border_color,
        margin: 20
    },
    exercise_label_text: {
        opacity: 20,
        fontSize: 40,
        fontFamily: 'Roboto',
        textAlign: 'left',
        fontWeight: 'bold',
        color: '#b5b5b5',
    },
    switch_style: {
    },

    input_text: {
        flex: 1,
        height: 40,
        fontFamily: 'Roboto',
        color: '#a9a9a9'
    },

    modalContent: {
        backgroundColor: 'white',
        padding: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },

    bottomModal: {
        justifyContent: 'flex-end',
        margin: 0,
    },

    search_bar: {
        flex: 1,
        height: 40,
        fontFamily: 'Roboto',
        color: fg_color
    },
    search_bar_container: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#444950',
        alignItems: 'center',
        borderRadius: 5,
        margin: 10
    },
    search_bar_text: {

    },
    search_icon: {
        padding: 10,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center'
    }
});

export default styles;