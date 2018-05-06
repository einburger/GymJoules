import React from 'react';
import { StyleSheet } from 'react-native';

let bg_color = '#1d1f21';
let fg_color = '#c5c8c6';

let button_bg_color = '#5f819d';
let button_fg_color = '#81a2be';

let label_text_color = '#000';

let search_bg_color = '#373b41';
let search_text_color = '#cc6666';

const styles = StyleSheet.create({
    logo: {
        width: '80%',
        height: '10%',
        resizeMode: 'stretch',
        alignItems: 'center'
    },
    home_page_view: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: bg_color
    },
    record_data_view: {
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
    button_text: {
        fontSize: 20,
        fontFamily: 'Roboto',
        color: fg_color 
    },

    exercise_container: {
        justifyContent: 'center',
        flex: 1,
        backgroundColor: bg_color,
    },
    exercise_gif: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    exercise_label_text: {
        fontSize: 40,
        fontFamily: 'Roboto',
        color: fg_color,
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
        backgroundColor: search_bg_color,
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